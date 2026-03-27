import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/data/products";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = {
  products: [
    { label: "Shop Towels", href: "/products#shop-towels" },
    { label: "Terry Towels", href: "/products#terry-towels" },
    { label: "Industrial Textile", href: "/products#industrial-textile" },
    { label: "Hospitality Textile", href: "/products#hospitality-textile" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Get Quote", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">Rohan Mirza</span>
                <p className="text-xs text-gray-400 -mt-1">Textiles</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
