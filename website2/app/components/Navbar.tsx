'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-tl from-amber-700/50 to-transparent rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h1 className={`text-2xl lg:text-3xl font-bold tracking-tight ${
                  isScrolled ? 'text-neutral-900' : 'text-white drop-shadow-2xl'
                }`}>
                  TEXTILE<span className="text-amber-600">CO</span>
                </h1>
                <p className={`text-xs tracking-widest ${
                  isScrolled ? 'text-neutral-600' : 'text-white/90 drop-shadow-lg'
                }`}>
                  PREMIUM FABRICS
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 lg:px-6 py-2 text-sm lg:text-base font-medium tracking-wide transition-all duration-300 rounded-sm
                  ${isScrolled 
                    ? 'text-neutral-700 hover:text-amber-700 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-300 hover:bg-white/10'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-sm transition-colors ${
              isScrolled 
                ? 'text-neutral-700 hover:bg-neutral-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-2xl border-t border-neutral-200">
          {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-amber-700 hover:bg-amber-50 rounded-sm font-medium transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
