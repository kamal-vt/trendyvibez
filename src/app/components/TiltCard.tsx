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

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const halfW = rect.width / 2
    const halfH = rect.height / 2

    // Enhanced tilt angles for more playful movement
    const maxTilt = 25
    const rotateY = ((x - halfW) / halfW) * maxTilt
    const rotateX = -((y - halfH) / halfH) * maxTilt

    // Enhanced shadow offset for more dramatic effect
    const maxOffset = 40
    const shadowX = -((x - halfW) / halfW) * maxOffset
    const shadowY = -((y - halfH) / halfH) * maxOffset

    // Add scale effect on hover
    const scale = 1.05

    card.style.setProperty('--tilt-x', `${rotateX}deg`)
    card.style.setProperty('--tilt-y', `${rotateY}deg`)
    card.style.setProperty('--shadow-x', `${shadowX}px`)
    card.style.setProperty('--shadow-y', `${shadowY}px`)
    card.style.setProperty('--scale', `${scale}`)
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--tilt-x', `0deg`)
    card.style.setProperty('--tilt-y', `0deg`)
    card.style.setProperty('--shadow-x', `0px`)
    card.style.setProperty('--shadow-y', `0px`)
    card.style.setProperty('--scale', `1`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`
        ${className}
        w-64 h-80 bg-white rounded-xl transition-all duration-500 ease-out
        flex flex-col items-center justify-center
        transform-gpu cursor-pointer
        [transform:rotateX(var(--tilt-x))_rotateY(var(--tilt-y))_scale(var(--scale))]
        [box-shadow:var(--shadow-x)_var(--shadow-y)_25px_rgba(0,0,0,0.2)]
        will-change-transform
        hover:shadow-2xl hover:scale-110 hover:z-10
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
