import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import { User } from '@/lib/models/User';

export async function GET() {
  console.log('Test API route called');
  
  try {
    // Test environment variables
    const envStatus = {
      JWT_SECRET: !!process.env.JWT_SECRET,
      MONGODB_URI: !!process.env.MONGODB_URI,
      NODE_ENV: process.env.NODE_ENV || 'development',
    };
    
    console.log('Environment variables status:', envStatus);
    
    // Test database connection
    try {
      console.log('Attempting to connect to MongoDB');
      await connectDB();
      console.log('MongoDB connection successful');
      
      // Count users to verify DB access
      const userCount = await User.countDocuments();
      console.log(`Found ${userCount} users in database`);
      
      return NextResponse.json({
        status: 'success',
        message: 'System status check successful',
        db: {
          connected: true,
          userCount,
        },
        env: envStatus,
      });
    } catch (dbError: any) {
      console.error('MongoDB connection failed:', dbError);
      return NextResponse.json({
        status: 'error',
        message: 'Database connection failed',
        error: dbError.message,
        env: envStatus,
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Test route error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'System status check failed',
      error: error.message,
    }, { status: 500 });
  }
} 