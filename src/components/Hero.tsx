import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BorderBeam } from './Effects';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-50"
          src="/hero-video.mp4"
          poster="/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center px-2">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="home-hero-headline text-balance text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-14 leading-[1.18]"
        >
          Premium production for the businesses building Los&nbsp;Angeles
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55 md:text-[13px]">
            Work with me in:
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/media"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-transform hover:scale-105"
            >
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Media production <ArrowRight size={14} />
              </span>
            </Link>
            <Link
              to="/real-estate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
            >
              Real estate
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
