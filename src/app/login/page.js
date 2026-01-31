'use client';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsShaking(false);

    const usuario = e.target.usuario.value;
    const password = e.target.password.value;

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, password }),
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      setError('AUTH_FAILURE: USER OR PASS INVALID');
      setIsShaking(true);
      // Detener la vibración después de 0.5s
      setTimeout(() => setIsShaking(false), 500);
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@500;700&display=swap');

        .login-body {
          height: 100vh;
          background-color: #0a0a0c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Rajdhani', sans-serif;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          margin: 0;
          color: #fff;
          overflow: hidden;
        }

        .login-card {
          background: rgba(15, 15, 20, 0.95);
          padding: 50px;
          border: 2px solid ${error ? '#ff4444' : '#00d4ff'};
          border-radius: 0 40px 0 40px;
          width: 400px;
          text-align: center;
          box-shadow: 0 0 30px ${error ? 'rgba(255, 68, 68, 0.3)' : 'rgba(0, 212, 255, 0.2)'};
          position: relative;
          transition: all 0.3s ease;
        }

        /* Animación de vibración */
        .shake {
          animation: shakeAnim 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        @keyframes shakeAnim {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: ${error ? '#ff4444' : '#00d4ff'};
          box-shadow: 0 0 15px ${error ? '#ff4444' : '#00d4ff'};
          animation: scanLine 3s linear infinite;
        }

        @keyframes scanLine {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .login-title {
          font-family: 'Orbitron', sans-serif;
          margin-bottom: 10px;
          font-size: 28px;
          letter-spacing: 3px;
          color: ${error ? '#ff4444' : '#00d4ff'};
          text-shadow: 0 0 10px ${error ? '#ff4444' : '#00d4ff'};
        }

        .login-subtitle {
          margin-bottom: 35px;
          color: #888;
          font-size: 14px;
          text-transform: uppercase;
        }

        .login-input {
          width: 100%;
          padding: 15px;
          margin-bottom: 20px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #333;
          border-left: 4px solid ${error ? '#ff4444' : '#00d4ff'};
          color: ${error ? '#ff4444' : '#00d4ff'};
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          outline: none;
          box-sizing: border-box;
          transition: 0.3s;
        }

        .login-button {
          width: 100%;
          padding: 15px;
          background: transparent;
          color: ${error ? '#ff4444' : '#00d4ff'};
          border: 2px solid ${error ? '#ff4444' : '#00d4ff'};
          font-family: 'Orbitron', sans-serif;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
          text-transform: uppercase;
          transition: 0.4s;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }

        .login-button:hover {
          background: ${error ? '#ff4444' : '#00d4ff'};
          color: #000;
          box-shadow: 0 0 25px ${error ? '#ff4444' : '#00d4ff'};
        }

        .login-error {
          margin-top: 20px;
          color: #ff4444;
          font-family: 'Orbitron', sans-serif;
          font-size: 12px;
          text-shadow: 0 0 5px #ff4444;
          background: rgba(255, 68, 68, 0.1);
          padding: 10px;
          border: 1px solid #ff4444;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="login-body">
        <div className={`login-card ${isShaking ? 'shake' : ''}`}>
          <h2 className="login-title">{error ? 'ACCESS_DENIED' : 'LOGIN_SYSTEM'}</h2>
          <p className="login-subtitle">Introduce credenciales de acceso</p>

          <form onSubmit={handleSubmit}>
            <input
              name="usuario"
              placeholder="USER_ID"
              required
              className="login-input"
              autoComplete="off"
            />
            <input
              name="password"
              type="password"
              placeholder="ACCESS_KEY"
              required
              className="login-input"
            />
            <button type="submit" className="login-button">
              Initialize_
            </button>
          </form>

          {error && <div className="login-error">{error}</div>}
        </div>
      </div>
    </>
  );
}