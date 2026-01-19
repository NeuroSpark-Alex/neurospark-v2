import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const BrandLogo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = false }) => {
  return (
    <div className={`flex items-center gap-4 ${showText ? '' : 'justify-center'}`}>
      <div className={`${className} relative`}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>
        
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
          <defs>
            <linearGradient id="logoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
            <filter id="neonShadow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>

          {/* Cerebro Geométrico */}
          <path 
            d="M50 10 L70 18 L85 35 L85 65 L70 90 L50 100 L30 90 L15 65 L15 35 L30 18 Z" 
            stroke="#22D3EE"
            strokeWidth="3" 
            strokeLinejoin="round"
            filter="url(#neonShadow)"
          />
          <path 
            d="M50 10 L70 18 L85 35 L85 65 L70 90 L50 100 L30 90 L15 65 L15 35 L30 18 Z" 
            stroke="url(#logoGradientMain)" 
            strokeWidth="3" 
            strokeLinejoin="round"
          />
          
          {/* Rayo de Hiperenfoque */}
          <path 
            d="M55 25 L40 55 H52 L45 80 L62 50 H50 L58 25Z" 
            fill="#A855F7"
            filter="url(#neonShadow)"
          />
          <path 
            d="M55 25 L40 55 H52 L45 80 L62 50 H50 L58 25Z" 
            fill="url(#logoGradientMain)"
          />

          {/* Engranaje de Negocio */}
          <g transform="translate(50, 108)">
            <circle r="8" stroke="#3B82F6" strokeWidth="2" fill="none" />
            {[0, 90, 180, 270].map((a) => (
              <rect key={a} x="-1.5" y="-12" width="3" height="5" fill="#3B82F6" transform={`rotate(${a})`} rx="1" />
            ))}
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none">
            NEURO<span className="text-cyan-400">SPARK</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.5em] text-purple-400 uppercase mt-1">
            Ventures
          </span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
