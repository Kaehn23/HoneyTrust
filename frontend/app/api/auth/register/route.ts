import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('Register API called');
    const body = await request.json();
    console.log('Request body:', { ...body, password: '[REDACTED]' });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Registration failed:', data);
      return NextResponse.json(
        { error: data.error || 'Registration failed' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 