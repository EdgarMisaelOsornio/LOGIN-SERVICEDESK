'use client';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

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
      setError('Usuario o contraseña incorrectos');
    }
  }

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <h2>Service Desk</h2>
        <p>Acceso al panel de herramientas</p>

        <form onSubmit={handleSubmit}>
          <input
            name="usuario"
            placeholder="Usuario"
            required
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Ingresar
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  body: {
    height: '100vh',
    background: 'linear-gradient(135deg, #007bff, #00c6ff)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI, Arial',
  },
  card: {
    background: '#fff',
    padding: 40,
    borderRadius: 14,
    width: 380,
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  },
  input: {
    width: '100%',
    padding: 14,
    marginBottom: 15,
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: 15,
  },
  button: {
    width: '100%',
    padding: 14,
    background: '#007bff',
    color: '#fff',
    borderRadius: 8,
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: 16,
  },
  error: {
    marginTop: 15,
    color: '#dc3545',
    fontSize: 14,
  },
};
