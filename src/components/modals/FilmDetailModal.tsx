import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Award } from 'lucide-react';
import { Film } from '@/types';
import { ShinyButton } from '../ui/ShinyButton';

interface FilmDetailModalProps {
  film: Film | null;
  onClose: () => void;
}

export const FilmDetailModal: React.FC<FilmDetailModalProps> = ({ film, onClose }) => {
  if (!film) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050507]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#0b0b0d] border border-[#202025] shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#121215] border-b border-[#202025]">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff]"></span>
              <span className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase">
                FILM ARCHIVE // ID: {film.id}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#80808a] hover:text-[#f4f4f0] hover:bg-[#202025] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Poster / Trailer Preview */}
            <div className="relative group min-h-[280px] md:min-h-[420px] bg-black">
              <img
                src={film.posterUrl}
                alt={film.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-black/50" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00e5ff] flex items-center justify-center text-[#050507] shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 ml-1 fill-[#050507]" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/70 bg-black/70 backdrop-blur-md p-2 border border-white/10 truncate">
                <span>SIMULATED TRAILER PREVIEW • 4K REMASTER</span>
              </div>
            </div>

            {/* Info Column */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#00e5ff] mb-2 uppercase">
                  <span>{film.category}</span>
                  <span>•</span>
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.duration}</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-[#f4f4f0] tracking-tight leading-tight mb-3 break-words">
                  {film.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#80808a] leading-relaxed mb-6">
                  {film.synopsis}
                </p>

                {/* Metadata list */}
                <div className="space-y-2 border-t border-b border-[#202025] py-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#80808a] uppercase font-mono">Creator / Crew</span>
                    <span className="text-[#f4f4f0] font-medium">{film.creator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#80808a] uppercase font-mono">Key Role</span>
                    <span className="text-[#f4f4f0] font-medium">{film.role}</span>
                  </div>
                </div>

                {/* Accolades */}
                {film.accolades && film.accolades.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>Accolades & Festival Selections</span>
                    </h4>
                    <ul className="space-y-1">
                      {film.accolades.map((acc, i) => (
                        <li key={i} className="text-xs text-[#f4f4f0]/90 flex items-center space-x-2">
                          <span className="text-[#00e5ff]">•</span>
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 flex gap-3">
                <ShinyButton onClick={onClose} className="w-full">
                  CLOSE PREVIEW
                </ShinyButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
