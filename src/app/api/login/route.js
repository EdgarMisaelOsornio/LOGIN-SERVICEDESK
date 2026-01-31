import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'; // Importamos la librería

export async function POST(req) {
  try {
    const { usuario, password } = await req.json();

    // Cargamos los datos desde las variables de entorno
    const users = {
      [process.env.USER_1_ID]: process.env.USER_1_HASH,
      [process.env.USER_2_ID]: process.env.USER_2_HASH,
    };

    const userHash = users[usuario];

    // Si el usuario no existe o la contraseña no coincide con el Hash
    if (!userHash || !bcrypt.compareSync(password, userHash)) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // 👉 Crear cookie segura si todo es correcto
    const response = NextResponse.json({ ok: true });

    response.cookies.set('auth', 'true', {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}