import type { Metadata } from 'next'
import ProductFilter from '@/components/products/ProductFilter'
import ProductGrid from '@/components/products/ProductGrid'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full range of textile products — shop towels, terry towels, industrial wipers, and hospitality linens.',
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { cat?: string }
}) {
  const category = searchParams.cat || 'all'

  // Static product data (no database)
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

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category)

  return (
    <>
      <section className="bg-[#0a0a0a] pt-[70px] pb-20 px-[5%] text-center">
        <div className="max-w-[1200px] mx-auto pt-16">
          <div className="eyebrow justify-center">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Our Catalogue</span>
          </div>
          <h1 className="font-serif text-white mt-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Textile <em className="text-gold not-italic">Products</em>
          </h1>
          <p className="text-white/50 font-light mt-4 max-w-md mx-auto">
            Four specialized categories. Thousands of satisfied global buyers.
          </p>
        </div>
      </section>

      <ProductFilter activeCategory={category} />
      <ProductGrid products={filteredProducts} activeCategory={category} />
    </>
  )
}
