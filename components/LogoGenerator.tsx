import React, { useState } from 'react';
import { generateLogo } from '../services/geminiService';
import BrandLogo from './BrandLogo';

const LogoGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<{message: string, isQuota: boolean} | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateLogo("High tech geometric brain, lightning energy, cyan and purple neon lines, vector art, black background");
      setImage(result);
    } catch (err: any) {
      const isQuota = err.message.includes("quota") || err.message.includes("429");
      setError({
        message: isQuota 
          ? "HAS AGOTADO TU CUOTA GRATUITA. Google limita la generación de imágenes en cuentas gratuitas. Prueba de nuevo en unos minutos o usa una cuenta con facturación activa."
          : err.message || "Error de conexión.",
        isQuota
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="logo" className="py-32 px-6">
      <div className="max-w-6xl mx-auto bg-slate-900/40 border border-white/5 rounded-[4rem] p-8 md:p-20 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-8"></div>
            <h2 className="text-6xl font-black mb-8 leading-[0.9] tracking-tighter">
              LABORATORIO DE <br/>
              <span className="text-cyan-400">IDENTIDAD</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">
              Explora variantes de marca generadas por IA. Nota: La generación de imágenes requiere que tu API KEY tenga cuota disponible en Google Cloud.
            </p>
            
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="w-full sm:w-auto group relative px-12 py-6 bg-white text-black rounded-3xl font-black text-xl transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="relative flex items-center justify-center gap-3">
                {loading ? 'GENERANDO...' : 'CREAR VARIANTE VISUAL'}
              </span>
            </button>
            
            {error && (
              <div className={`mt-6 p-6 border rounded-2xl ${error.isQuota ? 'bg-orange-500/10 border-orange-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                <p className={`${error.isQuota ? 'text-orange-400' : 'text-red-400'} font-bold text-sm leading-tight italic`}>
                  {error.message}
                </p>
                {error.isQuota && (
                  <a href="https://aistudio.google.com/app/plan_and_billing" target="_blank" className="text-[10px] text-orange-300 underline mt-2 block">
                    Revisar límites de mi cuenta en Google AI Studio ↗
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="aspect-square bg-black/80 rounded-[4rem] border-2 border-white/5 overflow-hidden flex items-center justify-center relative shadow-2xl">
              {image ? (
                <img src={image} className="w-full h-full object-cover animate-in fade-in zoom-in duration-700" alt="Variante Generada" />
              ) : (
                <div className="text-center p-12 opacity-60">
                   <BrandLogo className="w-32 h-32 mx-auto mb-8 flex-col" />
                  <p className="text-gray-600 font-black uppercase tracking-[0.5em] text-[10px]">
                    SISTEMA DE PREVISUALIZACIÓN
                  </p>
                </div>
              )}
              {loading && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center">
                   <div className="w-20 h-20 border-t-4 border-cyan-400 rounded-full animate-spin shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGenerator;
