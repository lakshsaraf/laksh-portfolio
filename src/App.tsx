/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <FAQ />
        <BottomCTA />
      </main>
      
      <Footer />
    </div>
  );
}

