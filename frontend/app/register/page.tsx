'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import AppLogo from '@/components/ui/AppLogo';
import { SuccessModal } from '@/components/ui/SuccessModal';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'L\'inscription a échoué');
      }

      setShowSuccessModal(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || 'L\'inscription a échoué');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <AppLogo size={48} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Créer votre compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Rejoignez-nous pour commencer
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Nom complet
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 text-black"
                placeholder="Entrez votre nom complet"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
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
                placeholder="Créer un mot de passe"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
                Confirmez le mot de passe
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 text-black"
                placeholder="Confirmez votre mot de passe"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              isLoading={loading}
            >
              Créer un compte
            </Button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-200">
            Vous avez déjà un compte ?{' '}
            <Link href="/login" className="font-medium text-indigo-400 hover:text-indigo-500">
              Connexion
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 