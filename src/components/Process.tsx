import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep-diving into your brand, audience, and goals to map out a bespoke strategy.',
  },
  {
    number: '02',
    title: 'Production',
    description: 'Crafting high-end video and premium UI/UX design that captures attention instantly.',
  },
  {
    number: '03',
    title: 'Optimization',
    description: 'Ensuring fast load times, perfect aspect ratios, and compelling copy before launch.',
  },
  {
    number: '04',
    title: 'Scaling',
    description: 'Analyzing data post-launch to double down on what works and scale your footprint.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative border-t border-border bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="micro-label mb-6">
            The Methodology
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
            Systematic <span className="text-accent italic">Growth</span>.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pt-16 border-t border-border"
            >
              <span className="absolute top-0 left-0 -mt-12 text-[100px] font-display font-bold text-white/[0.03] leading-none select-none pointer-events-none">
                {step.number}
              </span>
              <h4 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">{step.title}</h4>
              <p className="text-text-secondary font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
