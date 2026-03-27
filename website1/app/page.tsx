'use client';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
