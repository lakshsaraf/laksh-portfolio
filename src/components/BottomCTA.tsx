import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function BottomCTA() {
  const tags = [
    "Website Development", "Social Media Management", "Video Editing", "Graphic Design", "Logo Design", "Video Shooting",
    "Website Development", "Social Media Management", "Video Editing", "Graphic Design", "Logo Design", "Video Shooting"
  ];

  return (
    <section className="py-12 md:py-24 border-t border-border flex flex-col items-center gap-8 md:gap-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 items-center px-4"
      >
        <h3 className="text-2xl md:text-4xl font-semibold text-center text-white">
          If you scrolled this far, Its time to LEVEL UP
        </h3>
        
        <div className="relative mt-4 mb-8 md:mb-0">
          <a
            href="https://wa.me/9779702292536?text=Hi%20Laksh,%20I'd%20like%20to%20claim%20my%20free%20social%20media%20audit!"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 rounded-full bg-[#ff90e8] text-black w-[250px] h-[60px] font-semibold hover:scale-105 transition-transform hover-trigger z-10 shadow-[0_0_20px_rgba(255,144,232,0.3)]"
          >
            <span className="text-xl">✨</span> Claim Free Audit
          </a>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-10 right-0 md:-right-12 z-20 flex flex-col items-center"
          >
            <svg className="w-8 h-8 text-white -rotate-12 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <div className="border border-white/20 bg-surface px-4 py-1.5 text-white text-xs rounded-full whitespace-nowrap">
              Just Click
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[14rem] md:h-[16rem] bg-surface rounded-3xl flex flex-col gap-8 justify-center items-center max-w-[90%] md:max-w-[95%] mx-auto relative border border-border"
      >
        <span className="font-medium text-base md:text-lg text-white relative z-20">Trust me, I'm good at this :)</span>
        
        <div className="relative h-[60px] w-full z-10 flex overflow-hidden">
          {/* Left Marquee (Dashed) */}
          <div className="relative h-full flex-1 border-r border-white/20 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-20" />
            <div className="flex gap-4 animate-marquee items-center h-full" style={{ '--duration': '15s' } as React.CSSProperties}>
              {tags.map((tag, i) => (
                <div key={i} className="flex px-4 py-2 rounded-full text-sm border border-dashed border-white/30 items-center justify-center gap-2 shrink-0 text-text-secondary">
                  <div className="w-4 h-4 rounded-full border border-white/30" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Center Block */}
          <div className="h-full w-[100px] md:w-[150px] bg-white/10 flex items-center justify-center font-semibold text-xs md:text-lg shrink-0 backdrop-blur-md border-x border-white/20 text-white">
            Working...
          </div>

          {/* Right Marquee (Solid/Checked) */}
          <div className="relative h-full flex-1 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-20" />
            <div className="flex gap-4 animate-marquee items-center h-full" style={{ '--duration': '15s' } as React.CSSProperties}>
              {tags.map((tag, i) => (
                <div key={i} className="flex px-4 py-2 rounded-full text-sm items-center justify-center gap-2 shrink-0 bg-white/10 text-white">
                  <Check className="w-4 h-4 text-[#ff90e8]" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
