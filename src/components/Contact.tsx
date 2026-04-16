import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[1.1]"
          >
            If you scrolled this far, <br />
            <span className="text-text-secondary">It's time to level up.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-6">
              Let's Talk.
            </h3>
            <p className="text-text-secondary text-lg font-light max-w-md mb-12">
              Ready to elevate your brand? Fill out the form or reach out directly. I usually respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="block micro-label hover:text-white transition-colors hover-trigger">
                hello@example.com
              </a>
              <a href="#" className="block micro-label hover:text-white transition-colors hover-trigger">
                WhatsApp: +1 (555) 000-0000
              </a>
              <a href="#" className="block micro-label hover:text-white transition-colors hover-trigger">
                Instagram: @alex.creative
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 border border-border bg-surface/50 backdrop-blur-xl rounded-3xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block micro-label mb-3">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-white/50 transition-colors font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block micro-label mb-3">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-white/50 transition-colors font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block micro-label mb-3">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none font-light"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full group flex items-center justify-center space-x-3 px-8 py-5 bg-white text-black rounded-xl font-display font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition-all hover-trigger"
              >
                <span>Send Inquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
