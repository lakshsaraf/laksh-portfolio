import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 45, z: 0, filter: "blur(10px)" },
    visible: (zOffset: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      z: zOffset || 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
    }),
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-28 md:pt-32 pb-12 md:pb-20 text-center perspective-1000"
    >
      {/* 3D Floating Background Elements */}
      <motion.div
        animate={{ 
          y: [-30, 30, -30], 
          x: [-10, 10, -10],
          rotateX: [0, 45, -45, 0], 
          rotateY: [0, 45, -45, 0],
          rotateZ: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] opacity-40 blur-[2px] hidden md:block"
      >
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#ff90e8]/20 to-transparent border border-[#ff90e8]/20 shadow-[0_0_40px_rgba(255,144,232,0.3)] backdrop-blur-3xl" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [30, -30, 30], 
          x: [10, -10, 10],
          rotateZ: [0, -180, -360],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute right-[15%] bottom-[20%] text-[#ff90e8] opacity-50 blur-[1px] hidden md:block"
      >
        <Sparkles className="w-20 h-20" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center" style={{ perspective: "1000px" }}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Glowing Badge */}
          <motion.div 
            custom={40}
            variants={itemVariants} 
            className="relative overflow-hidden flex rounded-full border border-white/10 bg-white/5 p-1 px-4 items-center gap-2 mb-8 backdrop-blur-2xl hover:bg-white/10 transition-colors cursor-pointer group shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="w-4 h-4 rounded-full bg-black/50 flex items-center justify-center border border-white/20 relative z-10">
              <svg className="w-2.5 h-2.5 text-[#ff90e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-sm text-text-secondary relative z-10">
              Delivering <span className="text-white font-semibold">Proven Results</span> for ambitious brands.
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            custom={60}
            variants={itemVariants} 
            className="text-5xl sm:text-6xl lg:text-[70px] leading-[1.15] font-display font-semibold tracking-tight mb-6 text-white"
          >
            Your All-In-One <br />
            Digital Growth <span className="font-serif italic font-medium text-[#ff90e8] text-[0.85em] tracking-normal inline-block">Partner</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            custom={30}
            variants={itemVariants} 
            className="text-base md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed px-4 md:px-0"
          >
            I help ambitious brands dominate their market through strategic social media management, high-converting websites, and scroll-stopping visuals.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            custom={50}
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="https://wa.me/9779702292536?text=Hi%20Laksh,%20I'd%20like%20to%20book%20a%20free%20discovery%20call!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-[#ff90e8] text-black rounded-lg font-sans font-semibold text-sm hover:scale-105 transition-all hover-trigger w-full sm:w-auto shadow-[0_0_20px_rgba(255,144,232,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <MessageCircle className="w-4 h-4 relative z-10" />
              <span className="relative z-10">LET'S TALK</span>
            </a>
            <a
              href="#work"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-sm text-white bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto hover-trigger shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>MY WORK</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
