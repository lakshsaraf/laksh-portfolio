import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Video Editing',
    description: 'High-retention, cinematic video editing for YouTube, TikTok, and Reels designed to maximize watch time and engagement.',
  },
  {
    number: '02',
    title: 'Social Growth',
    description: 'Data-driven strategies to organically grow your audience, build community, and convert followers into loyal customers.',
  },
  {
    number: '03',
    title: 'Brand Identity',
    description: 'Premium visual identities, logos, and brand guidelines that communicate authority and build trust instantly.',
  },
  {
    number: '04',
    title: 'Content Strategy',
    description: 'End-to-end content planning and execution tailored to your specific business goals and target demographic.',
  },
];

function ServiceRow({ service, index }: { service: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, rotateX: 20, y: 40 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group border-b border-border py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface transition-colors px-6 -mx-6 cursor-pointer hover-trigger perspective-1000"
    >
      <div className="flex items-center gap-8 md:gap-16 mb-6 md:mb-0" style={{ transform: "translateZ(30px)" }}>
        <span className="font-mono text-xl text-text-secondary group-hover:text-accent transition-colors">{service.number}</span>
        <h4 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight group-hover:text-white transition-colors">{service.title}</h4>
      </div>
      <div className="flex items-center gap-8 md:w-1/3 justify-between" style={{ transform: "translateZ(20px)" }}>
        <p className="text-text-secondary font-light leading-relaxed text-sm md:text-base">
          {service.description}
        </p>
        <div className="hidden md:flex w-12 h-12 rounded-full border border-border items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1 shadow-[0_0_0_rgba(255,144,232,0)] group-hover:shadow-[0_0_20px_rgba(255,144,232,0.4)]">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative border-t border-border bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="micro-label mb-6">
            Capabilities
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter max-w-3xl">
            Everything to <span className="text-accent italic">dominate</span> your niche.
          </h3>
        </motion.div>

        <div className="border-t border-border perspective-1000">
          {services.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
