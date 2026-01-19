import React from 'react';
import BrandLogo from './BrandLogo';

const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative pt-24 pb-32 px-6 overflow-hidden min-h-screen flex items-center bg-[#020617]">
      {/* Hexagon Background overlay (CSS en index.html) */}
      <div className="absolute inset-0 hex-bg opacity-30 pointer-events-none"></div>

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[800px] h-[800px] bg-purple-600/5 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-cyan-600/5 blur-[180px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto text-center max-w-6xl relative z-10">
        {/* LOGO QUE REPRODUCE TU IMAGEN */}
        <div className="flex justify-center mb-12">
           <BrandLogo className="w-64 h-72 md:w-[450px] md:h-[500px]" showText={true} />
        </div>

        <div className="inline-flex items-center gap-3 px-8 py-3 mb-10 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl">
          <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_rgba(34,211,238,1)]"></span>
          <span className="text-white text-[11px] font-black tracking-[0.4em] uppercase opacity-90">
            Neurodivergencia aplicada al Capital
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-white uppercase italic">
          TU MENTE NO ESTÁ ROTA <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            ES UNA VENTAJA
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          En NeuroSpark Ventures, transformamos el caos creativo en unicornios tecnológicos. Tú pones la visión, nosotros la estructura.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href="#logo" className="w-full sm:w-auto px-12 py-6 bg-cyan-500 text-black rounded-3xl font-black text-2xl hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            MONTAR NEGOCIO
          </a>
          <button className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-3xl font-bold text-2xl hover:bg-white/10 transition-all">
            NUESTRA TESIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
