'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

const stats = [
  { num: '20+', label: 'Years Experience' },
  { num: '45+', label: 'Export Countries' },
  { num: '500+', label: 'Global Clients' },
  { num: '12M+', label: 'Units Annually' },
]

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] relative flex items-center overflow-hidden pt-[70px]">
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,168,76,0.3) 2px, rgba(201,168,76,0.3) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(201,168,76,0.3) 2px, rgba(201,168,76,0.3) 4px)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto px-[5%] w-full py-20 relative z-10"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">
            Karachi, Pakistan · Est. 2005
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif text-white mb-6 leading-[1.08]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Premium <em className="text-gold not-italic">Textile</em>
          <br />
          Manufacturer
          <br />
          & Exporter
        </motion.h1>

        <motion.p
          variants={item}
          className="text-white/60 font-light mb-10 max-w-[500px] leading-relaxed text-[1.05rem]"
        >
          Premium textile manufacturer and exporter from Karachi, Pakistan.
          Specializing in shop towels, terry towels, industrial and hospitality
          textiles. Exporting to 45+ countries since 2005.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 flex-wrap mb-20">
          <Link
            href="/products"
            className="bg-gold text-black px-9 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gold-light transition hover:-translate-y-0.5"
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className="border border-white/40 text-white px-9 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm hover:border-gold hover:text-gold transition"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="flex gap-10 pt-10 border-t border-gold/15 flex-wrap"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <span
                className="font-serif text-gold leading-none block"
                style={{ fontSize: '2.5rem' }}
              >
                {stat.num}
              </span>
              <span className="text-white/45 text-xs uppercase tracking-widest mt-1.5 block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
