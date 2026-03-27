'use client'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import type { Product } from '@/types'

const categoryLabels: Record<string, string> = {
  'shop-towels': 'Shop Towels',
  'terry-towels': 'Terry Towels',
  'industrial': 'Industrial Textile',
  'hospitality': 'Hospitality Textile',
}

interface ProductGridProps {
  products: Product[]
  activeCategory: string
}

export default function ProductGrid({ products, activeCategory }: ProductGridProps) {
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, Product[]>)

  const categoriesToShow = activeCategory !== 'all'
    ? [activeCategory]
    : Object.keys(groupedProducts)

  return (
    <section className="bg-[#f5f4f0] px-[5%] py-16">
      <div className="max-w-[1200px] mx-auto">
        {categoriesToShow.map((cat) => {
          const categoryProducts = groupedProducts[cat]
          if (!categoryProducts || categoryProducts.length === 0) return null

          return (
            <section key={cat} className="mb-16 last:mb-0">
              <div className="flex items-baseline justify-between mb-6 flex-wrap gap-4">
                <h2 className="font-serif text-3xl font-medium">
                  {categoryLabels[cat]}
                </h2>
              </div>
              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                <AnimatePresence>
                  {categoryProducts.map((p, i) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <ProductCard product={p} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
