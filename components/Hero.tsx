import React from 'react';
import BrandLogo from './BrandLogo';

const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative pt-24 pb-32 px-6 overflow-hidden min-h-screen flex items-center bg-[#020617]">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[800px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-cyan-600/10 blur-[180px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto text-center max-w-6xl relative z-10">
        {/* Logo Central Gigante */}
        <div className="flex justify-center mb-16 transform hover:scale-110 transition-transform duration-700 pointer-events-auto">
           <BrandLogo className="w-48 h-48 md:w-72 md:h-72" />
        </div>

        <div className="inline-flex items-center gap-3 px-8 py-3 mb-12 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl">
          <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-white text-[11px] font-black tracking-[0.4em] uppercase opacity-90">
            NeuroSpark Ventures | Protocolo ADHD
          </span>
        </div>

        <h1 className="text-6xl md:text-[9rem] font-black mb-10 leading-[0.8] tracking-tighter text-white uppercase italic">
          TU TDAH ES TU <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            MAYOR ACTIVO
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
          No busques un trabajo. Crea una industria. En <span className="text-white font-black">NeuroSpark</span>, canalizamos tu hiperenfoque hacia estructuras de negocio de alto rendimiento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href="#logo" className="w-full sm:w-auto px-12 py-6 bg-purple-600 text-white rounded-3xl font-black text-2xl hover:bg-purple-500 transition-all shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)]">
            MONTAR NEGOCIO
          </a>
          <button className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-3xl font-bold text-2xl hover:bg-white/10 transition-all backdrop-blur-md">
            NUESTRA TESIS
          </button>
        </div>

        {/* Stats */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-white/5">
          {[
            { label: 'HIPERENFOQUE', val: '⚡ 100%' },
            { label: 'CREATIVIDAD', val: '🧠 RADICAL' },
            { label: 'SOCIOS', val: '🤝 EXPERTOS' },
            { label: 'RIESGO', val: '🛡️ MÍNIMO' }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left group">
              <div className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">{stat.val}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.5em] font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
