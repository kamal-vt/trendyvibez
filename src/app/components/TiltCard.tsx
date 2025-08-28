'use client';

import { useRef, useCallback } from 'react';

interface TiltCardProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  className?: string;
  style?: React.CSSProperties;
  tiltMultiplier?: number; // NEW → controls how strong the tilt is (1 = full, 0.75 = 75%)
  isHovered?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export default function TiltCard({
  imageSrc,
  title,
  subtitle,
  className = '',
  style,
  tiltMultiplier = 1,
  isHovered = false,
  onHover,
  onLeave,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isHovered) return; // only tilt if hovered

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      const maxTilt = 15;
      const tiltX = -((y - halfH) / halfH) * maxTilt * tiltMultiplier;
      const tiltY = ((x - halfW) / halfW) * maxTilt * tiltMultiplier;

      const maxShadow = 20;
      const shadowX = -((x - halfW) / halfW) * maxShadow * tiltMultiplier;
      const shadowY = -((y - halfH) / halfH) * maxShadow * tiltMultiplier;

      card.style.setProperty('--tilt-x', `${tiltX}deg`);
      card.style.setProperty('--tilt-y', `${tiltY}deg`);
      card.style.setProperty('--shadow-x', `${shadowX}px`);
      card.style.setProperty('--shadow-y', `${shadowY}px`);
      card.style.setProperty('--scale', '1.03');
    },
    [tiltMultiplier, isHovered]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--shadow-x', '0px');
    card.style.setProperty('--shadow-y', '0px');
    card.style.setProperty('--scale', '1');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={() => {
        handleMouseLeave();
        onLeave?.();
      }}
      style={style}
      className={`
        ${className}
        w-64 sm:w-64 bg-white rounded-xl
        flex flex-col items-center justify-center overflow-hidden relative
        cursor-pointer
        [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))_scale(var(--scale,1))]
        [box-shadow:var(--shadow-x,0px)_var(--shadow-y,0px)_20px_rgba(0,0,0,0.15)]
        will-change-transform
        transition-all duration-300 ease-out
        group
      `}
    >
      <img
        src={imageSrc}
        alt={title || 'Card image'}
        className="w-full object-cover rounded-xl transition-transform duration-300 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-xl">
        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-75">
          {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
          {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
