import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './auth';
import { AuthenticationError } from '../utils/errors';

export async function authMiddleware(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      throw new AuthenticationError('No authentication token provided');
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      throw new AuthenticationError('Invalid authentication token');
    }

    // Add user info to request headers for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.id);
    requestHeaders.set('x-user-email', decoded.email);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    if (error instanceof AuthenticationError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export function withAuth(handler: Function) {
  return async (request: NextRequest) => {
    const response = await authMiddleware(request);
    
    if (response instanceof NextResponse && response.status !== 200) {
      return response;
    }

    return handler(request);
  };
} 