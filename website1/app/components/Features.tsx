import { Shield, Leaf, Clock, Award, Truck, HeadphonesIcon } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified facilities with rigorous quality control at every stage of production.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Eco-friendly manufacturing processes and sustainable sourcing of raw materials.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Efficient logistics and production management ensuring on-time delivery worldwide.'
    },
    {
      icon: Award,
      title: 'International Standards',
      description: 'Compliance with international quality standards including OEKO-TEX and GOTS.'
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Worldwide shipping capabilities with reliable logistics partners for seamless delivery.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: '24/7 customer support and dedicated account managers for all your needs.'
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for quality textile solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-750 transition-colors">
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-16 border-t border-slate-700 text-center">
          <h3 className="text-2xl mb-6">Our Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="bg-slate-800 px-6 py-3 rounded-lg">ISO 9001:2015</div>
            <div className="bg-slate-800 px-6 py-3 rounded-lg">OEKO-TEX Standard 100</div>
            <div className="bg-slate-800 px-6 py-3 rounded-lg">GOTS Certified</div>
            <div className="bg-slate-800 px-6 py-3 rounded-lg">BSCI Compliance</div>
            <div className="bg-slate-800 px-6 py-3 rounded-lg">WRAP Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
