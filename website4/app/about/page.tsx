import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rohan Mirza Textiles — a premium textile manufacturer and exporter from Karachi, Pakistan with over 20 years of excellence.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] pt-[70px] pb-24 text-center px-[5%]">
        <div className="max-w-[1200px] mx-auto pt-16">
          <div className="eyebrow justify-center">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Our Story</span>
          </div>
          <h1 className="font-serif text-white mt-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Two Decades of <em className="text-gold not-italic">Textile</em> Excellence
          </h1>
          <p className="text-white/50 font-light mt-4 max-w-2xl mx-auto">
            From a small workshop in Karachi to a 120,000 sq ft manufacturing facility exporting to 45+ countries.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Since 2005</span>
              </div>
              <h2 className="font-serif text-3xl font-medium mb-6">
                Built on Quality, Trust & Innovation
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Founded in 2005, Rohan Mirza Textiles began as a small textile workshop in Karachi with a vision to produce world-class textile products for the global market. Today, we stand as one of Pakistan's leading textile manufacturers and exporters.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Our 120,000 square foot facility houses state-of-the-art machinery and employs over 350 skilled workers. We specialize in shop towels, terry towels, industrial textiles, and hospitality linens — serving 500+ active clients across 45+ countries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 border-b-2 border-gold p-7 text-center">
                <div className="font-serif text-4xl text-gold font-semibold">2005</div>
                <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">
                  Est. Year
                </div>
              </div>
              <div className="bg-gray-100 border-b-2 border-gold p-7 text-center">
                <div className="font-serif text-4xl text-gold font-semibold">350+</div>
                <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">
                  Skilled Workers
                </div>
              </div>
              <div className="bg-gray-100 border-b-2 border-gold p-7 text-center">
                <div className="font-serif text-4xl text-gold font-semibold">120K</div>
                <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">
                  Sq Ft Facility
                </div>
              </div>
              <div className="bg-gray-100 border-b-2 border-gold p-7 text-center">
                <div className="font-serif text-4xl text-gold font-semibold">45+</div>
                <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">
                  Export Countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] section-pad">
        <div className="max-w-[1200px] mx-auto">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Our Direction</span>
          </div>
          <h2 className="font-serif text-white text-3xl mt-2 mb-12">
            Mission & Vision
          </h2>

          <div className="grid gap-[2px] bg-gold/10 mt-12">
            <div className="bg-[#111] p-12 border border-gold/10">
              <span className="text-[0.68rem] uppercase tracking-widest text-gold mb-4 block">
                Our Mission
              </span>
              <h3 className="font-serif text-white text-2xl font-medium mb-4">
                Delivering Excellence in Every Thread
              </h3>
              <p className="text-sm text-white/50 font-light leading-loose">
                To manufacture and export premium quality textile products that exceed international standards while maintaining competitive pricing. We are committed to sustainable manufacturing practices, fair labor conditions, and building long-term partnerships with our global clients through reliability, transparency, and continuous innovation.
              </p>
            </div>
            <div className="bg-[#111] p-12 border border-gold/10">
              <span className="text-[0.68rem] uppercase tracking-widest text-gold mb-4 block">
                Our Vision
              </span>
              <h3 className="font-serif text-white text-2xl font-medium mb-4">
                Leading Global Textile Innovation
              </h3>
              <p className="text-sm text-white/50 font-light leading-loose">
                To be recognized as the most trusted textile manufacturing partner for businesses worldwide — known for our unwavering commitment to quality, our ability to adapt to evolving market needs, and our dedication to sustainable and ethical manufacturing. We envision a future where Rohan Mirza Textiles is synonymous with excellence in every product we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="max-w-[1200px] mx-auto">
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Manufacturing</span>
          </div>
          <h2 className="font-serif text-black text-3xl mt-2 mb-12">
            Our Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="border border-gray-200 p-8 text-center rounded-sm hover:border-gold hover:-translate-y-1 transition">
              <div className="text-3xl mb-4">🧵</div>
              <h3 className="font-serif text-lg font-medium">Weaving</h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                100+ power looms, plain & terry weave, GSM 300–800
              </p>
            </div>
            <div className="border border-gray-200 p-8 text-center rounded-sm hover:border-gold hover:-translate-y-1 transition">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-serif text-lg font-medium">Dyeing</h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                Reactive & vat dyeing, 500+ colors, Pantone matching
              </p>
            </div>
            <div className="border border-gray-200 p-8 text-center rounded-sm hover:border-gold hover:-translate-y-1 transition">
              <div className="text-3xl mb-4">✂️</div>
              <h3 className="font-serif text-lg font-medium">Cutting & Sewing</h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                Custom sizes, hemmed edges, dobby borders
              </p>
            </div>
            <div className="border border-gray-200 p-8 text-center rounded-sm hover:border-gold hover:-translate-y-1 transition">
              <div className="text-3xl mb-4">🖨️</div>
              <h3 className="font-serif text-lg font-medium">Printing & Embroidery</h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                Screen print, embroidery, heat transfer, private label
              </p>
            </div>
            <div className="border border-gray-200 p-8 text-center rounded-sm hover:border-gold hover:-translate-y-1 transition">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-serif text-lg font-medium">Packaging</h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                Retail-ready, bulk bale, custom branded boxes
              </p>
            </div>
            <div className="border border-gray-200 p-8 text-center rounded-sm hover:border-gold hover:-translate-y-1 transition">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="font-serif text-lg font-medium">Quality Lab</h3>
              <p className="text-xs text-gray-600 font-light mt-2">
                GSM, tensile strength, color fastness, shrinkage testing
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
