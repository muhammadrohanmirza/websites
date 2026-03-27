'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-sm transform rotate-45"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-tl from-amber-700/50 to-transparent rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  TEXTILE<span className="text-amber-600">CO</span>
                </h3>
                <p className="text-xs tracking-widest text-neutral-400">PREMIUM FABRICS</p>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Leading textile manufacturer delivering premium quality fabrics since 1985.
              Excellence in every thread.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { name: 'facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { name: 'instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
                { name: 'linkedin', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
              ].map((social) => (
                <button
                  key={social.name}
                  className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-neutral-400 hover:text-amber-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Products</h4>
            <ul className="space-y-3">
              {[
                'Cotton Fabrics',
                'Silk Blends',
                'Denim Collection',
                'Linen Fabrics',
                'Technical Fabrics',
                'Home Textiles',
              ].map((product) => (
                <li key={product}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-neutral-400 hover:text-amber-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-neutral-400 mb-4 leading-relaxed">
              Subscribe to get updates on new products and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-neutral-800 border-2 border-neutral-700 rounded-sm text-white placeholder-neutral-500 focus:border-amber-600 focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} TextileCo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="text-neutral-500 hover:text-amber-500 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-neutral-500 hover:text-amber-500 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-neutral-500 hover:text-amber-500 transition-colors duration-300">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 group"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
