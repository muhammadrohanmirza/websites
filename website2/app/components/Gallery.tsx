'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1626497764846-f5d75d6f4688?q=80&w=2070&auto=format&fit=crop',
    title: 'Textile Manufacturing',
    category: 'Production',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1588614959060-4d5209f5e78c?q=80&w=2070&auto=format&fit=crop',
    title: 'Quality Control',
    category: 'Process',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=2070&auto=format&fit=crop',
    title: 'Fabric Samples',
    category: 'Products',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop',
    title: 'Weaving Patterns',
    category: 'Craftsmanship',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1611330022783-4fac45aa2c55?q=80&w=2070&auto=format&fit=crop',
    title: 'Color Selection',
    category: 'Design',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=2015&auto=format&fit=crop',
    title: 'Finished Products',
    category: 'Products',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <p className="text-amber-600 text-sm md:text-base tracking-[0.3em] font-semibold uppercase mb-2">
              Gallery
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mx-auto" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mt-6 mb-4 leading-tight">
            Our Craftsmanship in Action
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Take a look behind the scenes at our manufacturing process and the
            beautiful fabrics we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image.id)}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'scale-in 0.5s ease-out forwards',
                opacity: 0,
                transform: 'scale(0.9)',
              }}
            >
              {/* Image */}
              <Image
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white">
                  <span className="inline-block px-3 py-1 bg-amber-600 text-xs font-semibold tracking-wider uppercase rounded-sm mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-neutral-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-sm p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to see more of our work?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Visit our facility or request a catalog to explore our complete range
            of products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30"
            >
              Schedule a Visit
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-sm border-2 border-white/30 hover:border-white/50 transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl w-full animate-scale-in">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.url}
              alt="Gallery image"
              className="w-full h-auto rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
