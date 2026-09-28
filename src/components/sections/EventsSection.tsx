import React from 'react';
import { motion } from 'motion/react';
import { EVENTS_DATA } from '@/data/events';
import { EventItem } from '@/types';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

interface EventsSectionProps {
  onRSVP: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRSVP }) => {
  return (
    <section id="events" className="py-28 sm:py-36 bg-[#050507] relative border-t border-[#202025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#202025] pb-8 gap-6">
          <div>
            <span className="text-xs font-mono text-[#00e5ff] tracking-widest uppercase">
              03 // UPCOMING SCREENINGS & MASTERCLASSES
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase text-[#F5F5F0] mt-2">
              CINERA EVENTS
            </h2>
          </div>
          <p className="max-w-lg text-base sm:text-lg text-[#C7CDD1] font-sans font-normal leading-relaxed">
            Open film premieres, hands-on anamorphic camera labs, script table reads, and high-octane 24-hour film challenges.
          </p>
        </div>

        {/* Editorial Events List Layout */}
        <div className="space-y-4 sm:space-y-6">
          {EVENTS_DATA.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#0b0b0d] border border-[#202025] p-6 sm:p-8 hover:border-[#00e5ff] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Event Date Column */}
              <div className="md:w-1/4 space-y-2 border-b md:border-b-0 md:border-r border-[#202025] pb-4 md:pb-0 md:pr-6">
                <span className="inline-block px-2.5 py-1 bg-[#121215] text-[#00e5ff] text-[10px] font-mono tracking-widest uppercase border border-[#202025]">
                  {evt.badge}
                </span>
                <div className="text-sm font-mono text-[#F5F5F0] font-bold flex items-center gap-2 pt-1">
                  <Calendar className="w-4 h-4 text-[#00e5ff]" />
                  <span>{evt.date}</span>
                </div>
                <div className="text-xs font-mono text-[#C7CDD1] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>{evt.time}</span>
                </div>
              </div>

              {/* Event Main Info */}
              <div className="md:w-2/4 space-y-2">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase text-[#F5F5F0] group-hover:text-[#00e5ff] transition-colors break-words">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C7CDD1] leading-relaxed">
                  {evt.description}
                </p>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#D1D5DB] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>{evt.location}</span>
                </div>
              </div>

              {/* RSVP Action */}
              <div className="md:w-1/4 flex md:justify-end items-center">
                <button
                  onClick={() => onRSVP(evt)}
                  className="w-full md:w-auto px-6 py-3.5 bg-[#121215] group-hover:bg-[#00e5ff] group-hover:text-[#050507] text-[#F5F5F0] font-display text-xs font-bold uppercase tracking-widest border border-[#202025] group-hover:border-[#00e5ff] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md whitespace-nowrap"
                >
                  <Ticket className="w-4 h-4" />
                  <span>RESERVE SEAT</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
