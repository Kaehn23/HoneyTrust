'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { GenerateNFTButton } from '@/components/dashboard/GenerateNFTButton';
import ConnectWalletModal from '@/components/ui/ConnectWalletModal';
import { useAccount } from 'wagmi';

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    // Show modal only if not connected
    if (!isConnected) {
      setIsModalOpen(true);
    }
  }, [isConnected]);

  useEffect(() => {
    const email = searchParams.get('email');
    if (!email) {
      router.push('/login');
      return;
    }

    const fetchUserName = async () => {
      try {
        const response = await fetch(`/api/dashboard?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      }
    };

    fetchUserName();
  }, [searchParams, router]);

  if (!userName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffdb16]"></div>
      </div>
    );
  }

  const navigateToCreateHoneyLot = () => {
    const email = searchParams.get('email');
    router.push(`/dashboard/create?email=${encodeURIComponent(email || '')}`);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Bienvenue, {userName} !
        </h1>
        {isModalOpen && <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        
        <div className="w-full max-w-3xl mb-10 space-y-4">
          <div className="md:hidden">
            <Button 
              onClick={navigateToCreateHoneyLot}
              className="w-full px-6 py-3 bg-[#ffdb16] text-black font-semibold rounded-md hover:bg-[#e5c414] transition-colors"
            >
              Créer un nouveau lot de miel
            </Button>
          </div>
          
          <div className="w-full">
            <GenerateNFTButton />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black text-center w-full">
          {/* Add your dashboard content here */}
        </div>
      </div>
    </DashboardLayout>
  );
} 