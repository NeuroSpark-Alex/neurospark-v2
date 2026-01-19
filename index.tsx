import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  
  // Renderizamos la App
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Función para quitar el cargador
  const removeLoader = () => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  };

  // Intentamos quitarlo casi inmediatamente
  setTimeout(removeLoader, 500);
}
