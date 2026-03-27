"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Shield, TrendingUp, Truck, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardImage } from "@/components/ui/Card";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { productCategories, testimonials, features, exportMarkets, companyInfo } from "@/data/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                🌍 Trusted Exporter to 30+ Countries
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl md:heading-xl mb-6"
            >
              <span className="text-gradient">Premium Textile</span>
              <br />
              <span className="accent-gradient">Manufacturer & Exporter</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
            >
              Delivering exceptional quality textiles to global markets with {companyInfo.experience}+ years of excellence in manufacturing and export.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/products">
                <Button variant="primary" size="lg">
                  View Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get Quote
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200"
            >
              {[
                { value: "18+", label: "Years Experience" },
                { value: "500+", label: "Global Clients" },
                { value: "30+", label: "Countries Served" },
                { value: "100%", label: "Quality Guaranteed" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Product Categories Section */}
      <Section background="light">
        <Container>
          <SectionHeading subtitle="Our Products">
            Product Categories
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {productCategories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link href={`/products#${category.slug}`}>
                  <Card className="h-full group cursor-pointer">
                    <CardImage
                      src={`https://images.unsplash.com/photo-${getProductImage(index)}?w=400&h=300&fit=crop`}
                      alt={category.name}
                      aspectRatio="square"
                    />
                    <CardContent className="pt-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                      <div className="flex items-center text-amber-600 font-medium text-sm">
                        Explore <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="default">
        <Container>
          <SectionHeading subtitle="Why Choose Us">
            The Rohan Mirza Advantage
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Export Markets Section */}
      <Section background="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                Global Reach
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Exporting Excellence<br />Worldwide
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                With extensive experience in international trade, we ensure seamless delivery to clients across the globe, meeting diverse market requirements and quality standards.
              </p>

              <div className="space-y-4">
                {exportMarkets.map((market, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white font-medium">{market.region}</span>
                    <div className="flex items-center space-x-4">
                      <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${market.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                        />
                      </div>
                      <span className="text-amber-400 font-semibold w-12 text-right">{market.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-gray-800 rounded-3xl overflow-hidden">
                <Globe className="w-full h-full text-gray-700 p-12" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">Successful Shipments</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="light">
        <Container>
          <SectionHeading subtitle="Testimonials">
            What Our Clients Say
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="h-full p-6">
                  <Quote className="w-10 h-10 text-amber-500 mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                      <div className="text-sm text-amber-600">{testimonial.country}</div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="default">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Order?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Get in touch with us today for competitive pricing, premium quality, and reliable delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Request a Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

function getProductImage(index: number): string {
  const images = [
    "1574616891814-728c4daa84bf",
    "1583262900985-97690e3be619",
    "1616839636934-50f88650a688",
    "1522776808047-36aa98dc4b7b",
  ];
  return images[index] || images[0];
}

function getFeatureIcon(icon: string) {
  const icons: Record<string, JSX.Element> = {
    quality: <Shield className="w-8 h-8 text-white" />,
    pricing: <TrendingUp className="w-8 h-8 text-white" />,
    global: <Globe className="w-8 h-8 text-white" />,
    delivery: <Truck className="w-8 h-8 text-white" />,
  };
  return icons[icon] || <CheckCircle2 className="w-8 h-8 text-white" />;
}
