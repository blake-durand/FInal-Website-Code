import { motion } from 'motion/react';
import { Home, Camera, BarChart3, ArrowUpRight } from 'lucide-react';
import { CursorProximity } from './Effects';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Real Estate Marketing',
    description:
      "I don't just list homes; I market them. High-end media and strategic placement so your property stands out in a crowded market.",
    icon: Home,
    link: '/real-estate',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Airbnb Management',
    description:
      'From finding the right investment to full-service management — I help you turn real estate into a high-yield short-term rental.',
    icon: BarChart3,
    link: '/real-estate',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Media Production',
    description:
      'Cinematic content for brands and properties. My media background is the edge behind marketing that actually converts.',
    icon: Camera,
    link: '/media',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000',
  },
];

export const Features = () => {
  return (
    <section className="py-24 md:py-36 px-6 bg-brand-dark relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-end mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35 mb-6">Capabilities</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic mb-6 leading-[1.1]">
              The soul of my business is{' '}
              <span className="text-white/38 not-italic font-normal">
                marketing and management.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/48 text-lg md:text-xl font-light leading-relaxed lg:pb-2"
          >
            I'm a realtor who goes all-in on presentation and systems. From profitable Airbnbs to polished launches,
            every property is positioned to earn attention — then results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <CursorProximity className="h-full rounded-2xl border border-white/[0.08] bg-brand-elevated/80 overflow-hidden hover:border-white/20 transition-colors shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[16/11] md:aspect-[5/4] overflow-hidden">
                  <img
                    src={feature.image}
                    alt=""
                    className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-elevated via-brand-elevated/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center justify-center w-11 h-11 rounded-xl bg-black/35 backdrop-blur-md border border-white/10">
                    <feature.icon className="text-white/90" size={22} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10 p-7 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif italic mb-3">{feature.title}</h3>
                  <p className="text-white/42 font-light leading-relaxed mb-8 text-[15px] md:text-base">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/55 group-hover:text-white transition-colors"
                  >
                    Learn More <ArrowUpRight size={12} aria-hidden />
                  </Link>
                </div>
              </CursorProximity>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
