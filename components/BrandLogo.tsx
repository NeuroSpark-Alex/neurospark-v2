import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const BrandLogo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = false }) => {
  const uniqueId = useId().replace(/:/g, "");
  const gradientId = `logoGrad-${uniqueId}`;

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="relative w-full h-full group">
        {/* Resplandor de fondo para que resalte en el negro */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>

          {/* CEREBRO FACETADO (Geometría exacta de la imagen) */}
          <g stroke={`url(#${gradientId})`} strokeWidth="2.5" strokeLinejoin="round" fill="none">
            {/* Hemisferio Izquierdo */}
            <path d="M200 60 L140 85 L100 135 L90 200 L110 270 L150 320 L200 340" />
            <path d="M140 85 L160 140 L100 135" />
            <path d="M160 140 L180 200 L90 200" />
            <path d="M180 200 L150 260 L110 270" />
            <path d="M150 260 L200 340" />
            <path d="M160 140 L200 120" />
            
            {/* Hemisferio Derecho */}
            <path d="M200 60 L260 85 L300 135 L310 200 L290 270 L250 320 L200 340" />
            <path d="M260 85 L240 140 L300 135" />
            <path d="M240 140 L220 200 L310 200" />
            <path d="M220 200 L250 260 L290 270" />
            <path d="M240 140 L200 120" />
          </g>

          {/* EL RAYO CENTRAL (Energía TDAH) */}
          <path 
            d="M220 100 L170 210 H215 L180 300 L240 180 H195 L220 100Z" 
            fill={`url(#${gradientId})`}
            className="animate-pulse"
          />

          {/* ENGRANAJE INFERIOR (Estructura de negocio) */}
          <g transform="translate(200, 360)">
            <circle r="35" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
            <circle r="20" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect 
                key={angle}
                x="-6" y="-50" width="12" height="18" 
                fill={`url(#${gradientId})`} 
                transform={`rotate(${angle})`}
                rx="2"
              />
            ))}
          </g>
        </svg>
      </div>

      {showText && (
        <div className="text-center mt-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center justify-center">
            Neuro<span className="text-cyan-400">Spark</span>
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-1 opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
