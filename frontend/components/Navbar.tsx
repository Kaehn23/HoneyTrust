"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import AppLogo from './ui/AppLogo'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle clicks outside of the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <AppLogo size={100} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 text-black uppercase font-bold">
              <div className="flex space-x-8 bg-[#ffdb16] rounded-full px-6 py-2">
                <Link 
                  href="/"
                  className={cn(
                    "text-black font-semibold hover:text-[#ffdb16] px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black"
                  )}
                >
                  Accueil
                </Link>
                <Link
                  href="#faq"
                  className={cn(
                    "text-black font-semibold hover:text-[#ffdb16] px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black"
                  )}
                >
                  F.A.Q
                </Link>
                <Link
                  href="#lois-reglementation"
                  className={cn(
                    "text-black font-semibold hover:text-[#ffdb16] px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black"
                  )}
                >
                  Lois & Réglementation
                </Link>
                <Link
                  href="#support"
                  className={cn(
                    "text-black font-semibold hover:text-[#ffdb16] px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black"
                  )}
                >
                  Support
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-[#ffdb16] hover:bg-[#ffdb16]/10 focus:outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
              >
                <div className="w-6 h-6 relative">
                  <span className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  )} />
                  <span className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "opacity-100"
                  )} />
                  <span className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  )} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
          style={{ zIndex: 50 }}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <AppLogo size={60} />
            </Link>
          </div>
          <div className="px-4 pt-4 pb-3">
            <div className="bg-[#ffdb16]/80 rounded-2xl p-4 space-y-2">
              <Link
                href="/"
                className={cn(
                  "text-black font-semibold hover:text-[#ffdb16] block px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#ffdb16]/10 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="#faq"
                className={cn(
                  "text-black font-semibold hover:text-[#ffdb16] block px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#ffdb16]/10 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                F.A.Q
              </Link>
              <Link
                href="#lois-reglementation"
                className={cn(
                  "text-black font-semibold hover:text-[#ffdb16] block px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#ffdb16]/10 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                Lois & Réglementation
              </Link>
              <Link
                href="#support"
                className={cn(
                  "text-black font-semibold hover:text-[#ffdb16] block px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#ffdb16]/10 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
