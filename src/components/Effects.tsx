import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import { cn } from '../lib/utils';

interface CursorProximityProps {
  children: React.ReactNode;
  className?: string;
  radius?: number;
}

export const CursorProximity = ({ children, className, radius = 200 }: CursorProximityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(${radius}px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
          ),
        }}
      />
      {children}
    </div>
  );
};

export const BorderBeam = ({ className }: { className?: string }) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10", className)}>
      <div className="absolute inset-0 rounded-[inherit] [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 animate-border-beam [offset-path:rect(0_100%_100%_0_round_inherit)] [offset-anchor:50%_50%] w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </div>
  );
};
