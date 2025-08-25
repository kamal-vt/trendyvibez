'use client';

import { useRef } from 'react'

interface TiltCardProps {
  imageSrc: string
  title?: string
  subtitle?: string
  className?: string
  style?: React.CSSProperties
}

export default function TiltCard({
  imageSrc,
  title,
  subtitle,
  className = '',
  style,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | null>(null)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)
  const lastTsRef = useRef<number>(0)
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 })
  const currentRef = useRef<{ rx: number; ry: number; sx: number; sy: number; scale: number }>({ rx: 0, ry: 0, sx: 0, sy: 0, scale: 1 })
  const targetRef = useRef<{ rx: number; ry: number; sx: number; sy: number; scale: number }>({ rx: 0, ry: 0, sx: 0, sy: 0, scale: 1.03 })

  const startRAF = () => {
    if (animRef.current != null) return
    const step = () => {
      const card = cardRef.current
      if (!card) return
      const current = currentRef.current
      const target = targetRef.current
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t
      // Smoothly interpolate toward target for inertia
      current.rx = lerp(current.rx, target.rx, 0.15)
      current.ry = lerp(current.ry, target.ry, 0.15)
      current.sx = lerp(current.sx, target.sx, 0.2)
      current.sy = lerp(current.sy, target.sy, 0.2)
      current.scale = lerp(current.scale, target.scale, 0.1)

      card.style.setProperty('--tilt-x', `${current.rx}deg`)
      card.style.setProperty('--tilt-y', `${current.ry}deg`)
      card.style.setProperty('--shadow-x', `${current.sx}px`)
      card.style.setProperty('--shadow-y', `${current.sy}px`)
      card.style.setProperty('--scale', `${current.scale}`)

      // Stop when very close to rest
      const dist = Math.abs(current.rx - target.rx) + Math.abs(current.ry - target.ry) + Math.abs(current.sx - target.sx) + Math.abs(current.sy - target.sy)
      if (dist < 0.05 && Math.abs(current.scale - target.scale) < 0.001) {
        animRef.current = null
        return
      }
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const halfW = rect.width / 2
    const halfH = rect.height / 2

    // Base tilt from pointer position
    const maxTilt = 20
    const baseRy = ((x - halfW) / halfW) * maxTilt
    const baseRx = -((y - halfH) / halfH) * maxTilt

    // Velocity-based momentum (px/ms)
    const now = performance.now()
    if (lastPosRef.current) {
      const dt = Math.max(16, now - lastTsRef.current)
      const dx = x - lastPosRef.current.x
      const dy = y - lastPosRef.current.y
      const vx = dx / dt
      const vy = dy / dt
      // Low-pass filter
      velocityRef.current.vx = velocityRef.current.vx * 0.8 + vx * 0.2
      velocityRef.current.vy = velocityRef.current.vy * 0.8 + vy * 0.2
    }
    lastPosRef.current = { x, y }
    lastTsRef.current = now

    const speed = Math.min(1.5, Math.hypot(velocityRef.current.vx, velocityRef.current.vy) * 50)
    const momentumFactor = 10
    const rx = baseRx + -velocityRef.current.vy * momentumFactor
    const ry = baseRy + velocityRef.current.vx * momentumFactor

    const maxOffset = 35
    const sx = -((x - halfW) / halfW) * maxOffset
    const sy = -((y - halfH) / halfH) * maxOffset

    // Keep a consistent hover scale for equal visual size
    targetRef.current = {
      rx,
      ry,
      sx,
      sy,
      scale: 1.03,
    }
    startRAF()
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    // Ease back to rest (inertia decay)
    targetRef.current = { rx: 0, ry: 0, sx: 0, sy: 0, scale: 1 }
    startRAF()
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`
        ${className}
        w-64 h-80 sm:w-64 sm:h-80 bg-white rounded-xl transition-all duration-500 ease-out
        flex flex-col items-center justify-center overflow-hidden relative
         cursor-pointer
        [transform:rotateX(var(--tilt-x))_rotateY(var(--tilt-y))_scale(var(--scale))]
        [box-shadow:var(--shadow-x)_var(--shadow-y)_25px_rgba(0,0,0,0.2)]
        will-change-transform
        hover:shadow-2xl hover:z-10
        group
      `}
    >
      <img
        src={imageSrc}
        alt={title || "Card image"}
        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Smooth overlay with title and subtitle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-xl">
        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
          {title && (
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm opacity-90">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}
