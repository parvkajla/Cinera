import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EventItem } from '@/types';
import { ShinyButton } from '../ui/ShinyButton';

interface EventRSVPModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventRSVPModal: React.FC<EventRSVPModalProps> = ({ event, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', rollNo: '', department: '' });

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050507]/90 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0b0b0d] border border-[#202025] p-6 md:p-8 shadow-2xl z-10 my-auto"
        >
          <div className="flex justify-between items-start mb-6 border-b border-[#202025] pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#00e5ff] tracking-widest uppercase">
                EVENT REGISTRATION // SEAT RESERVATION
              </span>
              <h3 className="font-display text-xl font-bold text-[#f4f4f0] uppercase mt-1 break-words">
                {event.title}
              </h3>
            </div>
            <button onClick={onClose} className="p-1 text-[#80808a] hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#121215] p-3 border border-[#202025] text-xs font-mono text-[#80808a] space-y-1">
                <div className="flex items-center space-x-2 text-[#f4f4f0]">
                  <Calendar className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Sen"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="creator@cinema.edu"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                    Phone / ID No.
                  </label>
                  <input
                    type="text"
                    placeholder="2026-FILM-042"
                    value={form.rollNo}
                    onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
                    className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <ShinyButton type="submit" className="w-full">
                  CONFIRM EVENT RSVP
                </ShinyButton>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-[#00e5ff] mx-auto animate-pulse" />
              <h4 className="font-display text-xl font-bold uppercase text-[#f4f4f0]">
                SEAT RESERVED!
              </h4>
              <p className="text-xs sm:text-sm text-[#80808a]">
                A pass confirmation code has been generated for <span className="text-white font-medium">{form.name}</span>. We will see you at {event.location}.
              </p>
              <div className="pt-4">
                <ShinyButton onClick={onClose} variant="secondary" className="w-full">
                  DONE
                </ShinyButton>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
