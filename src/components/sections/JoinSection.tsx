import React from 'react';
import { motion } from 'motion/react';
import { ShinyButton } from '../ui/ShinyButton';
import { ShimmerText } from '../ui/ShimmerText';
import { Film, Play, Sparkles } from 'lucide-react';

interface JoinSectionProps {
  onOpenJoinModal: () => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="join" className="py-28 sm:py-36 bg-[#08080a] relative border-t border-[#202025] overflow-hidden text-center">
      
      {/* Background Ambient Aqua Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#0b0b0d] border border-[#00e5ff]/30 rounded-full text-xs font-mono text-[#00e5ff]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-widest uppercase">CREATIVE CALL // ALL CINEMA CRAFTS OPEN</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase text-[#F5F5F0] tracking-tight leading-none break-words"
        >
          <ShimmerText text="YOUR STORY STARTS HERE." />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-base sm:text-lg text-[#C7CDD1] font-sans font-normal leading-relaxed px-2"
        >
          No experience required. Whether you bring a cinema camera package or an unwritten story draft—CINERA provides the crew and gear to bring it to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <ShinyButton onClick={onOpenJoinModal} variant="primary" className="w-full sm:w-auto">
            <Film className="w-4 h-4 text-[#050507]" />
            <span>JOIN THE COLLECTIVE</span>
          </ShinyButton>

          <a href="#films" className="w-full sm:w-auto">
            <ShinyButton variant="secondary" className="w-full sm:w-auto">
              <Play className="w-4 h-4 fill-current text-[#00e5ff]" />
              <span>SEE WHAT WE MAKE</span>
            </ShinyButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
