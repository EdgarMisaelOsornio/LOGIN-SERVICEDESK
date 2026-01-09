'use client';

export default function Login() {
  async function handleSubmit(e) {
    e.preventDefault();

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
      alert('Usuario o contraseña incorrectos');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="usuario" placeholder="Usuario" required />
      <input name="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
  );
}

const styles = {
  body: {
    height: '100vh',
    background: 'linear-gradient(135deg, #007bff, #00c6ff)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI',
  },
  card: {
    background: '#fff',
    padding: 40,
    borderRadius: 14,
    width: 380,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 14,
    marginBottom: 15,
    borderRadius: 8,
    border: '1px solid #ccc',
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
  },
};
