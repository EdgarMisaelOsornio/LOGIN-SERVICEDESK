'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState('');

  // 🔹 Cargar preferencia y Reloj
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🔹 Alternar modo oscuro
  function toggleDarkMode() {
    if (darkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
    setDarkMode(!darkMode);
  }

  return (
    <>
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
        }

        body {
          font-family: "Segoe UI", Arial, sans-serif;
          background-color: #f4f4f4;
          color: #222;
          transition: background 0.3s, color 0.3s;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .navbar {
          background: #007bff;
          color: white;
          padding: 15px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .navbar a {
          color: white;
          margin-left: 20px;
          text-decoration: none;
          font-weight: bold;
          font-size: 16px;
        }

        #clock {
          text-align: center; 
          font-weight: bold; 
          font-family: monospace; 
          font-size: 30px;
          padding: 10px 0;
          text-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
        }

        .welcome {
          max-width: 700px;
          margin: 40px auto;
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
          text-align: center;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding: 20px;
          max-width: 100%;
          margin: 0 auto;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 500px;
          padding: 15px 20px;
          background-color: #007bff;
          color: white;
          font-size: 18px;
          border-radius: 8px;
          text-decoration: none;
          transition: 0.2s;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
        }

        .btn span:not(.icon) {
          flex-grow: 1;
          text-align: center;
        }

        .btn:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        .icon {
          margin: 0 5px;
        }

        footer {
          padding: 20px;
          background: #222;
          color: white;
          text-align: center;
          font-size: 16px;
          margin-top: auto; 
        }

        /* 🌙 MODO OSCURO */
        .dark-mode {
          background: #121212;
          color: #eee;
        }

        .dark-mode .navbar { background: #333; }
        .dark-mode .welcome { background: #1e1e1e; color: #eee; }
        .dark-mode .btn { background: #444; }
        .dark-mode .btn:hover { background: #666; }
        .dark-mode footer { background: #000; }
        .dark-mode #clock { text-shadow: 0 0 15px rgba(0, 212, 255, 0.5); }

        .dark-toggle {
          cursor: pointer;
          padding: 6px 12px;
          background: white;
          color: #007bff;
          font-weight: bold;
          border-radius: 25px;
          margin-left: 20px;
        }

        @media screen and (max-width: 1900px) {
          body { zoom: 0.70; }
        }
      `}</style>

      {/* NAVBAR */}
      <div className="navbar">
        <div><strong>SERVICE DESK</strong></div>
        <div>
          <a href="#">Inicio</a>
          <a href="#">Ayuda</a>
          <a href="#">Contacto</a>
          <a
            href="#"
            onClick={async (e) => {
              e.preventDefault();
              await fetch('/api/logout', { method: 'POST' });
              window.location.href = '/login';
            }}
          >
            Cerrar sesión
          </a>
          <span className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </span>
        </div>
      </div>

      <div id="clock">{time}</div>

      {/* BIENVENIDA */}
      <div className="welcome">
        <h1>Bienvenido al panel de herramientas del Service Desk</h1>
        <p>Selecciona la herramienta que deseas utilizar.</p>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="main-content">
        <a className="btn" href="/CLAVES_ETRANSPORTE/claves_etransporte.html">
          <span className="icon">📦</span>
          <span>CLAVES E-TRANSPORTE</span>
          <span className="icon">📦</span>
        </a>

        <a className="btn" href="/CLAVES_SEDENA/claves_sedena.html">
          <span className="icon">🛡️</span>
          <span>CLAVES SEDENA</span>
          <span className="icon">🛡️</span>
        </a>

        <a className="btn" href="/VIDEOWALLS/videowalls.html">
          <span className="icon">🖥️</span>
          <span>VIDEOWALLS</span>
          <span className="icon">🖥️</span>
        </a>

        <a className="btn" href="/POLITICAS/politicas.html">
          <span className="icon">⚖️</span>
          <span>POLITICAS</span>
          <span className="icon">⚖️</span>
        </a>
      </div>

      <footer>© 2025 — Service Desk</footer>
    </>
  );
}