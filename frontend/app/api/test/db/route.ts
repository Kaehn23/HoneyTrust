import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import { User } from '@/lib/models/User';
import mongoose from 'mongoose';

export async function GET() {
  console.log('DB Test API route called');
  
  try {
    // Test MongoDB connection
    console.log('Testing MongoDB connection...');
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Configured ✅' : 'Missing ❌');
    
    try {
      await connectDB();
      console.log('MongoDB connection successful ✅');
      
      // Get connection status
      const readyState = mongoose.connection.readyState;
      const readyStateMap = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting',
        4: 'invalid'
      };
      console.log(`Connection state: ${readyStateMap[readyState] || readyState}`);
      
      // Test basic operations
      // 1. Count users
      const userCount = await User.countDocuments();
      console.log(`Found ${userCount} users in database`);
      
      // 2. Create a test user with timestamp (won't be saved)
      const testUser = new User({
        name: 'Test User',
        email: `test_${Date.now()}@example.com`,
        password: 'TestPassword123',
        verificationToken: 'test_token_' + Date.now(),
        isVerified: false
      });
      console.log('Test user model creation successful ✅');
      
      // 3. Find sample user (read-only operation)
      const sampleUser = await User.findOne({}).select('-password');
      
      return NextResponse.json({
        status: 'success',
        message: 'Database connection test successful',
        connection: {
          state: readyStateMap[readyState] || readyState,
          connected: readyState === 1,
        },
        users: {
          count: userCount,
          sample: sampleUser ? {
            id: sampleUser._id,
            email: sampleUser.email,
            name: sampleUser.name,
            isVerified: sampleUser.isVerified,
            hasVerificationToken: !!sampleUser.verificationToken
          } : null
        }
      });
    } catch (dbError: any) {
      console.error('MongoDB connection failed:', dbError);
      return NextResponse.json({
        status: 'error',
        message: 'Database connection failed',
        error: {
          name: dbError.name,
          message: dbError.message,
          code: dbError.code,
          stack: process.env.NODE_ENV === 'development' ? dbError.stack : undefined
        }
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Test route error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'System test failed',
      error: error.message
    }, { status: 500 });
  }
} 