import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden">
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
          className="home-hero-headline text-balance text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-12 leading-[1.18]"
        >
          Premium production for the businesses building Los&nbsp;Angeles
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-sm">
            <iframe
              title="Home search"
              src="https://blakedurand.exprealty.com/embed.php"
              className="idx-embed-dark"
              style={{ width: 280, height: 680 }}
              allowTransparency
              frameBorder={0}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
