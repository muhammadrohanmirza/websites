
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <p className="text-amber-600 text-sm md:text-base tracking-[0.3em] font-semibold uppercase mb-2">
              Get In Touch
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mx-auto" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mt-6 mb-4 leading-tight">
            Let&apos;s Start a Conversation
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Have a question or want to discuss your textile needs? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Contact Information
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Reach out to us through any of these channels, and our team will
                get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  content: '+92 (21) 1234-5678',
                  subContent: 'Mon-Fri 9AM-6PM',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  content: 'info@textileco.com',
                  subContent: 'sales@textileco.com',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Address',
                  content: '123 Industrial Zone, Karachi',
                  subContent: 'Pakistan',
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-6 bg-white rounded-sm hover:shadow-xl transition-all duration-300 cursor-default border-l-4 border-transparent hover:border-amber-600"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-sm flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">{contact.title}</h4>
                    <p className="text-neutral-700">{contact.content}</p>
                    <p className="text-sm text-neutral-500 mt-1">{contact.subContent}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-bold text-neutral-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 bg-neutral-200 hover:bg-amber-600 text-neutral-700 hover:text-white rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-sm focus:border-amber-600 focus:outline-none transition-colors duration-300 text-neutral-900"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-sm focus:border-amber-600 focus:outline-none transition-colors duration-300 text-neutral-900"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-sm focus:border-amber-600 focus:outline-none transition-colors duration-300 resize-none text-neutral-900"
                  placeholder="Tell us about your textile needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-sm hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transform"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border-l-4 border-green-600 text-green-700 rounded-sm animate-slide-in">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
