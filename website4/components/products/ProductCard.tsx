'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Product } from '@/types'

const categoryGradients: Record<string, string> = {
  'shop-towels':  'linear-gradient(135deg,#2d1f0a,#1a1208)',
  'terry-towels': 'linear-gradient(135deg,#0f2030,#0a1520)',
  'industrial':   'linear-gradient(135deg,#202020,#141414)',
  'hospitality':  'linear-gradient(135deg,#1a1d12,#0f100a)',
}
const categoryIcons: Record<string, string> = {
  'shop-towels':  '🧺',
  'terry-towels': '🛁',
  'industrial':   '⚙️',
  'hospitality':  '🏨',
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.4)' }}
        className="bg-white border border-gray-200 rounded-sm overflow-hidden group h-full flex flex-col"
      >
        <div
          className="h-[220px] relative overflow-hidden"
          style={{ background: categoryGradients[product.category] }}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            style={{ background: categoryGradients[product.category] }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-[0.15] group-hover:opacity-25 transition-opacity">
            {categoryIcons[product.category]}
          </div>
          {product.badge && (
            <span className="absolute top-4 left-4 bg-gold text-black text-[0.65rem] tracking-[0.12em] uppercase px-2.5 py-1 font-semibold rounded-sm">
              {product.badge}
            </span>
          )}
        </div>

        <div className="px-6 pt-5 pb-4 flex-1 flex flex-col">
          <h3 className="font-serif text-lg font-medium text-black mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-light mb-4 flex-1">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="spec-tag">{product.gsm} GSM</span>
            <span className="spec-tag">{product.size}</span>
            <span className="spec-tag">{product.material}</span>
          </div>
        </div>

        <div className="px-6 pb-5 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-400 font-light">
            MOQ: {product.moq}
          </span>
          <span className="text-[0.72rem] uppercase tracking-widest text-gold border border-gold/30 px-3 py-1.5 group-hover:bg-gold group-hover:text-black transition-all rounded-sm">
            Inquire
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
