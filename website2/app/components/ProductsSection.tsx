'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Cotton Fabrics',
    description: 'Premium 100% organic cotton for comfort and durability',
    image: 'https://images.unsplash.com/photo-1616089097852-39f348846319?q=80&w=2070&auto=format&fit=crop',
    category: 'Natural Fibers',
  },
  {
    id: 2,
    name: 'Silk Blends',
    description: 'Luxurious silk blends for elegant garments',
    image: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?q=80&w=2069&auto=format&fit=crop',
    category: 'Luxury',
  },
  {
    id: 3,
    name: 'Denim Collection',
    description: 'Heavy-duty denim with premium finish',
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=2070&auto=format&fit=crop',
    category: 'Casual Wear',
  },
  {
    id: 4,
    name: 'Linen Fabrics',
    description: 'Breathable linen for summer collections',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop',
    category: 'Natural Fibers',
  },
  {
    id: 5,
    name: 'Technical Fabrics',
    description: 'High-performance fabrics for sportswear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop',
    category: 'Performance',
  },
  {
    id: 6,
    name: 'Home Textiles',
    description: 'Soft and durable fabrics for home décor',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop',
    category: 'Home Décor',
  },
];

export default function ProductsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 md:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <p className="text-amber-600 text-sm md:text-base tracking-[0.3em] font-semibold uppercase mb-2">
              Our Products
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mx-auto" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mt-6 mb-4 leading-tight">
            Premium Textile Collection
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Discover our diverse range of high-quality fabrics, each crafted with
            precision and care to meet your unique needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in-up 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold tracking-wider uppercase rounded-sm">
                    {product.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-amber-600/95 flex items-center justify-center transition-all duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="px-8 py-3 bg-white text-amber-700 font-bold rounded-sm transform hover:scale-110 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors duration-300">
                  <span className="text-sm tracking-wide">Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-neutral-700 mb-6 text-lg">
            Can&apos;t find what you&apos;re looking for? We offer custom textile solutions.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-sm hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
          >
            <span className="tracking-wide">Request Custom Quote</span>
            <svg
              className="w-5 h-5 ml-2"
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

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
