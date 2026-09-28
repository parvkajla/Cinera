import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';

interface JoinCollectiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinCollectiveModal: React.FC<JoinCollectiveModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('Director');
  const [form, setForm] = useState({
    name: '',
    email: '',
    portfolio: '',
    statement: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const roles = [
    'Director', 'Cinematographer', 'Screenwriter', 'Actor', 
    'Editor', 'Sound Designer', 'Producer', 'Colorist'
  ];

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
          className="relative w-full max-w-xl bg-[#0b0b0d] border border-[#202025] p-6 md:p-8 shadow-2xl z-10 my-auto"
        >
          <div className="flex justify-between items-start mb-6 border-b border-[#202025] pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#00e5ff] tracking-widest uppercase">
                COLLECTIVE MEMBERSHIP // APPLICATION 2026
              </span>
              <h3 className="font-display text-2xl font-extrabold text-[#f4f4f0] uppercase mt-1">
                JOIN THE COLLECTIVE
              </h3>
            </div>
            <button onClick={onClose} className="p-1 text-[#80808a] hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#80808a] uppercase mb-2">
                  Select Primary Craft / Role *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {roles.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`px-2.5 py-2 text-xs font-mono uppercase text-center border transition-all truncate ${
                        role === r
                          ? 'bg-[#00e5ff] text-[#050507] border-[#00e5ff] font-bold'
                          : 'bg-[#121215] text-[#80808a] border-[#202025] hover:border-[#80808a]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tanya Kapoor"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tanya@cinema.edu"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                  Portfolio / Instagram / Vimeo Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://vimeo.com/username or @handle"
                  value={form.portfolio}
                  onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                  className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#80808a] uppercase mb-1">
                  What Stories Do You Want To Tell?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the films, genres, or concepts you are excited to shoot..."
                  value={form.statement}
                  onChange={(e) => setForm({ ...form, statement: e.target.value })}
                  className="w-full bg-[#121215] border border-[#202025] focus:border-[#00e5ff] px-4 py-2.5 text-sm text-[#f4f4f0] outline-none resize-none"
                />
              </div>

              <div className="pt-4">
                <ShinyButton type="submit" className="w-full">
                  SUBMIT APPLICATION TO CINERA
                </ShinyButton>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <Sparkles className="w-16 h-16 text-[#00e5ff] mx-auto animate-pulse" />
              <h4 className="font-display text-2xl font-bold uppercase text-[#f4f4f0]">
                WELCOME TO THE COLLECTIVE!
              </h4>
              <p className="text-xs sm:text-sm text-[#80808a] max-w-md mx-auto">
                Thank you <span className="text-white font-semibold">{form.name}</span>. Your application for <span className="text-[#00e5ff] font-semibold">{role}</span> has been logged. Check your email for access to the CINERA Blackbox Gear Lab pass.
              </p>
              <div className="pt-4">
                <ShinyButton onClick={onClose} variant="secondary" className="w-full">
                  RETURN TO SITE
                </ShinyButton>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
