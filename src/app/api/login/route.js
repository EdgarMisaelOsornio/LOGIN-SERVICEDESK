import { NextResponse } from 'next/server';

export async function POST(req) {
  const { usuario, password } = await req.json();

  // 👉 USUARIOS (ejemplo)
  const usuarios = {
    admin: '123456',
    soporte: 'desk2025'
  };

  if (!usuarios[usuario] || usuarios[usuario] !== password) {
    return NextResponse.json(
      { error: 'Credenciales inválidas' },
      { status: 401 }
    );
  }

  // 👉 Crear cookie segura
  const response = NextResponse.json({ ok: true });

  response.cookies.set('auth', 'true', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
  });

  return response;
}
