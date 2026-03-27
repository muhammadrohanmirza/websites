import { Home, Shirt, Factory, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Products() {
  const products = [
    {
      icon: Home,
      title: 'Home Textiles',
      description: 'Premium bed linens, towels, curtains, cushion covers, and table linens for residential and hospitality sectors.',
      image: 'https://images.unsplash.com/photo-1759176171789-0aa3f84d15ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdGV4dGlsZSUyMGJlZGRpbmd8ZW58MXx8fHwxNzcwOTc4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: ['Bed Sheets', 'Duvet Covers', 'Pillows', 'Bath Towels', 'Kitchen Linens']
    },
    {
      icon: Shirt,
      title: 'Fashion Fabrics',
      description: 'High-quality cotton, linen, silk, and blended fabrics for apparel and fashion industry.',
      image: 'https://images.unsplash.com/photo-1766320635268-a7bd54ffb3d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjB0ZXh0aWxlJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzcwOTc4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: ['Cotton Fabrics', 'Linen Blends', 'Printed Textiles', 'Denim', 'Knitwear']
    },
    {
      icon: Factory,
      title: 'Industrial Textiles',
      description: 'Durable technical textiles for industrial applications, medical use, and specialized requirements.',
      image: 'https://images.unsplash.com/photo-1770196009760-bead9eb10514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwcXVhbGl0eSUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzcwOTc4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: ['Medical Textiles', 'Filter Fabrics', 'Protective Wear', 'Geotextiles', 'Automotive Textiles']
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Tailored textile solutions including custom designs, branding, and specialty products.',
      image: 'https://images.unsplash.com/photo-1758272024360-a95be2abe403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzA5NzgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: ['Custom Printing', 'Private Labeling', 'Specialty Designs', 'Bulk Orders', 'OEM Services']
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-black md:text-5xl mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive textile solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Key Products:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
