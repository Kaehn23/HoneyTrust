import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log('Processing path:', path);

  // Define public paths that don't require authentication
  const publicPaths = ['/login', '/register', '/forgot-password'];
  const isPublicPath = publicPaths.some(publicPath => path.startsWith(publicPath));
  console.log('Is public path:', isPublicPath);

  // Get email from query params
  const email = request.nextUrl.searchParams.get('email');

  // If it's a public path and user is logged in, redirect to dashboard
  if (isPublicPath && email) {
    console.log('User is logged in, redirecting to dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If it's a protected path and user is not logged in, redirect to login
  if (!isPublicPath && !email) {
    console.log('User is not logged in, redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
    '/reset-password',
    '/login',
    '/register',
    '/forgot-password'
  ]
}; 