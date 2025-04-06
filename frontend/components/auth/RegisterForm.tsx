'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { registerSchema, type RegisterInput } from '@/lib/utils/validation';

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterInput>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Partial<RegisterInput>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setValidationErrors({});

    try {
      // Validate form data
      registerSchema.parse(formData);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Redirect to login page after successful registration
      router.push('/auth/login');
    } catch (err: any) {
      if (err.name === 'ZodError') {
        const errors = err.errors.reduce((acc: any, curr: any) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setValidationErrors(errors);
      } else {
        setError(err.message);
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
            Créer un compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Déjà un compte ?{' '}
            <Link href="/auth/login" className="font-medium text-[#ffdb16] hover:text-[#ffdb16]/90">
              Se connecter
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
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Nom complet"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={validationErrors.name}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffdb16] focus:ring-[#ffdb16]"
            />
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
              autoComplete="new-password"
              required
              placeholder="Mot de passe"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={validationErrors.password}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffdb16] focus:ring-[#ffdb16]"
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Confirmer le mot de passe"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={validationErrors.confirmPassword}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#ffdb16] focus:ring-[#ffdb16]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#ffdb16] text-black hover:bg-[#ffdb16]/90 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
            isLoading={loading}
          >
            Créer un compte
          </Button>
        </form>
      </div>
    </div>
  );
} 