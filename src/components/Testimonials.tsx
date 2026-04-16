import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const testimonials = [
  {
    quote: "Laksh has been managing our social media for over 6 months now. His work for our 3 mobile and accessories shops has been incredible. Highly recommended!",
    name: "Sayam Jaiswal",
    title: "Owner, Mobile & Mobile",
    initial: "S"
  },
  {
    quote: "The viral content strategy Laksh implemented for our AI startup generated over a million views in just one month. The ROI is unmatched.",
    name: "Founder",
    title: "AiDockTech",
    initial: "A"
  },
  {
    quote: "He handled everything for our factory's reels—provided the presenter, cameraman, and editor. The final high-quality videos were exactly what we needed.",
    name: "Director",
    title: "Ecoboards WPC",
    initial: "E"
  },
  {
    quote: "Fast, professional, and incredibly talented. He successfully hosted our Discord server to over 1k members and drove great results for our affiliate program.",
    name: "Partner",
    title: "Cash Pages",
    initial: "C"
  }
];

function TestimonialCard({ testimonial }: { testimonial: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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

  return (
    <div style={{ perspective: "1000px" }} className="shrink-0">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-[280px] sm:w-[350px] md:w-[450px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-2xl p-6 md:p-10 flex flex-col justify-between min-h-[250px] md:min-h-[300px] hover:shadow-[0_20px_40px_rgba(255,144,232,0.15)] hover:border-[#ff90e8]/30 transition-colors transition-shadow duration-500 cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-6 md:mb-8 font-medium relative z-10" style={{ transform: "translateZ(30px)" }}>
          “{testimonial.quote}”
        </p>
        <div className="flex items-center gap-4 border-t border-border/50 pt-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 font-semibold text-lg shrink-0">
            {testimonial.initial}
          </div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-text-secondary text-sm">{testimonial.title}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  // Duplicate array to create seamless infinite scroll
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-32 border-t border-border overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-full flex justify-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center relative z-20 py-6 text-white">
              Results speak <br /> <span className="font-serif italic font-medium text-[#ff90e8] text-[0.9em] tracking-normal">louder than words</span>
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mt-4 py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 md:gap-6 animate-marquee hover:[animation-play-state:paused]" style={{ '--duration': '35s' } as React.CSSProperties}>
          {marqueeItems.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
