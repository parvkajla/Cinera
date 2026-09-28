import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ShinyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-display text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-none group cursor-pointer border whitespace-nowrap",
        variant === 'primary' && "bg-[#00e5ff] text-[#050507] border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:bg-[#22d3ee]",
        variant === 'secondary' && "bg-[#121215] text-[#f4f4f0] border-[#202025] hover:border-[#00e5ff] hover:bg-[#18181f]",
        variant === 'outline' && "bg-transparent text-[#f4f4f0] border-[#202025] hover:border-[#00e5ff] hover:text-[#00e5ff]",
        className
      )}
      {...props}
    >
      {/* Subtle Shimmer Sweep */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      {/* Corner Crop Marks */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current opacity-70"></span>
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current opacity-70"></span>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
