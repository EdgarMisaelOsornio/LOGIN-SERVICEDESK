import { NextResponse } from 'next/server';

export function middleware(req) {
  const auth = req.cookies.get('auth');

  const protectedRoutes = ['/dashboard'];

  if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    if (!auth) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
