import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const BrandLogo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = false }) => {
  const uniqueId = useId().replace(/:/g, "");
  const gradId = `logoGrad-${uniqueId}`;

  return (
    <div className={`flex items-center gap-3 ${className.includes('flex-col') ? 'flex-col' : 'flex-row'}`}>
      <div className={`relative ${className.split(' ').find(c => c.startsWith('w-')) || 'w-12'} ${className.split(' ').find(c => c.startsWith('h-')) || 'h-12'}`}>
        <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="60%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>

          {/* CEREBRO GEOMÉTRICO FACETADO (Réplica de la imagen) */}
          <g stroke={`url(#${gradId})`} strokeWidth="3" strokeLinejoin="round" fill="none">
            {/* Contorno y facetas principales */}
            <path d="M200 50 L140 80 L100 130 L90 200 L110 280 L160 330 L200 350 L240 330 L290 280 L310 200 L300 130 L260 80 Z" />
            <path d="M140 80 L200 120 L260 80" />
            <path d="M100 130 L160 160 L240 160 L300 130" />
            <path d="M90 200 L160 190 L240 190 L310 200" />
            <path d="M110 280 L180 250 L220 250 L290 280" />
            {/* Líneas internas de profundidad */}
            <path d="M200 50 V120" strokeOpacity="0.5" />
            <path d="M160 160 L140 80" strokeOpacity="0.4" />
            <path d="M240 160 L260 80" strokeOpacity="0.4" />
            <path d="M160 190 L100 130" strokeOpacity="0.4" />
            <path d="M240 190 L300 130" strokeOpacity="0.4" />
          </g>

          {/* EL RAYO DE ENERGÍA CENTRAL */}
          <path 
            d="M215 90 L165 220 H210 L175 320 L235 190 H190 L215 90Z" 
            fill={`url(#${gradId})`}
            className="animate-pulse"
          />

          {/* EL ENGRANAJE DE ESTRUCTURA */}
          <g transform="translate(200, 380)">
            <circle r="45" stroke={`url(#${gradId})`} strokeWidth="4" strokeDasharray="10 5" />
            <circle r="25" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <rect key={a} x="-6" y="-55" width="12" height="15" fill={`url(#${gradId})`} transform={`rotate(${a})`} rx="2" />
            ))}
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col ml-1">
          <span className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-none">
            Neuro<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Spark</span>
          </span>
          <span className="text-[10px] font-black tracking-[0.4em] text-cyan-400/50 uppercase mt-1">Ventures</span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
