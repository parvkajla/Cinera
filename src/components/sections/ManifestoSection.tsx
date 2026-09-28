import React from 'react';
import { motion } from 'motion/react';
import { ApertureIcon } from '../cinematic/ApertureIcon';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-28 sm:py-36 bg-[#08080a] border-y border-[#202025] overflow-hidden">
      
      {/* Background Micro Markers */}
      <div className="absolute top-6 left-6 text-xs font-mono text-[#00e5ff] tracking-widest uppercase">
        MANIFESTO // REEL 01
      </div>
      <div className="absolute bottom-6 right-6 text-xs font-mono text-[#9CA3AF] tracking-widest uppercase hidden sm:block">
        CINERA COLLECTIVE PHILOSOPHY
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center p-4 bg-[#0b0b0d] border border-[#202025] mb-10"
        >
          <ApertureIcon className="w-8 h-8 text-[#00e5ff]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-mono text-[#00e5ff] uppercase tracking-[0.3em]">
            THE CINERA MANIFESTO
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold uppercase text-[#F5F5F0] tracking-tight leading-tight break-words">
            WE DON'T JUST WATCH STORIES.
          </h2>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#00e5ff] to-[#F5F5F0] break-words">
            WE MAKE THEM.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-[#202025] pt-10"
        >
          <div className="space-y-3 p-5 bg-[#0b0b0d]/70 border border-[#202025]">
            <span className="text-xs font-mono text-[#00e5ff] block font-semibold">01 // NO PERMISSION NEEDED</span>
            <p className="text-sm sm:text-base text-[#C7CDD1] leading-relaxed">
              We don't wait for multi-million dollar studio budgets or industry approval. We pick up cinema glass, assemble crews, and shoot.
            </p>
          </div>

          <div className="space-y-3 p-5 bg-[#0b0b0d]/70 border border-[#202025]">
            <span className="text-xs font-mono text-[#00e5ff] block font-semibold">02 // EVERY CRAFT MATTERS</span>
            <p className="text-sm sm:text-base text-[#C7CDD1] leading-relaxed">
              Whether you hold the boom mic, direct set blocking, color-grade raw footage, or write dialogue at 3 AM—every frame is collective art.
            </p>
          </div>

          <div className="space-y-3 p-5 bg-[#0b0b0d]/70 border border-[#202025]">
            <span className="text-xs font-mono text-[#00e5ff] block font-semibold">03 // UNKNOWN TO UNMISSABLE</span>
            <p className="text-sm sm:text-base text-[#C7CDD1] leading-relaxed">
              Transforming raw creative instinct into recognized visual storytellers across film festivals, big screens, and digital culture.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
