'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'

const features = [
  { icon:'🏆', title:'ISO-Grade Quality Control', desc:'Every batch undergoes rigorous multi-stage quality inspection. We maintain consistent GSM, color fastness, and tensile strength across all orders.' },
  { icon:'💰', title:'Competitive Export Pricing', desc:'Direct manufacturer pricing with no middlemen. Vertical integration lets us offer premium quality at prices that beat the global market consistently.' },
  { icon:'🌍', title:'20+ Years Export Experience', desc:'We understand international trade documentation, Incoterms, compliance requirements, and logistics — making your import process seamless.' },
  { icon:'⚡', title:'Fast Turnaround', desc:'Standard orders shipped within 15–21 days. Rush orders accommodated. Strategic stock of popular SKUs for quick worldwide dispatch.' },
  { icon:'🎨', title:'Custom Manufacturing', desc:'Private labeling, custom sizes, GSM specs, color matching, embroidery. Full OEM and white-label solutions for global brands.' },
  { icon:'📦', title:'Flexible MOQ', desc:'From boutique importers to large retail chains. Sample orders welcome. Scalable production from 500 to 500,000 units per run.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white section-pad">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built for Global Trade"
          subtitle="Two decades of excellence in textile manufacturing and export."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative border border-gray-200 p-10 rounded-sm overflow-hidden"
      whileHover={{ y: -4, borderColor: '#9c9890' }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gold"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: 'left' }}
      />
      <div className="w-12 h-12 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center text-xl mb-6">
        {feature.icon}
      </div>
      <h3 className="font-serif text-lg font-medium mb-3">{feature.title}</h3>
      <p className="text-[0.88rem] text-gray-600 leading-relaxed font-light">
        {feature.desc}
      </p>
    </motion.div>
  )
}
