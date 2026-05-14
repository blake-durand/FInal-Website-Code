import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.72] opacity-65 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black" />
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[90vw] text-center font-serif italic font-medium tracking-tight text-[clamp(2rem,8vw,5.5rem)] leading-[1.12] text-balance text-white"
      >
        Marketing that moves
      </motion.h1>
    </section>
  );
};
