import { motion } from 'motion/react';
import { ArrowUpRight, Code, Smartphone, TrendingUp, MonitorPlay } from 'lucide-react';

const bentoItems = [
  {
    title: 'Website Development',
    description: 'Fast, modern websites designed to convert leads and build trust.',
    icon: Code,
    span: 'col-span-12 md:col-span-8',
    bg: 'bg-surface',
  },
  {
    title: 'Mobile Apps',
    description: 'Launch your startup with a user-friendly, scalable mobile app.',
    icon: Smartphone,
    span: 'col-span-12 md:col-span-4',
    bg: 'bg-surface',
  },
  {
    title: '$100,000+',
    description: 'Saved for brands so they can reinvest where it matters the most.',
    icon: TrendingUp,
    span: 'col-span-12 md:col-span-4',
    bg: 'bg-white text-black',
    iconColor: 'text-black',
  },
  {
    title: 'Digital Marketing',
    description: 'Reach your audience with data-driven campaigns that scale.',
    icon: MonitorPlay,
    span: 'col-span-12 md:col-span-8',
    bg: 'bg-surface',
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="micro-label mb-6">
            What We Do
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.1]">
            Boost Sales & Conversions at <span className="text-text-secondary">light speed.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card ${item.span} ${item.bg} group flex flex-col justify-between min-h-[280px]`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${item.bg === 'bg-white text-black' ? 'border-black/10' : 'border-white/10 bg-white/5'}`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor || 'text-white'}`} />
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${item.bg === 'bg-white text-black' ? 'border-black/10' : 'border-white/10'} opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1`}>
                  <ArrowUpRight className={`w-4 h-4 ${item.iconColor || 'text-white'}`} />
                </div>
              </div>
              
              <div>
                <h4 className={`text-2xl md:text-3xl font-display font-bold tracking-tight mb-3 ${item.bg === 'bg-white text-black' ? 'text-black' : 'text-white'}`}>
                  {item.title}
                </h4>
                <p className={`font-sans font-light leading-relaxed ${item.bg === 'bg-white text-black' ? 'text-black/70' : 'text-text-secondary'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
