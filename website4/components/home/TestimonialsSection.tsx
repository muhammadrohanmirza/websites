'use client'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const testimonials = [
  { initials:'JM', name:'James Mitchell', role:'CEO, CleanPro Distributors — Texas, USA', quote:"We've been sourcing shop towels from Rohan Mirza for over 8 years. Consistent quality, reliable shipments, and competitive pricing — exactly what a growing distribution business needs." },
  { initials:'AK', name:'Ahmed Al-Khalidi', role:'Procurement Director, Luxury Hotels Group — Dubai, UAE', quote:"The terry towel quality is exceptional — our 5-star hotel guests constantly compliment the softness and durability. Rohan Mirza Textiles is our go-to partner for all hospitality linen needs." },
  { initials:'SB', name:'Stefan Bauer', role:'Import Manager, TechWipe GmbH — Munich, Germany', quote:"Professional communication, on-time delivery, and documentation that makes customs clearance easy. We've recommended Rohan Mirza to three other importers in Germany already." },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f4f0] section-pad">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Client Reviews"
          title="Trusted by Global Buyers"
          subtitle="Hear from our satisfied customers worldwide."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.initials}
              whileHover={{ y: -3 }}
              className="bg-white border border-gray-200 p-8 rounded-sm cursor-default"
            >
              <span className="font-serif text-5xl text-gold/40 leading-none block mb-[-0.5rem]">
                "
              </span>
              <p className="font-serif italic text-gray-800 leading-relaxed text-base mb-6">
                {testimonial.quote}
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-full bg-[#0a0a0a] flex items-center justify-center font-serif text-gold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400 font-light mt-0.5">
                    {testimonial.role}
                  </div>
                  <div className="text-gold text-xs tracking-widest mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
