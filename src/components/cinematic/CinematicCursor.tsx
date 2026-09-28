import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CinematicCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'film'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect hovered target
      const target = e.target as HTMLElement | null;
      if (target) {
        const filmCard = target.closest('[data-cursor="film"]');
        const interactive = target.closest('a, button, [role="button"], [data-cursor="hover"]');

        if (filmCard) {
          setCursorType('film');
        } else if (interactive) {
          setCursorType('hover');
        } else {
          setCursorType('default');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Tiny Focus Dot */}
      <motion.div
        className="fixed w-2 h-2 bg-[#00e5ff] rounded-full shadow-[0_0_8px_#00e5ff]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: cursorType === 'hover' ? 1.5 : cursorType === 'film' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.2 }}
      />

      {/* Outer Aperture Focus Reticle Ring */}
      <motion.div
        className={`fixed border flex items-center justify-center text-[9px] font-mono tracking-widest uppercase transition-colors duration-200 ${
          cursorType === 'film'
            ? 'w-16 h-16 rounded-full bg-[#00e5ff] text-[#050507] border-[#00e5ff] font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]'
            : cursorType === 'hover'
            ? 'w-10 h-10 rounded-full border-[#00e5ff] bg-[#00e5ff]/10 shadow-[0_0_15px_rgba(0,229,255,0.2)]'
            : 'w-6 h-6 border-[#00e5ff]/40 rounded-full'
        }`}
        animate={{
          x: position.x - (cursorType === 'film' ? 32 : cursorType === 'hover' ? 20 : 12),
          y: position.y - (cursorType === 'film' ? 32 : cursorType === 'hover' ? 20 : 12),
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      >
        {cursorType === 'film' && <span>VIEW</span>}
      </motion.div>
    </div>
  );
};
