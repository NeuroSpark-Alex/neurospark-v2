import React, { useState } from 'react';
import { GeminiService } from '../services/geminiService';

const LogoGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await GeminiService.generateLogo("Futuristic neon brain synapse, electric energy");
      setImage(result);
    } catch (err: any) {
      setError(err.message === "API_KEY_MISSING" 
        ? "⚠️ Falta la API_KEY. Por favor, añádela en Vercel." 
        : "Ocurrió un error al generar el logo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="logo" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-slate-900/50 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black mb-6 leading-none">
              IDENTIDAD <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">RELÁMPAGO</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              No pierdas tiempo diseñando. Nuestra IA entiende la velocidad de tu mente y crea un logo que rompe el molde en segundos.
            </p>
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-cyan-400 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? "GENERANDO CHISPA..." : "GENERAR LOGO AHORA"}
            </button>
            {error && <p className="mt-4 text-red-400 font-bold text-sm">{error}</p>}
          </div>

          <div className="aspect-square bg-black rounded-[2rem] border-2 border-white/5 overflow-hidden flex items-center justify-center relative group">
            {image ? (
              <img src={image} className="w-full h-full object-cover animate-in fade-in zoom-in duration-700" alt="Logo" />
            ) : (
              <div className="text-center">
                <div className={`w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full mx-auto mb-4 ${loading ? 'animate-spin' : ''}`}></div>
                <p className="text-gray-600 font-bold uppercase tracking-widest text-xs">
                  {loading ? 'Mapeando neuronas...' : 'Listo para crear'}
                </p>
              </div>
            )}
            {loading && <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGenerator;
