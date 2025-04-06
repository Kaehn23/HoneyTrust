import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  // Mark the features as disabled with a "disabled" flag.
  const navigation = [
    {
      name: 'Créer un nouveau lot de miel',
      disabled: true,
      href: email
        ? `/dashboard/create?email=${encodeURIComponent(email)}`
        : '/dashboard/create',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      name: 'Historique',
      disabled: true,
      href: email
        ? `/dashboard/history?email=${encodeURIComponent(email)}`
        : '/dashboard/history',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#ffdb16] hover:bg-[#ffdb16]/10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-[60] w-64 bg-gray-900/80 backdrop-blur-sm border-r border-[#ffdb16]/20 transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0',
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-[#ffdb16]/20">
            <h1 className="text-xl font-bold text-[#ffdb16]">HoneyTrust</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.disabled ? '#' : item.href}
                  onClick={() => {
                    if (!item.disabled) {
                      setIsOpen(false);
                    }
                  }}
                  className={cn(
                    'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300',
                    item.disabled
                      ? 'line-through text-gray-500 cursor-not-allowed'
                      : isActive
                      ? 'bg-[#ffdb16] text-black'
                      : 'text-gray-300 hover:bg-[#ffdb16]/10 hover:text-[#ffdb16]'
                  )}
                >
                  <span className={cn('mr-3', item.disabled && 'line-through')}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
