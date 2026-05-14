import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section
      aria-label="Choose an area"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-55"
          src="/hero-video.mp4"
          poster="/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-5 md:gap-6">
        <motion.div {...cardMotion} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
          <Link
            to="/media"
            className="group flex flex-col gap-6 rounded-2xl border border-brand-gold/70 bg-black/45 px-6 py-6 shadow-[inset_0_1px_0_0_rgba(212,175,55,0.12)] backdrop-blur-md transition-colors hover:border-brand-gold hover:bg-black/55 md:flex-row md:items-center md:gap-8 md:px-8 md:py-7"
          >
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-brand-gold">
                Media production
              </p>
              <h2 className="mb-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                Cinematic content that converts
              </h2>
              <p className="text-sm leading-relaxed text-white/55">
                Brand films, ads, social content
              </p>
            </div>
            <div className="shrink-0 md:self-stretch md:flex md:items-center">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-black transition-transform group-hover:scale-[1.02] md:w-auto">
                Work with me
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          {...cardMotion}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/real-estate"
            className="group flex flex-col gap-6 rounded-2xl border border-brand-gold/70 bg-black/45 px-6 py-6 shadow-[inset_0_1px_0_0_rgba(212,175,55,0.12)] backdrop-blur-md transition-colors hover:border-brand-gold hover:bg-black/55 md:flex-row md:items-center md:gap-8 md:px-8 md:py-7"
          >
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-brand-gold">
                Real estate &amp; property management
              </p>
              <h2 className="mb-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                Listings that move faster
              </h2>
              <p className="text-sm leading-relaxed text-white/55">
                Drone tours, photo, walkthroughs · Airbnb &amp; STR management
              </p>
            </div>
            <div className="shrink-0 md:self-stretch md:flex md:items-center">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold bg-transparent px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors group-hover:bg-brand-gold/10 md:w-auto">
                See listings
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
