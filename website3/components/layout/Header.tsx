"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/products";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Products", 
    href: "/products",
    dropdown: [
      { label: "Shop Towels", href: "/products#shop-towels" },
      { label: "Terry Towels", href: "/products#terry-towels" },
      { label: "Industrial Textile", href: "/products#industrial-textile" },
      { label: "Hospitality Textile", href: "/products#hospitality-textile" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className={`font-bold text-xl tracking-tight ${isScrolled || pathname !== "/" ? "text-gray-900" : "text-gray-900"}`}>
                  Rohan Mirza
                </span>
                <p className="text-xs text-gray-500 -mt-1">Textiles</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`flex items-center space-x-1 font-medium transition-colors ${
                          pathname === item.href ? "text-amber-600" : "text-gray-700 hover:text-gray-900"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors ${
                        pathname === item.href ? "text-amber-600" : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button variant="primary" size="sm">
                Get Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-white md:hidden top-20"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-900"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-gray-600"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-gray-900"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button variant="primary" className="w-full mt-4">
                Get Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
