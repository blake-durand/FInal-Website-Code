import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/** Matching clear pills — frosted outline, equal width side-by-side on sm+ */
const ctaClear =
  'inline-flex flex-1 min-h-[52px] w-full basis-0 items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/[0.06] text-white backdrop-blur-sm font-bold uppercase tracking-[0.12em] text-[11px] transition-colors hover:border-white/35 hover:bg-white/[0.12] sm:min-h-[54px] sm:tracking-widest sm:text-xs';

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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] md:text-[13px]">
            Work with me in:
          </p>
          <div className="flex w-full max-w-xl flex-col gap-4 sm:max-w-2xl sm:flex-row">
            <Link to="/media" className={ctaClear}>
              Media production
              <ArrowRight size={14} className="shrink-0" aria-hidden />
            </Link>
            <Link to="/real-estate" className={ctaClear}>
              Real estate
              <ArrowRight size={14} className="shrink-0" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
