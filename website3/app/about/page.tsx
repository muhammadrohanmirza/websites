"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Factory, Globe, CheckCircle, TrendingUp } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { companyInfo, exportMarkets } from "@/data/products";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "Every product undergoes rigorous quality checks to meet international standards.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our business operations.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building lasting relationships through exceptional service and support.",
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuously improving our processes and products through innovation.",
  },
];

const stats = [
  { value: "18+", label: "Years in Business", icon: Award },
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "30+", label: "Countries Served", icon: Globe },
  { value: "1000+", label: "Products Delivered", icon: CheckCircle },
];

export default function AboutPage() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Leading Textile Manufacturer & Exporter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {companyInfo.description}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Company Overview */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Quality & Trust
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2005, Rohan Mirza Textiles has grown from a small manufacturing unit to a leading textile exporter serving clients across the globe. Our commitment to quality, competitive pricing, and timely delivery has made us a trusted partner for businesses worldwide.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Located in Karachi, Pakistan, our state-of-the-art manufacturing facility combines traditional craftsmanship with modern technology to produce textiles that meet the highest international standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-700">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-700">Sustainable Practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-700">Ethical Manufacturing</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="light">
        <Container>
          <SectionHeading subtitle="Our Direction">
            Mission & Vision
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {companyInfo.mission}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full p-8 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {companyInfo.vision}
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section background="default">
        <Container>
          <SectionHeading subtitle="What We Believe">
            Our Core Values
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 text-center hover:bg-amber-50 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Manufacturing Capabilities */}
      <Section background="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                State-of-the-Art Production Facility
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Our manufacturing facility in Karachi is equipped with modern machinery and technology, enabling us to produce high-quality textiles at scale while maintaining strict quality control at every stage of production.
              </p>

              <div className="space-y-4">
                {[
                  "Advanced weaving and knitting machinery",
                  "In-house dyeing and finishing capabilities",
                  "Quality testing laboratory",
                  "Skilled workforce with years of experience",
                  "Sustainable and eco-friendly processes",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center">
                <Factory className="w-32 h-32 text-gray-700" />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Export Markets */}
      <Section background="default">
        <Container>
          <SectionHeading subtitle="Global Presence">
            Export Markets
          </SectionHeading>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {exportMarkets.map((market, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center space-x-4">
                    <Globe className="w-8 h-8 text-amber-500" />
                    <span className="font-semibold text-gray-900">{market.region}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-40 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${market.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                      />
                    </div>
                    <span className="text-amber-600 font-bold w-12 text-right">{market.percentage}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-20 text-center border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can meet your textile needs with quality products and competitive pricing.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
