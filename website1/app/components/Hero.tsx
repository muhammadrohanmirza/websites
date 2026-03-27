import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758272024360-a95be2abe403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzA5NzgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Textile Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Premium Quality <span className="text-blue-400">Textile Madeups</span> for Global Markets
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Leading manufacturer and exporter of high-quality home textiles, fashion fabrics, and industrial textile solutions. Trusted by businesses worldwide for over 25 years.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg transition-colors"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
