'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop"
                alt="Textile factory"
                className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-600 to-amber-800 p-8 rounded-sm shadow-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
              <div className="text-white">
                <div className="text-5xl font-bold">38+</div>
                <div className="text-lg mt-2 text-amber-100">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <div className="inline-block">
                <p className="text-amber-600 text-sm md:text-base tracking-[0.3em] font-semibold uppercase mb-2">
                  About Us
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Crafting Quality Since{' '}
              <span className="text-amber-600">1985</span>
            </h2>

            <div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed">
              <p>
                We are a leading textile manufacturer committed to delivering premium
                fabrics that combine traditional craftsmanship with modern innovation.
                Our journey began over three decades ago with a simple mission: to create
                textiles that stand the test of time.
              </p>

              <p>
                From luxurious cottons to technical fabrics, every product reflects our
                dedication to quality, sustainability, and customer satisfaction. We work
                with the finest materials and employ skilled artisans to ensure each piece
                meets the highest standards.
              </p>

              <p>
                Today, we serve clients across the globe, providing customized textile
                solutions for fashion, home décor, and industrial applications.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { icon: '✓', title: 'Premium Quality', desc: 'Finest materials & craftsmanship' },
                { icon: '♻', title: 'Sustainable', desc: 'Eco-friendly processes' },
                { icon: '⚡', title: 'Fast Delivery', desc: 'On-time shipments' },
                { icon: '★', title: 'Certified', desc: 'ISO quality standards' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-sm hover:bg-amber-50 transition-all duration-300 cursor-default"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-neutral-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-semibold rounded-sm hover:bg-amber-700 transition-all duration-300 hover:shadow-xl"
              >
                <span className="tracking-wide">Learn More</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
