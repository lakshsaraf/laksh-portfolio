import React from 'react';
import { motion } from 'motion/react';
import { Video, Image as ImageIcon, PenTool, MonitorPlay, Smartphone, Share2, Sparkles, Camera } from 'lucide-react';

export function TechStack() {
  return (
    <section className="py-12 md:py-32 border-t border-border overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full py-8 flex flex-col items-center justify-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-center relative z-20 mb-6 text-white">
            My Creative Arsenal
          </h2>
          <p className="text-center text-text-secondary max-w-2xl text-lg">
            I leverage industry-leading tools for{' '}
            <span className="text-[#ff90e8] font-medium">Video Editing</span>,{' '}
            <span className="text-[#ff90e8] font-medium">Graphic Design</span>,{' '}
            <span className="text-[#ff90e8] font-medium">Web Development</span>, and{' '}
            <span className="text-[#ff90e8] font-medium">Social Media</span>{' '}
            to build exceptional digital experiences that drive results.
          </p>
        </motion.div>

        <div className="relative h-[380px] md:h-[800px] w-full flex flex-col items-center justify-center mt-8 md:mt-12 perspective-1000 scale-75 md:scale-100 origin-center">
          {/* Center Logo */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center shadow-[0_0_40px_rgba(255,144,232,0.15)] z-20"
          >
            <span className="font-display font-bold text-2xl tracking-tighter text-white">Laksh<span className="text-[#ff90e8]">✦</span></span>
          </motion.div>

          {/* Ring 1 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(25vw, 150px)', '--duration': '15s' } as React.CSSProperties}>
            <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-10 h-10 md:w-12 md:h-12 bg-surface border border-border rounded-full flex items-center justify-center text-[#ff90e8] shadow-[0_0_15px_rgba(255,144,232,0.3)]">
              <Video className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(25vw, 150px)', '--duration': '15s', animationDelay: '-7.5s' } as React.CSSProperties}>
            <motion.div animate={{ rotateY: [0, -360] }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="w-10 h-10 md:w-12 md:h-12 bg-surface border border-border rounded-full flex items-center justify-center text-[#3178C6] shadow-[0_0_15px_rgba(49,120,198,0.3)]">
              <PenTool className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </div>

          {/* Ring 2 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(40vw, 250px)', '--duration': '25s', animationDirection: 'reverse' } as React.CSSProperties}>
            <motion.div animate={{ rotateX: [0, 360] }} transition={{ repeat: Infinity, duration: 14, ease: "linear" }} className="w-12 h-12 md:w-14 md:h-14 bg-surface border border-border rounded-full flex items-center justify-center text-[#38B2AC] shadow-[0_0_15px_rgba(56,178,172,0.3)]">
              <ImageIcon className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(40vw, 250px)', '--duration': '25s', animationDelay: '-8.33s', animationDirection: 'reverse' } as React.CSSProperties}>
            <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="w-12 h-12 md:w-14 md:h-14 bg-surface border border-border rounded-full flex items-center justify-center text-[#007ACC] shadow-[0_0_15px_rgba(0,122,204,0.3)]">
              <Smartphone className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(40vw, 250px)', '--duration': '25s', animationDelay: '-16.66s', animationDirection: 'reverse' } as React.CSSProperties}>
            <motion.div animate={{ rotateZ: [0, 360] }} transition={{ repeat: Infinity, duration: 16, ease: "linear" }} className="w-12 h-12 md:w-14 md:h-14 bg-surface border border-border rounded-full flex items-center justify-center text-[#E34F26] shadow-[0_0_15px_rgba(227,79,38,0.3)]">
              <Share2 className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          </div>

          {/* Ring 3 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(55vw, 350px)', '--duration': '35s' } as React.CSSProperties}>
            <motion.div animate={{ rotateY: [0, -360] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} className="w-14 h-14 md:w-16 md:h-16 bg-surface border border-border rounded-full flex items-center justify-center text-[#FF4785] shadow-[0_0_15px_rgba(255,71,133,0.3)]">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(55vw, 350px)', '--duration': '35s', animationDelay: '-8.75s' } as React.CSSProperties}>
            <motion.div animate={{ rotateX: [0, -360] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="w-14 h-14 md:w-16 md:h-16 bg-surface border border-border rounded-full flex items-center justify-center text-[#47A248] shadow-[0_0_15px_rgba(71,162,72,0.3)]">
              <Camera className="w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(55vw, 350px)', '--duration': '35s', animationDelay: '-17.5s' } as React.CSSProperties}>
            <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }} className="w-14 h-14 md:w-16 md:h-16 bg-surface border border-border rounded-full flex items-center justify-center text-[#FF9900] shadow-[0_0_15px_rgba(255,153,0,0.3)]">
              <MonitorPlay className="w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex items-center justify-center animate-orbit" style={{ '--radius': 'min(55vw, 350px)', '--duration': '35s', animationDelay: '-26.25s' } as React.CSSProperties}>
            <motion.div animate={{ rotateZ: [0, -360] }} transition={{ repeat: Infinity, duration: 24, ease: "linear" }} className="w-14 h-14 md:w-16 md:h-16 bg-surface border border-border rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Video className="w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
          </div>
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
