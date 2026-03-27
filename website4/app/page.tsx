import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import CategoryCards from '@/components/home/CategoryCards'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ExportMarkets from '@/components/home/ExportMarkets'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Premium Textile Manufacturer & Exporter | Karachi Pakistan',
  description: 'Rohan Mirza Textiles — premium textile manufacturer and exporter from Karachi, Pakistan. Shop towels, terry towels, industrial and hospitality textiles. Exporting to 45+ countries since 2005.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <WhyChooseUs />
      <ExportMarkets />
      <TestimonialsSection />
    </>
  )
}
