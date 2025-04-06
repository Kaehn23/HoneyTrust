'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './Button';

interface BackButtonProps {
  label: string;
  destination: string;
  preserveParams?: boolean;
  className?: string;
}

export function BackButton({ 
  label, 
  destination, 
  preserveParams = true,
  className = ""
}: BackButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleClick = () => {
    if (preserveParams) {
      const email = searchParams.get('email');
      if (email) {
        router.push(`${destination}?email=${encodeURIComponent(email)}`);
        return;
      }
    }
    router.push(destination);
  };
  
  return (
    <Button
      onClick={handleClick}
      className={`bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition-colors ${className}`}
    >
      <svg 
        className="w-4 h-4 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
      {label}
    </Button>
  );
} 