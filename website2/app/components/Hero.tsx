'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea8d6101?q=80&w=2074&auto=format&fit=crop)',
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        
        {/* Animated Texture Overlay */}
        <div className="absolute inset-0 opacity-20 animate-pulse-slow"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Tagline */}
          <div className="inline-block">
            <p className="text-amber-400 text-sm md:text-base tracking-[0.3em] font-medium uppercase mb-4 animate-fade-in">
              Weaving Excellence Since 1985
            </p>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-expand" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
            Premium
            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-gradient">
              Textile Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting luxury fabrics with precision, tradition, and innovation.
            <span className="block mt-2">Experience the finest quality in every thread.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
            >
              <span className="relative z-10 tracking-wide">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('products');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <span className="tracking-wide">Explore Products</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16">
            {[
              { number: '38+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Products' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-neutral-300 mt-2 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer">
          <span className="text-xs tracking-widest mb-2 uppercase">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
