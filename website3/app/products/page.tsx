"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Shirt, Factory, Hotel } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent, CardImage } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/data/products";

const categoryIcons: Record<string, React.ElementType> = {
  clean: Layers,
  towel: Shirt,
  factory: Factory,
  hotel: Hotel,
};

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-amber-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6"
            >
              Our Products
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Premium Textile Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Explore our comprehensive range of high-quality textile products designed for various industries and applications.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <Section background="default">
        <Container>
          <SectionHeading subtitle="Categories">
            Product Categories
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {productCategories.map((category, categoryIndex) => {
              const Icon = categoryIcons[category.icon] || Layers;
              return (
                <motion.div
                  key={category.id}
                  id={category.slug}
                  variants={itemVariants}
                  className="scroll-mt-24"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIndex) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: productIndex * 0.1 }}
                      >
                        <Link href={`/products/${product.slug}`}>
                          <Card className="h-full group cursor-pointer">
                            <CardImage
                              src={`https://images.unsplash.com/photo-${getProductImage(categoryIndex, productIndex)}?w=400&h=300&fit=crop`}
                              alt={product.name}
                              aspectRatio="square"
                            />
                            <CardContent className="pt-4">
                              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {product.description}
                              </p>
                              
                              {/* Features Preview */}
                              <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">GSM</span>
                                  <span className="text-gray-900 font-medium">{product.features.gsm}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Material</span>
                                  <span className="text-gray-900 font-medium">{product.features.material}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-500">Size</span>
                                  <span className="text-gray-900 font-medium">{product.features.size}</span>
                                </div>
                              </div>

                              <div className="flex items-center text-amber-600 font-medium text-sm">
                                View Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                We offer custom manufacturing services to meet your specific requirements. Get in touch to discuss your needs.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg">
                  Request Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

function getProductImage(categoryIndex: number, productIndex: number): string {
  const images = [
    ["1574616891814-728c4daa84bf", "1628139508032-2c84e10e5f31"],
    ["1583262900985-97690e3be619", "1616839636934-50f88650a688"],
    ["1616839636934-50f88650a688", "1522776808047-36aa98dc4b7b"],
    ["1522776808047-36aa98dc4b7b", "1584292899826-cfb81178e691"],
  ];
  return images[categoryIndex]?.[productIndex] || images[0][0];
}
