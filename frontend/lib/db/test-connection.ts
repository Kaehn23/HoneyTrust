import connectDB from './mongodb';

async function testConnection() {
  try {
    await connectDB();
    console.log('✅ MongoDB connection successful!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
}

testConnection(); 