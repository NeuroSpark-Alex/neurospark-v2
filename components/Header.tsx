import React from 'react';
import BrandLogo from './BrandLogo';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[100] backdrop-blur-xl border-b border-white/5 bg-[#020617]/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <BrandLogo showText={true} className="w-10 h-10" />
        
        <nav className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <a href="#vision" className="hover:text-white transition-colors">Visión</a>
          <a href="#ventajas" className="hover:text-white transition-colors">Método</a>
          <a href="#logo" className="hover:text-white transition-colors">Identidad</a>
          <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-xs hover:scale-105 transition-all shadow-lg shadow-white/5">
            UNIRSE AL CAOS
          </button>
        </nav>

        <button className="lg:hidden text-white p-2 bg-white/5 rounded-xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
