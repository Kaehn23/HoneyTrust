import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { IUser } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const JWT_EXPIRES_IN = '24h';

// Check if JWT_SECRET is properly set
if (!process.env.JWT_SECRET) {
  console.warn('WARNING: JWT_SECRET environment variable is not defined. Using fallback secret for development only.');
}

export const generateToken = (user: IUser): string => {
  console.log('Generating token for user:', user._id);
  try {
    const payload = { 
      id: user._id,
      email: user.email,
    };
    
    console.log('Token payload:', payload);
    const token = jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
    
    console.log('Token generated successfully');
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw error;
  }
};

export const verifyToken = (token: string): any => {
  try {
    console.log('Verifying token');
    if (!token) {
      console.log('No token provided');
      return null;
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Token verified successfully');
    return decoded;
  } catch (error: any) {
    console.error('Token verification failed:', error.message);
    if (error.name === 'TokenExpiredError') {
      console.log('Token has expired');
    } else if (error.name === 'JsonWebTokenError') {
      console.log('Invalid token');
    } else if (error.name === 'NotBeforeError') {
      console.log('Token not active');
    }
    return null;
  }
};

export const generateVerificationToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const generateResetToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const hashResetToken = (token: string): string => {
  return crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
}; 