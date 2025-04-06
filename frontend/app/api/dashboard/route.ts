import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    console.log('Dashboard API called');
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    console.log('Email from query:', email);

    if (!email) {
      console.log('No email provided');
      return new NextResponse(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Call the backend API
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    const response = await fetch(`${backendUrl}/dashboard?email=${email}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.log('Backend error:', error);
      return new NextResponse(JSON.stringify(error), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    console.log('Backend response:', data);
    
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Dashboard API error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 