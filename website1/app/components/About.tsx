import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Skilled Workers' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: TrendingUp, value: '10M+', label: 'Units Exported' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-black md:text-5xl mb-4">About Our Company</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A legacy of excellence in textile manufacturing and export
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600024512646-5ef7b23d3bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhYnJpYyUyMHJvbGxzfGVufDF8fHx8MTc3MDk3ODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fabric Rolls"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-4">Excellence in Every Thread</h3>
            <p className="text-gray-600 mb-4">
              Since 1995, we have been at the forefront of textile manufacturing and export, delivering premium quality textile madeups to businesses worldwide. Our state-of-the-art facilities and commitment to innovation ensure that every product meets the highest international standards.
            </p>
            <p className="text-gray-600 mb-4">
              We specialize in a comprehensive range of textile products including home textiles, fashion fabrics, industrial textiles, and custom solutions tailored to your specific needs.
            </p>
            <p className="text-gray-600">
              Our dedication to quality, sustainability, and customer satisfaction has made us a preferred partner for major retailers, hotels, and businesses across 50+ countries.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl mb-2 text-slate-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
