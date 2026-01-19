import React, { useState } from 'react';
import { GeminiService } from '../services/geminiService';
import { AppStatus } from '../types';

const LogoGenerator: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateNewLogo = async () => {
    setStatus(AppStatus.GENERATING);
    setError(null);
    try {
      const imageUrl = await GeminiService.generateLogoVariation(
        "Modern electric logo, brain synapse style, neon purple and blue."
      );
      setGeneratedLogo(imageUrl);
      setStatus(AppStatus.SUCCESS);
    } catch (err: any) {
      console.error(err);
      let msg = "Error al conectar con la IA.";
      if (err.message?.includes("API_KEY")) {
        msg = "⚠️ CONFIGURACIÓN NECESARIA: Abre la 'Guía de Lanzamiento' abajo para activar la IA.";
      }
      setError(msg);
      setStatus(AppStatus.ERROR);
    }
  };

  return (
    <section id="logo" className="py-48 px-6 bg-black relative">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-slate-900/80 to-black border border-white/10 rounded-[5rem] p-10 md:p-32 backdrop-blur-3xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
            <div className="lg:w-1/2 text-left">
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 inline-block border border-indigo-500/30">
                Creatividad Divergente
              </span>
              <h2 className="text-7xl font-black mb-10 text-white leading-[0.85] tracking-tighter">
                TU LOGO <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">EN SEGUNDOS</span>
              </h2>
              <p className="text-2xl text-gray-400 mb-16 leading-tight max-w-xl font-medium">
                Deja de procrastinar con el diseño. Nuestra IA crea una identidad visual que representa la velocidad de tu mente.
              </p>
              
              <div className="space-y-6">
                <button 
                  onClick={generateNewLogo}
                  disabled={status === AppStatus.GENERATING}
                  className="group relative px-14 py-8 bg-white text-black rounded-[2.5rem] font-black text-2xl hover:bg-emerald-400 transition-all disabled:opacity-50 overflow-hidden shadow-2xl shadow-emerald-500/20"
                >
                  <span className="relative z-10 uppercase">
                    {status === AppStatus.GENERATING ? 'Iniciando Hiperenfoque...' : 'GENERAR LOGO AHORA'}
                  </span>
                </button>

                {error && (
                  <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-3xl animate-in slide-in-from-top-2 duration-300">
                     <p className="text-red-400 font-bold text-sm tracking-tight leading-relaxed">
                       {error}
                     </p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-square max-w-xl mx-auto group">
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[4rem] blur-2xl group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative h-full bg-slate-950 border-4 border-white/10 rounded-[4rem] overflow-hidden shadow-2xl flex items-center justify-center">
                  {generatedLogo ? (
                    <img src={generatedLogo} className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000" alt="Logo IA" />
                  ) : (
                    <div className="text-center p-12">
                      <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-white/10 relative">
                        <div className={`w-12 h-12 bg-indigo-500 rounded-full ${status === AppStatus.GENERATING ? 'animate-ping' : 'animate-pulse'}`}></div>
                      </div>
                      <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-xs">
                        {status === AppStatus.GENERATING ? 'Mapeando Ideas...' : 'Esperando tu chispa'}
                      </p>
                    </div>
                  )}
                  
                  {status === AppStatus.GENERATING && (
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                      <div className="h-1.5 w-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,1)] absolute top-0 animate-scan"></div>
                      <div className="absolute inset-0 bg-cyan-400/5 animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 2s linear infinite; }
      `}</style>
    </section>
  );
};

export default LogoGenerator;
