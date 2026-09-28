import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FILMMAKER_VOICES } from '@/data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const StaggerTestimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = FILMMAKER_VOICES[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % FILMMAKER_VOICES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + FILMMAKER_VOICES.length) % FILMMAKER_VOICES.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-[#0b0b0d] border border-[#202025] p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
      {/* Background Frame lines & Aqua Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-[#00e5ff]/10 to-transparent pointer-events-none" />
      <div className="absolute top-4 left-4 text-[10px] font-mono text-[#00e5ff] tracking-widest uppercase">
        FILMMAKER VOICES // DISPATCH {activeIdx + 1} OF {FILMMAKER_VOICES.length}
      </div>

      <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#00e5ff]/30 mb-6" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="font-sans text-base sm:text-xl md:text-2xl text-[#f4f4f0] font-medium leading-relaxed italic">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#202025]">
            <div className="flex items-center space-x-4">
              <img
                src={current.avatarUrl}
                alt={current.author}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#00e5ff]"
              />
              <div>
                <h4 className="font-display font-bold text-sm text-[#f4f4f0] uppercase tracking-wider">
                  {current.author}
                </h4>
                <p className="text-xs text-[#80808a] font-mono">
                  {current.role} • {current.year}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-[#121215] px-3 py-1.5 border border-[#202025] text-xs font-mono text-[#00e5ff] self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT: {current.filmTitle}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#202025]/60">
        <div className="flex space-x-2">
          {FILMMAKER_VOICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Jump to quote ${idx + 1}`}
              className={`h-1 transition-all duration-300 ${
                idx === activeIdx ? 'bg-[#00e5ff] w-10 sm:w-12' : 'bg-[#202025] hover:bg-[#80808a] w-6 sm:w-8'
              }`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            aria-label="Previous quote"
            className="p-2 bg-[#121215] hover:bg-[#00e5ff] hover:text-[#050507] text-[#f4f4f0] transition-colors border border-[#202025]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next quote"
            className="p-2 bg-[#121215] hover:bg-[#00e5ff] hover:text-[#050507] text-[#f4f4f0] transition-colors border border-[#202025]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
