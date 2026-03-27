"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { Section, Container } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/products";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: companyInfo.address,
    href: "#",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: "#",
    color: "from-purple-500 to-purple-600",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
    setTimeout(() => setFormState("idle"), 3000);
  };

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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Have questions about our products? Need a quote? We&apos;re here to help and look forward to hearing from you.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10 mb-20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>

                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request for Quote</option>
                        <option value="product">Product Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">Karachi, Pakistan</p>
                      <p className="text-gray-400 text-sm mt-1">Interactive Map</p>
                    </div>
                  </div>
                  {/* Decorative map pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
              </Card>

              {/* Company Info Card */}
              <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <h3 className="text-xl font-bold mb-4">Rohan Mirza Textiles</h3>
                <p className="text-gray-400 mb-6">
                  Your trusted partner for premium textile manufacturing and export.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                    <span className="text-gray-300">{companyInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-amber-500 transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-amber-500 transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Quick Response Card */}
              <Card className="p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Quick Response</h3>
                </div>
                <p className="text-white/90 mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-sm text-white/70">
                  For urgent matters, please call us directly.
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
