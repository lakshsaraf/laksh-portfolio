import { Mail, MapPin, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-surface relative z-10 overflow-hidden">
      {/* 3D Background Elements */}
      <motion.div
        animate={{ y: [-50, 50, -50], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[100px] pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ff90e8]/40 via-purple-500/20 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Big CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 pt-6 md:mb-20 md:pt-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-display font-semibold tracking-tight text-white mb-4 md:mb-6 leading-tight">
            Ready to <span className="font-serif italic font-medium text-[#ff90e8] text-[0.9em] tracking-normal">scale</span> your brand?
          </h2>
          <p className="text-text-secondary text-sm md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
            Let's build something extraordinary together. Book a free discovery call and let's discuss your digital growth strategy.
          </p>
          <a
            href="https://wa.me/9779702292536?text=Hi%20Laksh,%20I'd%20like%20to%20book%20a%20free%20discovery%20call!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 px-6 py-4 md:px-10 md:py-5 bg-[#ff90e8] text-black w-full sm:w-auto mx-auto rounded-xl font-sans font-bold text-sm md:text-lg hover:scale-105 transition-all hover-trigger shadow-[0_0_30px_rgba(255,144,232,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">BOOK A FREE CALL</span>
          </a>
        </div>

        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 md:p-12 mb-8 md:mb-0">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#ff90e8] text-2xl">✦</span>
                <span className="font-display font-bold text-xl text-white">Laksh</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Crafting digital experiences that drive results and inspire growth for forward-thinking brands.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:lakshworks1@gmail.com" className="flex items-center gap-3 text-sm text-text-secondary hover:text-[#ff90e8] transition-colors hover-trigger group">
                    <Mail className="w-4 h-4" />
                    <span>lakshworks1@gmail.com</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/9779702292536" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-[#ff90e8] transition-colors hover-trigger group">
                    <MessageCircle className="w-4 h-4" />
                    <span>+977 9702292536</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span>Biratnagar, Nepal</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="h-px w-full bg-white/10 mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-secondary">
              © 2026 Laksh. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/laksh.saraf/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-[#ff90e8] hover:border-[#ff90e8]/30 hover:shadow-[0_0_15px_rgba(255,144,232,0.2)] transition-all hover-trigger">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/9779702292536" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-[#ff90e8] hover:border-[#ff90e8]/30 hover:shadow-[0_0_15px_rgba(255,144,232,0.2)] transition-all hover-trigger">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
