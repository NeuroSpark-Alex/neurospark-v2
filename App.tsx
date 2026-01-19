import React, { useState } from 'react';
import { generateLogo } from './services/geminiService';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCreateLogo = async () => {
    setLoading(true);
    setError(null);
    try {
      const img = await generateLogo("Impactful, electric, symmetrical, professional");
      setLogo(img);
    } catch (e: any) {
      setError(e.message || "Error al conectar con la IA");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-purple-500/30">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-purple-500/20">N</div>
          <span className="font-extrabold tracking-tighter text-2xl">NEURO<span className="text-cyan-400">SPARK</span></span>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95">UNIRSE AL CAOS</button>
      </nav>

      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black tracking-widest uppercase mb-8">
            Diseñado por y para Mentes Divergentes
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            TU TDAH ES TU <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">MAYOR ACTIVO</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            No busques un trabajo. Crea una industria. En NeuroSpark, emparejamos tu hiperenfoque con estructuras de negocio sólidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#generator" className="bg-purple-600 hover:bg-purple-500 px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-purple-500/40">MONTAR NEGOCIO</a>
            <button className="border border-white/10 hover:bg-white/5 px-12 py-5 rounded-2xl font-bold text-xl transition-all">NUESTRA TESIS</button>
          </div>
        </div>

        {/* Generator Section */}
        <section id="generator" className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">IMAGINA TU MARCA EN <span className="text-cyan-400">MILISEGUNDOS</span></h2>
              <p className="text-gray-400 mb-8 text-lg">
                El hiperenfoque no espera. Nuestra IA genera identidades visuales para tu próxima idea antes de que pierdas el interés. Pruébalo ahora.
              </p>
              <button 
                onClick={handleCreateLogo}
                disabled={loading}
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    SINCRONIZANDO NEURONAS...
                  </>
                ) : "GENERAR LOGO IMPACTANTE"}
              </button>
              {error && <p className="mt-4 text-red-400 text-sm font-bold">⚠️ {error}</p>}
            </div>

            <div className="aspect-square bg-black rounded-[2.5rem] border border-white/5 flex items-center justify-center relative group overflow-hidden shadow-2xl">
              {logo ? (
                <img src={logo} className="w-full h-full object-cover animate-in fade-in zoom-in duration-500" alt="Generated Identity" />
              ) : (
                <div className="text-center p-8">
                  <div className={`w-20 h-20 border-2 border-dashed border-white/10 rounded-full mx-auto mb-6 flex items-center justify-center ${loading ? 'animate-pulse' : ''}`}>
                    <span className="text-3xl">🧠</span>
                  </div>
                  <p className="text-gray-600 font-bold uppercase tracking-widest text-xs">Esperando una chispa creativa...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            { t: "Socio Estructural", d: "Tú tienes las ideas, nosotros ponemos el orden y la administración.", i: "⚖️" },
            { t: "Rondas de 48h", d: "Sprints de ejecución diseñados para tu pico de dopamina.", i: "⚡" },
            { t: "Capital Semilla", d: "Inversión directa para mentes que piensan diferente.", i: "💎" }
          ].map((f, i) => (
            <div key={i} className="p-10 bg-white/5 rounded-[2rem] border border-white/5 hover:border-purple-500/30 transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{f.i}</div>
              <h3 className="text-2xl font-black mb-4">{f.t}</h3>
              <p className="text-gray-500 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-20 text-center border-t border-white/5 text-gray-600 text-sm font-bold uppercase tracking-widest">
        &copy; 2024 NeuroSpark Ventures. Built for those who can't stop.
      </footer>
    </div>
  );
};

export default App;
