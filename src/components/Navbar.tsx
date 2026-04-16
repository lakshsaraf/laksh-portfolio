import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Whatsapp', href: 'https://wa.me/9779702292536' },
  { name: 'My Work', href: '#work' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className={cn(
        "pointer-events-auto flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 w-full max-w-5xl",
        "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      )}>
        <a href="#" className="text-xl font-display font-bold tracking-tighter flex items-center gap-2 hover-trigger text-white pl-2">
          <span className="text-[#ff90e8]">✦</span> Laksh
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === 'Whatsapp' ? '_blank' : '_self'}
              rel={link.name === 'Whatsapp' ? 'noopener noreferrer' : ''}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors hover-trigger"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-text-secondary hover:text-white transition-colors hover-trigger p-2">
            <Moon className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/9779702292536?text=Hi%20Laksh,%20I'd%20like%20to%20book%20a%20free%20discovery%20call!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#ff90e8] text-black rounded-lg font-semibold text-sm hover:scale-105 transition-transform hover-trigger shadow-[0_0_15px_rgba(255,144,232,0.2)]"
          >
            Free 15-Min Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover-trigger p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <button
              className="absolute top-8 right-8 text-white hover-trigger"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === 'Whatsapp' ? '_blank' : '_self'}
                  rel={link.name === 'Whatsapp' ? 'noopener noreferrer' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold tracking-tight text-text-secondary hover:text-white transition-colors hover-trigger"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/9779702292536?text=Hi%20Laksh,%20I'd%20like%20to%20book%20a%20free%20discovery%20call!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 text-lg font-display font-bold bg-[#ff90e8] text-black rounded-xl hover:scale-105 transition-transform hover-trigger"
              >
                Free 15-Min Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
