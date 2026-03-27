'use client';

import { Menu, X, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:info@textileexports.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@textileexports.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Trusted Textile Manufacturer Since 1995
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            <span className="text-blue-600">Textile</span>Exports
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 text-black transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 text-black transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-blue-600 text-black transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('features')} className="hover:text-blue-600 text-black transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 text-black transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left text-black hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-black hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-left text-black hover:text-blue-600 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('features')} className="text-left text-black hover:text-blue-600 transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-black hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
