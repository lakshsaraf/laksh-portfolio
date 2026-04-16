import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "Why should I choose you over a big agency?",
    answer: "I offer 1-on-1 personal attention, faster turnaround times, and a deep understanding of the local market. Plus, I provide an all-in-one package, so you don't have to hire three different people for video, web, and social media."
  },
  {
    question: "What exactly does your Social Media Management include?",
    answer: "I handle everything from start to finish. This includes content strategy, scripting, on-location shooting, professional video editing, and posting across your social channels to maximize reach and engagement."
  },
  {
    question: "How much experience do you have?",
    answer: "I am an ambitious freelancer with over 2 years of dedicated experience in the digital growth space, consistently delivering results for local businesses and creators."
  },
  {
    question: "Do you only work with clients in Biratnagar?",
    answer: "While I love helping local businesses in Biratnagar (especially for on-location video shoots), I also work remotely with creators and brands worldwide for web development, video editing, and design."
  },
  {
    question: "How do we get started?",
    answer: "It starts with a Free 15-Min Discovery Call. We'll discuss your current bottlenecks, your goals, and see if we're a good fit to work together. Just click any of the 'Free 15-Min Call' buttons to book a time via WhatsApp."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-16 md:py-24 border-t border-border relative overflow-hidden">
      {/* 3D Background Elements */}
      <motion.div
        animate={{ y: [20, -20, 20], rotateZ: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute left-[-5%] top-[20%] opacity-10 blur-[2px] hidden md:block pointer-events-none text-white"
      >
        <MessageCircleQuestion className="w-64 h-64" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full py-8 flex justify-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-center relative z-20 text-white">
            Have Questions? <br />
            I got <span className="font-serif italic font-medium text-[#ff90e8] text-[0.9em] tracking-normal">Answers</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div variants={itemVariants} key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full flex items-center justify-between p-4 md:p-6 text-left transition-all duration-500 focus:outline-none hover-trigger rounded-2xl border",
                  openIndex === index 
                    ? "bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl" 
                    : "bg-surface border-border hover:bg-white/5 hover:border-white/10"
                )}
              >
                <span className={cn(
                  "text-base md:text-xl font-medium transition-colors duration-300 pr-4",
                  openIndex === index ? "text-[#ff90e8]" : "text-white"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0",
                  openIndex === index ? "bg-[#ff90e8]/20 text-[#ff90e8]" : "bg-white/5 text-text-secondary"
                )}>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 transition-transform duration-500",
                      openIndex === index ? "rotate-180" : ""
                    )} 
                  />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-text-secondary flex flex-col gap-4 text-balance shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                      {faq.answer.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="leading-relaxed text-white/80">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
