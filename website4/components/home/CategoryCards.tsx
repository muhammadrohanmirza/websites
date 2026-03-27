'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    id: 'shop',
    tag: 'Category 01',
    name: 'Shop Towels',
    desc: 'Industrial-grade, high-absorbency cotton towels for auto, manufacturing & mechanical sectors.',
    icon: '🧺',
    href: '/products?cat=shop-towels',
    bgStyle: { background: 'linear-gradient(135deg,#1a1208 0%,#2d1f0a 50%,#1a1208 100%)' },
    overlayStyle: { backgroundImage: 'repeating-linear-gradient(45deg,rgba(201,168,76,0.04) 0px,rgba(201,168,76,0.04) 2px,transparent 2px,transparent 20px)' },
  },
  {
    id: 'terry',
    tag: 'Category 02',
    name: 'Terry Towels',
    desc: 'Soft, plush terry towels in bath, hand & face sizes for hotels and retail markets worldwide.',
    icon: '🛁',
    href: '/products?cat=terry-towels',
    bgStyle: { background: 'linear-gradient(135deg,#0a1520 0%,#0f2030 50%,#0a1520 100%)' },
    overlayStyle: { background: 'radial-gradient(circle at 60% 40%,rgba(55,138,221,0.1) 0%,transparent 60%)' },
  },
  {
    id: 'industrial',
    tag: 'Category 03',
    name: 'Industrial Textile',
    desc: 'Heavy-duty wipers, rags & specialized industrial fabric for demanding work environments.',
    icon: '⚙️',
    href: '/products?cat=industrial',
    bgStyle: { background: 'linear-gradient(135deg,#141414 0%,#202020 50%,#141414 100%)' },
    overlayStyle: { backgroundImage: 'repeating-linear-gradient(90deg,rgba(180,180,180,0.03) 0px,rgba(180,180,180,0.03) 1px,transparent 1px,transparent 30px)' },
  },
  {
    id: 'hospitality',
    tag: 'Category 04',
    name: 'Hospitality Textile',
    desc: 'Premium linens, bathrobes & towel sets for 5-star hotels, resorts and hospitality chains.',
    icon: '🏨',
    href: '/products?cat=hospitality',
    bgStyle: { background: 'linear-gradient(135deg,#0f100a 0%,#1a1d12 50%,#0f100a 100%)' },
    overlayStyle: { background: 'radial-gradient(ellipse at 30% 70%,rgba(99,153,34,0.08) 0%,transparent 60%)' },
  },
]

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.5px] bg-[#222]">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={cat.href}
          className="group relative overflow-hidden cursor-pointer"
          style={{ aspectRatio: '3/4' }}
        >
          <motion.div
            className="absolute inset-0"
            style={cat.bgStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
          <div className="absolute inset-0" style={cat.overlayStyle} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-6xl opacity-[0.15] group-hover:opacity-25 transition-opacity">
            {cat.icon}
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 p-7"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)',
            }}
          >
            <span className="text-gold text-[0.68rem] tracking-[0.2em] uppercase mb-1 block">
              {cat.tag}
            </span>
            <h3 className="font-serif text-white text-2xl font-medium">
              {cat.name}
            </h3>
            <p className="text-white/50 text-xs mt-1 leading-relaxed">
              {cat.desc}
            </p>
            <motion.div
              className="text-gold text-xs uppercase tracking-widest mt-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 5 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              Explore
              <span className="text-lg">→</span>
            </motion.div>
          </div>
        </Link>
      ))}
    </div>
  )
}
