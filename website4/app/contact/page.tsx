'use client'
import { useState } from 'react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission (no database)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  const countries = [
    'United States',
    'United Kingdom',
    'Germany',
    'France',
    'Netherlands',
    'Italy',
    'UAE',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Australia',
    'Canada',
    'Singapore',
    'Malaysia',
    'Other',
  ]

  const products = [
    'Shop Towels',
    'Terry Towels',
    'Industrial Textile',
    'Hospitality Textile',
    'Multiple Products',
  ]

  return (
    <>
      <section className="bg-[#0a0a0a] pt-[70px] pb-24 text-center px-[5%]">
        <div className="max-w-[1200px] mx-auto pt-16">
          <div className="eyebrow justify-center">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Get In Touch</span>
          </div>
          <h1 className="font-serif text-white mt-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Contact <em className="text-gold not-italic">Us</em>
          </h1>
          <p className="text-white/50 font-light mt-4 max-w-xl mx-auto">
            Ready to discuss your textile requirements? Our export team is here to help with quotes, samples, and any questions.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Contact Details</span>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">
                Reach Our Export Team
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Whether you need a quote, product samples, or have questions about our capabilities — we're here to help. Our team responds to all inquiries within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-widest text-gold mb-0.5">
                      Address
                    </div>
                    <div className="text-sm text-black font-light leading-relaxed">
                      Plot 42, SITE Industrial Area, Karachi, Sindh 75700
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-widest text-gold mb-0.5">
                      Email
                    </div>
                    <div className="text-sm text-black font-light leading-relaxed">
                      info@rohanmirza-textiles.com
                      <br />
                      export@rohanmirza-textiles.com
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-widest text-gold mb-0.5">
                      Phone
                    </div>
                    <div className="text-sm text-black font-light leading-relaxed">
                      +92 21 3456 7890
                      <br />
                      +92 300 1234567 (WhatsApp)
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-widest text-gold mb-0.5">
                      Business Hours
                    </div>
                    <div className="text-sm text-black font-light leading-relaxed">
                      Mon–Sat: 9:00 AM – 6:00 PM PKT
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 border border-gray-200 rounded h-[200px] flex flex-col items-center justify-center mt-6">
                <MapPin size={48} className="text-gold mb-2" />
                <span className="text-gray-400 text-sm">SITE Industrial Area, Karachi</span>
              </div>
            </div>

            <div>
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Send Message</span>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-8">
                Request a Quote
              </h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-sm text-sm flex gap-2 items-start">
                  <span>✓</span>
                  <span>
                    Thank you for your inquiry! Our export team will respond within 24 hours.
                  </span>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.68rem] uppercase tracking-[0.12em] text-gray-600 mb-2 font-medium">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        className="w-full border border-gray-200 focus:border-gold outline-none px-4 py-3.5 text-sm font-sans rounded-sm bg-white transition-colors text-black"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] uppercase tracking-[0.12em] text-gray-600 mb-2 font-medium">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        required
                        className="w-full border border-gray-200 focus:border-gold outline-none px-4 py-3.5 text-sm font-sans rounded-sm bg-white transition-colors text-black"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] uppercase tracking-[0.12em] text-gray-600 mb-2 font-medium">
                      Business Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-200 focus:border-gold outline-none px-4 py-3.5 text-sm font-sans rounded-sm bg-white transition-colors text-black"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.68rem] uppercase tracking-[0.12em] text-gray-600 mb-2 font-medium">
                        Country
                      </label>
                      <select
                        name="country"
                        required
                        className="w-full border border-gray-200 focus:border-gold outline-none px-4 py-3.5 text-sm font-sans rounded-sm bg-white transition-colors text-black"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.68rem] uppercase tracking-[0.12em] text-gray-600 mb-2 font-medium">
                        Product Interest
                      </label>
                      <select
                        name="product"
                        required
                        className="w-full border border-gray-200 focus:border-gold outline-none px-4 py-3.5 text-sm font-sans rounded-sm bg-white transition-colors text-black"
                      >
                        <option value="">Select Product</option>
                        {products.map((product) => (
                          <option key={product} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] uppercase tracking-[0.12em] text-gray-600 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full border border-gray-200 focus:border-gold outline-none px-4 py-3.5 text-sm font-sans rounded-sm bg-white transition-colors text-black resize-none"
                      placeholder="Tell us about your requirements, quantity, specifications..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0a0a0a] text-white py-4 text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gray-800 transition disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Inquiry →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
