"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Mail, Phone, Download, Share2 } from "lucide-react";
import { Section, Container } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/data/products";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [inquirySent, setInquirySent] = useState(false);

  // Find product by slug
  const product = productCategories
    .flatMap((category) => category.products)
    .find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </div>
      </main>
    );
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 3000);
  };

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="py-4">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          </div>
        </Container>
      </div>

      {/* Product Hero */}
      <section className="pt-12 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1574616891814-728c4daa84bf?w=800&h=800&fit=crop`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4 capitalize">
                {product.category.replace("-", " ")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>

              {/* Quick Specs */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Quick Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">GSM</span>
                      <span className="font-medium text-gray-900">{product.features.gsm}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Size</span>
                      <span className="font-medium text-gray-900">{product.features.size}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Material</span>
                      <span className="font-medium text-gray-900">{product.features.material}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500">Usage</span>
                      <span className="font-medium text-gray-900">{product.features.usage}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Detailed Specifications */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Full Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Specifications</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Product Features</h3>
                      {Object.entries(product.features).map(([key, value]) => (
                        <div key={key} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="text-gray-500 capitalize">{key}: </span>
                            <span className="font-medium text-gray-900">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="text-gray-500 capitalize">{key}: </span>
                            <span className="font-medium text-gray-900">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Full Specifications Table */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specification Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Product Name</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{product.name}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Category</td>
                        <td className="px-6 py-4 text-gray-900 capitalize">{product.category.replace("-", " ")}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">GSM Range</td>
                        <td className="px-6 py-4 text-gray-900">{product.features.gsm}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Size</td>
                        <td className="px-6 py-4 text-gray-900">{product.features.size}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Material</td>
                        <td className="px-6 py-4 text-gray-900">{product.features.material}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Usage</td>
                        <td className="px-6 py-4 text-gray-900">{product.features.usage}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Available Colors</td>
                        <td className="px-6 py-4 text-gray-900">{product.specifications.color}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Packing</td>
                        <td className="px-6 py-4 text-gray-900">{product.specifications.packing}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Minimum Order Quantity</td>
                        <td className="px-6 py-4 text-gray-900">{product.specifications.moq}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-500">Delivery Time</td>
                        <td className="px-6 py-4 text-gray-900">{product.specifications.delivery}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="sticky top-24">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Send Inquiry</h3>
                  <p className="text-gray-600 mb-6">Get a quick quote for this product</p>

                  {inquirySent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Inquiry Sent!</h4>
                      <p className="text-gray-600">We&apos;ll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquiry} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                          defaultValue={`I'm interested in ${product.name}. Please provide pricing and availability.`}
                        />
                      </div>
                      <Button type="submit" variant="primary" className="w-full">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Inquiry
                      </Button>
                    </form>
                  )}
                </Card>

                {/* Contact Info */}
                <Card className="mt-6 p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <h4 className="font-bold mb-4">Direct Contact</h4>
                  <div className="space-y-3">
                    <a href="tel:+922112345678" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>+92 21 1234 5678</span>
                    </a>
                    <a href="mailto:info@rohanmirzatextiles.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>info@rohanmirzatextiles.com</span>
                    </a>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
