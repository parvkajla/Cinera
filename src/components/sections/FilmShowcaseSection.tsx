import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FILMS_DATA } from '@/data/films';
import { Film } from '@/types';
import { Play, Award } from 'lucide-react';

interface FilmShowcaseSectionProps {
  onSelectFilm: (film: Film) => void;
}

export const FilmShowcaseSection: React.FC<FilmShowcaseSectionProps> = ({ onSelectFilm }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Short Film', 'Documentary', 'Cinematic Story', 'Experimental'];

  const filteredFilms = activeCategory === 'All'
    ? FILMS_DATA
    : FILMS_DATA.filter((f) => f.category === activeCategory);

  return (
    <section id="films" className="py-28 sm:py-36 bg-[#08080a] border-t border-[#202025] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono text-[#00e5ff] tracking-widest uppercase">
              02 // CINERA ARCHIVE & SELECTIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase text-[#F5F5F0] mt-2">
              FILM SHOWCASE
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#00e5ff] text-[#050507] border-[#00e5ff] font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                    : 'bg-[#0b0b0d] text-[#D1D5DB] border-[#202025] hover:border-[#D1D5DB] hover:text-[#F5F5F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Film Cards Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFilms.map((film, idx) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onSelectFilm(film)}
              data-cursor="film"
              className="group relative bg-[#0b0b0d] border border-[#202025] overflow-hidden cursor-pointer flex flex-col justify-between hover:border-[#00e5ff]/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Visual Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Dark Vignette & Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-black/40 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category & Duration Badge */}
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#00e5ff] uppercase tracking-wider">
                    {film.category}
                  </span>
                  <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#F5F5F0] uppercase">
                    {film.duration}
                  </span>
                </div>

                {/* Play Button Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#00e5ff] flex items-center justify-center text-[#050507] shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-[#050507]" />
                  </div>
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                  <span>{film.creator}</span>
                  <span>{film.year}</span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase text-[#F5F5F0] group-hover:text-[#00e5ff] transition-colors line-clamp-1">
                  {film.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#C7CDD1] line-clamp-2 leading-relaxed">
                  {film.synopsis}
                </p>

                {film.accolades && film.accolades.length > 0 && (
                  <div className="pt-2 text-xs font-mono text-[#00e5ff] flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span className="truncate">{film.accolades[0]}</span>
                  </div>
                )}
              </div>

              {/* Aqua Accent Bar on Card Bottom */}
              <div className="h-[2px] w-0 bg-[#00e5ff] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
