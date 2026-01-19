import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import DownloadProject from './DownloadProject';
import DeploymentModal from './DeploymentModal';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <BrandLogo className="w-10 h-10" showText={true} />
          <div className="flex gap-2 mt-2">
            <DownloadProject />
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-all text-xs font-bold"
            >
              🚀 Guía de Lanzamiento
            </button>
          </div>
        </div>
        
        <div className="flex space-x-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        
        <p className="text-sm text-gray-600">
          &copy; 2024 NeuroSpark Ventures. Designed for the Divergent.
        </p>
      </div>

      {isModalOpen && <DeploymentModal onClose={() => setIsModalOpen(false)} />}
    </footer>
  );
};

export default Footer;
