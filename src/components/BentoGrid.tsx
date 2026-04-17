import React from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, MonitorPlay, Cpu, ArrowUpRight, Video, PenTool, Share2 } from 'lucide-react';

export function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-10 md:py-24 relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full py-8 flex justify-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-center relative z-20 text-white">
             Boost Sales & Conversions <br />
            at <span className="inline-block px-3 py-1 bg-white/10 rounded-md italic font-serif mt-2">light speed</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 px-4 md:px-0">
            {/* SMMA */}
            <motion.div variants={itemVariants} className="bento-card flex gap-4 md:gap-6 items-center hover-trigger group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,144,232,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div 
                animate={{ y: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute right-4 top-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
              >
                <Share2 className="w-16 h-16 text-[#ff90e8]" />
              </motion.div>
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#ff90e8]/20 border border-[#ff90e8]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Share2 className="w-8 h-8 text-[#ff90e8]" />
              </div>
              <div className="relative z-10">
                <h5 className="text-xl font-semibold mb-1 text-white group-hover:text-[#ff90e8] transition-colors">Social Media Management</h5>
                <p className="text-text-secondary text-sm leading-relaxed">I handle everything from content strategy and scripting to shooting, editing, and posting.</p>
              </div>
            </motion.div>

            {/* Web Dev */}
            <motion.div variants={itemVariants} className="bento-card flex gap-4 md:gap-6 items-center hover-trigger group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(96,165,250,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute right-4 top-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
              >
                <Code2 className="w-16 h-16 text-blue-400" />
              </motion.div>
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
              <div className="relative z-10">
                <h5 className="text-xl font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors">Website Development</h5>
                <p className="text-text-secondary text-sm leading-relaxed">High-converting websites built in record time. An all-in-one package.</p>
              </div>
            </motion.div>

            {/* Trusted Companies Marquee */}
            <motion.div variants={itemVariants} className="bento-card flex flex-col justify-between min-h-[220px] md:min-h-[240px] hover-trigger group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <h5 className="text-xl font-semibold mb-1 text-white group-hover:text-white/80 transition-colors">Brands I've Worked With</h5>
                <p className="text-text-secondary text-sm leading-relaxed">From local businesses to established creators, I deliver results.</p>
              </div>
              <div className="relative w-full overflow-hidden mt-6 -mx-6 px-6 z-10">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-surface to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-surface to-transparent z-10" />
                <div className="flex gap-8 animate-marquee" style={{ '--duration': '15s' } as React.CSSProperties}>
                  {['Local Cafes', 'Creators', 'Real Estate', 'E-commerce', 'Local Cafes', 'Creators'].map((logo, i) => (
                    <span key={i} className="text-2xl font-display font-bold text-white/30 shrink-0 group-hover:text-white/50 transition-colors">{logo}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 px-4 md:px-0 mt-4 md:mt-0">
            {/* $100k Saved */}
            <motion.div variants={itemVariants} className="bento-card flex flex-col min-h-[220px] md:min-h-[240px] group hover-trigger cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <h5 className="text-xl font-semibold mb-1 text-white group-hover:text-[#4ade80] transition-colors">Driving ROI for Brands</h5>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">so they can reinvest where it matters the most</p>
              </div>
              
              <div className="relative w-full h-32 bg-white/5 rounded-xl overflow-hidden mt-auto border border-white/10 group-hover:border-[#4ade80]/30 transition-colors z-10">
                {/* SVG Chart */}
                <svg className="absolute bottom-0 w-full h-full transform group-hover:-translate-x-4 transition-transform duration-700" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L0,100 C50,100 80,130 120,120 C160,110 180,60 220,50 C260,40 280,90 320,80 C360,70 380,30 420,30 C460,30 480,80 500,70 L500,150 Z" fill="url(#grad)" />
                  <path d="M0,100 C50,100 80,130 120,120 C160,110 180,60 220,50 C260,40 280,90 320,80 C360,70 380,30 420,30 C460,30 480,80 500,70" fill="none" stroke="#4ade80" strokeWidth="3" />
                </svg>
                <div className="absolute top-4 right-4 border-b border-dashed border-[#4ade80] pb-1">
                  <span className="text-[#4ade80] text-xs font-medium">Growth (This Month)</span>
                </div>
              </div>
            </motion.div>

            {/* Video Editing */}
            <motion.div variants={itemVariants} className="bento-card flex gap-4 md:gap-6 items-center hover-trigger group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div 
                animate={{ y: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute right-4 top-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
              >
                <Video className="w-16 h-16 text-purple-400" />
              </motion.div>
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Video className="w-8 h-8 text-purple-400" />
              </div>
              <div className="relative z-10">
                <h5 className="text-xl font-semibold mb-1 text-white group-hover:text-purple-400 transition-colors">Video Editing & Shooting</h5>
                <p className="text-text-secondary text-sm leading-relaxed">Cinematic promos for local businesses and short-form viral content for creators.</p>
              </div>
            </motion.div>

            {/* Graphic Design */}
            <motion.div variants={itemVariants} className="bento-card flex gap-4 md:gap-6 items-center hover-trigger group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute right-4 top-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
              >
                <PenTool className="w-16 h-16 text-orange-400" />
              </motion.div>
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                <PenTool className="w-8 h-8 text-orange-400" />
              </div>
              <div className="relative z-10">
                <h5 className="text-xl font-semibold mb-1 text-white group-hover:text-orange-400 transition-colors">Graphic & Logo Design</h5>
                <p className="text-text-secondary text-sm leading-relaxed">Stand out with premium branding, logos, and scroll-stopping visuals.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
