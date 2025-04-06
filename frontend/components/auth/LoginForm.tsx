'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { loginSchema, type LoginInput } from '@/lib/utils/validation';

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginInput>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Partial<LoginInput>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setValidationErrors({});
    setLoading(true);

    console.log('Login form submitted', { email: formData.email });
    
    try {
      // Validate form data
      console.log('Validating form data');
      try {
        loginSchema.parse(formData);
        console.log('Form validation successful');
      } catch (validationError: any) {
        console.error('Form validation failed:', validationError);
        throw validationError;
      }

      console.log('Sending login request');
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important: Include credentials
        body: JSON.stringify(formData),
      });

      console.log('Login request response status:', response.status);
      const data = await response.json();
      console.log('Login response data:', data);

      if (!response.ok) {
        console.error('Login failed with status:', response.status);
        throw new Error(data.message || data.error || 'Something went wrong');
      }

      console.log('Login successful:', data);

      // Verify the auth state before redirecting
      console.log('Verifying auth state');
      try {
        const authCheck = await fetch('/api/auth/check', {
          credentials: 'include',
        });
        
        console.log('Auth check status:', authCheck.status);
        
        if (!authCheck.ok) {
          const authError = await authCheck.json();
          console.error('Auth check failed:', authError);
          throw new Error('Authentication verification failed: ' + (authError.message || ''));
        }
        
        const authData = await authCheck.json();
        console.log('Auth check successful:', authData);
      } catch (authError: any) {
        console.error('Auth check request failed:', authError);
        throw authError;
      }

      // Use replace instead of push to prevent back navigation to login
      console.log('Navigating to dashboard');
      router.replace('/dashboard');
    } catch (err: any) {
      console.error('Login process error:', err);
      if (err.name === 'ZodError') {
        const errors = err.errors.reduce((acc: any, curr: any) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        console.log('Validation errors:', errors);
        setValidationErrors(errors);
      } else {
        setError(err.message || 'An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#ffdb16]">
            Connexion
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Pas encore de compte ?{' '}
            <Link href="/auth/register" className="font-medium text-[#ffdb16] hover:text-[#ffdb16]/90">
              Créer un compte
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <Alert variant="error">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Adresse email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={validationErrors.email}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffdb16] focus:ring-[#ffdb16]"
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Mot de passe"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={validationErrors.password}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffdb16] focus:ring-[#ffdb16]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/auth/forgot-password" className="font-medium text-[#ffdb16] hover:text-[#ffdb16]/90">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#ffdb16] text-black hover:bg-[#ffdb16]/90 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
            isLoading={loading}
          >
            Se connecter
          </Button>
        </form>
      </div>
    </div>
  );
} 