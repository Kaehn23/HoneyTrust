'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Sidebar } from '@/components/ui/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export function DashboardLayout({ children, requireAuth = true }: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (requireAuth) {
      const email = searchParams.get('email');
      if (!email) {
        router.push('/login');
        return;
      }
    }
    setIsLoading(false);
  }, [searchParams, router, requireAuth]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffdb16]"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        <main className="p-8 pt-10">
          {children}
        </main>
      </div>
    </div>
  );
} 