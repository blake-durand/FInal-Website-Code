import { motion } from 'motion/react';
import { Home, Camera, BarChart3, ArrowUpRight } from 'lucide-react';
import { CursorProximity } from './Effects';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Real Estate Marketing",
    description: "I don't just list homes; I market them. Using high-end media production and strategic ad placement to ensure your property stands out in a crowded market.",
    icon: Home,
    link: "/real-estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Airbnb Management",
    description: "From finding the perfect investment property to full-service management. I help you turn real estate into a high-yield short-term rental business.",
    icon: BarChart3,
    link: "/real-estate",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Media Production",
    description: "Professional content creation for brands and properties. My media background is the secret sauce that makes my real estate marketing unbeatable.",
    icon: Camera,
    link: "/media",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Features = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-6xl font-serif italic mb-6 md:mb-8 leading-tight">
              The soul of my business is <span className="text-white/40">marketing and management.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg font-light leading-relaxed"
          >
            I'm a realtor who goes all-in for marketing. I know how to find profitable Airbnbs and help manage them, ensuring every property reaches its maximum potential.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <CursorProximity className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white/80" size={24} />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-4">{feature.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors"
                  >
                    Learn More <ArrowUpRight size={12} />
                  </Link>
                </div>
                
                {/* Subtle Image Preview on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </CursorProximity>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
