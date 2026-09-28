import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export const ShimmerText: React.FC<ShimmerTextProps> = ({
  text,
  className,
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative inline-block font-display font-extrabold uppercase tracking-tight",
        className
      )}
    >
      <span className="bg-gradient-to-r from-[#f4f4f0] via-[#00e5ff] to-[#f4f4f0] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
        {text}
      </span>
    </motion.span>
  );
};
