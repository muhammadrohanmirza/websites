'use client'
import { useRouter } from 'next/navigation'

const tabs = [
  { label: 'All Products', value: 'all' },
  { label: 'Shop Towels', value: 'shop-towels' },
  { label: 'Terry Towels', value: 'terry-towels' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'Hospitality', value: 'hospitality' },
]

interface ProductFilterProps {
  activeCategory: string
}

export default function ProductFilter({ activeCategory }: ProductFilterProps) {
  const router = useRouter()

  const handleClick = (value: string) => {
    if (value === 'all') {
      router.push('/products')
    } else {
      router.push(`/products?cat=${value}`)
    }
  }

  return (
    <div className="sticky top-[70px] z-40 bg-white border-b border-gray-200 px-[5%] py-4">
      <div className="max-w-[1200px] mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.value
          return (
            <button
              key={tab.value}
              onClick={() => handleClick(tab.value)}
              className={`flex-shrink-0 px-5 py-2 text-[0.75rem] tracking-widest uppercase font-medium rounded-sm transition-all ${
                isActive
                  ? 'bg-[#0a0a0a] text-white border border-[#0a0a0a]'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
