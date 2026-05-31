import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Portfolio } from '../components/Portfolio';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
      <Portfolio />
      <ReviewsCarousel />

      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-4 block text-[10px] uppercase tracking-[0.3em] text-white/30">
              eXp Realty
            </span>
            <h2 className="font-serif text-3xl italic md:text-5xl">
              Search live <span className="text-white/40">listings.</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
              <iframe
                title="Search listings with eXp Realty"
                src="https://blakedurand.exprealty.com/embed.php"
                style={{ width: 280, height: 680 }}
                allowTransparency
                frameBorder={0}
              />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};
