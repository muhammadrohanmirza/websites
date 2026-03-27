'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-gold/15 ${
          scrolled
            ? 'bg-[#0a0a0a]/97 backdrop-blur-md'
            : 'bg-[#0a0a0a]/92 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[5%] h-[70px] flex items-center justify-between">
          <Link href="/" className="font-serif text-white text-xl">
            Rohan Mirza <span className="text-gold">Textiles</span>
          </Link>

          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.78rem] tracking-[0.12em] uppercase transition-colors ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-white/75 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block bg-gold text-black px-5 py-2 text-[0.75rem] font-semibold tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[70px] left-0 right-0 bg-[#0a0a0a]/97 border-b border-gold/15 z-40 md:hidden">
          <div className="flex flex-col gap-0 divide-y divide-gold/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-4 px-[5%] font-serif text-2xl transition-colors ${
                  pathname === link.href ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-4 px-[5%] font-serif text-2xl text-gold bg-gold/10"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
