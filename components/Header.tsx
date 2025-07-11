
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#694bf1] to-purple-600 rounded-xl flex items-center justify-center">
              <i className="ri-chat-smile-3-fill text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-pacifico)' }}>
              africhat
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
              Contact
            </Link>
            <button className="bg-[#694bf1] text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-700`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#694bf1] transition-colors font-medium">
                Contact
              </Link>
              <button className="bg-[#694bf1] text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors text-left whitespace-nowrap cursor-pointer">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
