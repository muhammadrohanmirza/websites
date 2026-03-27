import Link from 'next/link'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export default function Footer() {
  const certifications = ['ISO 9001', 'OEKO-TEX', 'GOTS', 'WRAP']

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-white text-xl">
              Rohan Mirza <span className="text-gold">Textiles</span>
            </Link>
            <p className="text-white/40 font-light text-sm leading-relaxed max-w-[220px] mt-2">
              Premium textile manufacturer and exporter from Karachi, Pakistan.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-[0.65rem] tracking-widest uppercase text-gold border border-gold/30 px-2.5 py-1"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-1">
              <Link href="/" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Home
              </Link>
              <Link href="/about" className="text-sm text-white/50 hover:text-gold font-light py-1">
                About
              </Link>
              <Link href="/products" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Products
              </Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-4">
              Products
            </h4>
            <div className="flex flex-col gap-1">
              <Link href="/products?cat=shop-towels" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Shop Towels
              </Link>
              <Link href="/products?cat=terry-towels" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Terry Towels
              </Link>
              <Link href="/products?cat=industrial" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Industrial Textile
              </Link>
              <Link href="/products?cat=hospitality" className="text-sm text-white/50 hover:text-gold font-light py-1">
                Hospitality Textile
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 font-light">
                  Plot 42, SITE Industrial Area, Karachi, Sindh 75700
                </span>
              </div>
              <div className="flex gap-3">
                <Mail size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 font-light">
                  info@rohanmirza-textiles.com
                </span>
              </div>
              <div className="flex gap-3">
                <Phone size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 font-light">
                  +92 21 3456 7890
                </span>
              </div>
              <div className="flex gap-3">
                <Clock size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 font-light">
                  Mon–Sat: 9:00 AM – 6:00 PM PKT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 mt-10 pt-6 flex justify-between flex-wrap gap-4">
          <p className="text-xs text-white/25">
            © 2025 Rohan Mirza Textiles. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Karachi, Pakistan · Exporting Excellence Since 2005
          </p>
        </div>
      </div>
    </footer>
  )
}
