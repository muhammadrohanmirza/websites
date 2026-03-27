import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

// Static product data
const products = [
  {
    id: '1',
    name: 'Premium Cotton Shop Towels',
    slug: 'premium-cotton-shop-towels',
    category: 'shop-towels',
    description: 'High-absorbency cotton towels for industrial cleaning',
    gsm: '400-550',
    size: '14"x14"',
    material: '100% Cotton',
    colors: 'White, Blue, Green',
    packing: '50 pcs/bundle',
    moq: '500 dozen',
    badge: 'Best Seller',
    isFeatured: true,
    features: ['High absorbency', 'Lint-free', 'Reusable', 'Cost-effective'],
  },
  {
    id: '2',
    name: 'Mechanics Workshop Rags',
    slug: 'mechanics-workshop-rags',
    category: 'shop-towels',
    description: 'Durable rags for automotive and mechanical workshops',
    gsm: '350-450',
    size: '16"x16"',
    material: 'Cotton Blend',
    colors: 'Mixed Colors',
    packing: '100 pcs/bale',
    moq: '300 dozen',
    badge: '',
    isFeatured: false,
    features: ['Oil absorbent', 'Tear resistant', 'Bulk packing', 'Industrial grade'],
  },
  {
    id: '3',
    name: 'Hotel Bath Towels',
    slug: 'hotel-bath-towels',
    category: 'terry-towels',
    description: 'Luxury Egyptian cotton bath towels for hotels',
    gsm: '600-700',
    size: '27"x54"',
    material: 'Egyptian Cotton',
    colors: 'White, Ivory, Custom',
    packing: '1 pc/polybag',
    moq: '200 dozen',
    badge: 'Premium',
    isFeatured: true,
    features: ['Dobby border', 'Quick dry', 'Soft finish', 'OEKO-TEX certified'],
  },
  {
    id: '4',
    name: 'Industrial Wipers',
    slug: 'industrial-wipers',
    category: 'industrial',
    description: 'Chemical-resistant wipers for industrial applications',
    gsm: '300-400',
    size: '15"x17"',
    material: 'Microfiber',
    colors: 'Blue, Yellow, Gray',
    packing: '150 pcs/box',
    moq: '1000 dozen',
    badge: '',
    isFeatured: false,
    features: ['Chemical resistant', 'Low lint', 'Anti-static', 'Bulk supply'],
  },
  {
    id: '5',
    name: 'Hotel Bathrobes',
    slug: 'hotel-bathrobes',
    category: 'hospitality',
    description: 'Plush cotton bathrobes for luxury hotels',
    gsm: '350-450',
    size: 'S/M/L/XL',
    material: 'Terry Cotton',
    colors: 'White, Navy, Custom',
    packing: '1 pc/polybag',
    moq: '100 pieces',
    badge: 'Customizable',
    isFeatured: true,
    features: ['Embroidery ready', 'Shawl collar', 'Belt loops', 'Machine washable'],
  },
  {
    id: '6',
    name: 'Restaurant Napkins',
    slug: 'restaurant-napkins',
    category: 'hospitality',
    description: 'Elegant damask napkins for fine dining',
    gsm: '250-350',
    size: '20"x20"',
    material: 'Polyester Cotton',
    colors: 'White, Ivory, Custom',
    packing: '50 pcs/bundle',
    moq: '200 pieces',
    badge: '',
    isFeatured: false,
    features: ['Stain resistant', 'Wrinkle free', 'Multiple sizes', 'Custom embroidery'],
  },
]

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return { title: 'Product Not Found' }
  return { title: product.name, description: product.description }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()

  const gradients: Record<string, string> = {
    'shop-towels': 'linear-gradient(135deg,#2d1f0a,#1a1208)',
    'terry-towels': 'linear-gradient(135deg,#0f2030,#0a1520)',
    'industrial': 'linear-gradient(135deg,#202020,#141414)',
    'hospitality': 'linear-gradient(135deg,#1a1d12,#0f100a)',
  }
  const icons: Record<string, string> = {
    'shop-towels': '🧺',
    'terry-towels': '🛁',
    'industrial': '⚙️',
    'hospitality': '🏨',
  }

  return (
    <>
      <div className="bg-[#0a0a0a] pt-[70px] pb-12 px-[5%]">
        <div className="max-w-[1200px] mx-auto pt-10">
          <Link
            href="/products"
            className="text-gold/70 text-xs uppercase tracking-widest hover:text-gold flex items-center gap-2 mb-6"
          >
            ← Back to Products
          </Link>
          <span className="text-[0.68rem] uppercase tracking-widest text-gold/60 mb-2 block">
            {product.category.replace(/-/g, ' ')}
          </span>
          <h1 className="font-serif text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {product.name}
          </h1>
          {product.badge && (
            <span className="inline-block mt-3 bg-gold text-black text-xs uppercase tracking-widest px-3 py-1 font-semibold rounded-sm">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <section className="bg-white px-[5%] py-16">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div
            className="rounded h-[400px] flex items-center justify-center relative overflow-hidden"
            style={{ background: gradients[product.category] }}
          >
            <div className="text-[6rem] opacity-20">{icons[product.category]}</div>
            {product.isFeatured && (
              <div className="absolute top-4 right-4 bg-gold text-black text-xs uppercase tracking-widest px-3 py-1 font-semibold rounded-sm">
                Featured
              </div>
            )}
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            <div className="border border-gray-200 rounded-sm overflow-hidden mb-8">
              <div className="bg-gray-100 px-5 py-3 border-b border-gray-200">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-600">
                  Specifications
                </span>
              </div>
              <table className="w-full text-sm">
                {[
                  ['GSM', product.gsm],
                  ['Size', product.size],
                  ['Material', product.material],
                  ['Colors', product.colors],
                  ['Packing', product.packing],
                  ['MOQ', product.moq],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3 text-gray-500 font-medium w-1/3">
                      {label}
                    </td>
                    <td className="px-5 py-3 text-black font-light">{value}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="mb-8">
              <div className="text-xs uppercase tracking-widest font-semibold text-gray-600 mb-4">
                Key Features
              </div>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-light">
                    <span className="text-gold text-base leading-none">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-gold text-black px-8 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gold-light transition hover:-translate-y-0.5 inline-block"
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="border border-gray-200 text-gray-600 px-8 py-3.5 text-xs font-medium tracking-widest uppercase rounded-sm hover:border-gray-400 transition inline-block"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
