'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import AppLogo from '@/components/ui/AppLogo';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Redirect to dashboard with email
      router.push(`/dashboard?email=${encodeURIComponent(formData.email)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <AppLogo size={48} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Bienvenue 
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Connectez-vous à votre compte pour continuer
          </p>
          <p className="text-sm text-center p-4 text-green-500 mb-6">
            Pour une experience optimale, veuillez vous connecter via un ordinateur.  
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Adresse email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 text-black"
                placeholder="Entrez votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={error}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Mot de passe
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 text-black"
                placeholder="Entrez votre mot de passe"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              isLoading={loading}
            >
              Connexion
            </Button>
          </div>
        </form>

        <div className="text-center space-y-2 ">
          <p className="text-sm text-gray-200">
              Pas de compte ?{' '}
            <Link href="/register" className="font-medium  text-indigo-400 hover:text-indigo-500">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 