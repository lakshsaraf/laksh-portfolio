import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

const accomplishments = [
  {
    id: 'rotary',
    title: 'Rotary Club Downtown',
    description: 'Won 1st Prize in the Digital Poster Making Competition organized by Rotary Club Biratnagar Downtown, competing against multiple schools.',
    tags: ['Graphic Design', 'Award'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'agrawal',
    title: 'Nepal Agrawal Kanya Manch',
    description: 'Secured 1st Prize in the Poster Making Competition organized by Nepal Agrawal Kanya Manch, showcasing top-tier design skills.',
    tags: ['Poster Design', 'Award'],
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1200',
  },
];

const AccomplishmentCard: React.FC<{ project: any, index: number, onOpenModal: (project: any) => void }> = ({ project, index, onOpenModal }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      className="group flex flex-col bg-[#111111] border border-white/10 rounded-[24px] overflow-hidden hover:border-white/20 transition-colors relative z-10 perspective-1000"
    >
      {/* Image Container */}
      <div className="relative h-[180px] md:h-[240px] w-full overflow-hidden bg-[#1a1a1a]">
        <motion.img 
          style={{ y, scale: 1.1 }}
          src={project.image} 
          alt={project.title}
          className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out ${project.isLogo ? 'object-contain p-8' : 'object-cover'}`}
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Content Container */}
      <div className="flex flex-col flex-grow p-4 md:p-8">
        <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{project.title}</h4>
        <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Footer / Link */}
        <div className="mt-auto">
          {project.isModal ? (
            <button 
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center text-[#ff90e8] text-sm font-bold hover:text-white transition-colors cursor-pointer"
            >
              View Details <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          ) : project.link ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#ff90e8] text-sm font-bold hover:text-white transition-colors"
            >
              View Details <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export function Accomplishments() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="accomplishments" className="py-12 md:py-24 relative bg-background overflow-hidden perspective-1000 border-t border-border">
      {/* 3D Floating Background Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20], 
          x: [-20, 20, -20],
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Accomplishments & Awards
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Recognitions that validate our commitment to elite design and creative excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 md:px-0">
          {accomplishments.map((project, index) => (
            <AccomplishmentCard 
              key={index} 
              project={project} 
              index={index} 
              onOpenModal={setSelectedProject} 
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-8 max-w-2xl">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
