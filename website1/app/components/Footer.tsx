import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl mb-4">
              <span className="text-blue-400">Textile</span>Exports
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer and exporter of premium quality textile madeups since 1995.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Home Textiles</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Fashion Fabrics</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Industrial Textiles</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Custom Solutions</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span>123 Textile Industrial Area, City, State 12345</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <span>info@textileexports.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>
            © 2026 TextileExports. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
