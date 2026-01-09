'use client';

export default function Dashboard() {
  return (
    <>
      <style>{`
        body {
          font-family: "Segoe UI", Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #222;
          transition: background 0.3s, color 0.3s;
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

        .welcome {
          max-width: 700px;
          margin: 40px auto;
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
          text-align: center;
        }

        .btn {
          display: block;
          width: 300px;
          margin: 15px auto;
          padding: 15px;
          background-color: #007bff;
          color: white;
          font-size: 18px;
          border-radius: 8px;
          text-decoration: none;
          transition: 0.2s;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .btn:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        footer {
          margin-top: 500px;
          padding: 20px;
          background: #222;
          color: white;
          text-align: center;
          font-size: 14px;
        }

        .dark-mode {
          background: #121212;
          color: #eee;
        }

        .dark-mode .navbar {
          background: #333;
        }

        .dark-mode .welcome {
          background: #1e1e1e;
          color: #eee;
        }

        .dark-mode .btn {
          background: #444;
        }

        .dark-mode .btn:hover {
          background: #666;
        }

        .dark-toggle {
          cursor: pointer;
          padding: 6px 12px;
          background: white;
          color: #007bff;
          font-weight: bold;
          border-radius: 6px;
        }
      `}</style>

      {/* NAVBAR */}
      <div className="navbar">
        <strong>SERVICE DESK</strong>

        <div>
          <a href="#">Inicio</a>
          <a href="#">Ayuda</a>
          <a href="#">Contacto</a>

          <a
            href="#"
            onClick={async () => {
              await fetch('/api/logout', { method: 'POST' });
              window.location.href = '/login';
            }}
          >
            Cerrar sesión
          </a>

          <span
            className="dark-toggle"
            onClick={() => document.body.classList.toggle('dark-mode')}
          >
            🌙
          </span>
        </div>
      </div>

      {/* BIENVENIDA */}
      <div className="welcome">
        <h2>Bienvenido al panel de herramientas del Service Desk</h2>
        <p>Selecciona la herramienta que deseas utilizar.</p>
      </div>

      {/* BOTONES */}
      <a className="btn" href="/CLAVES_ETRANSPORTE/claves_etransporte.html">📦 CLAVES ETRANSPORTE</a>
      <a className="btn" href="/CLAVES_SEDENA/claves_sedena.html">🛡️ CLAVES SEDENA</a>
      <a className="btn" href="/VIDEOWALLS/videowalls.html">🖥️ VIDEOWALLS</a>
      <a className="btn" href="/POLITICAS/politicas.html">⚖️ POLITICAS</a>
      <a className="btn" href="/HORARIOS/horarios.html">⏰ HORARIOS</a>

      <footer>© 2025 — Service Desk</footer>
    </>
  );
}
