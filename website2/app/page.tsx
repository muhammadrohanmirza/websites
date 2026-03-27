import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <Gallery />
      <ContactSection />
      <Footer />
    </main>
  );
}