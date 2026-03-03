import { motion } from 'motion/react';
import { Camera, Video, Film, Play } from 'lucide-react';

const mediaWork = [
  {
    title: "Luxury Estate Tour",
    type: "Cinematography",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Brand Storytelling",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Lifestyle Campaign",
    type: "Photography",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Modern Interior Series",
    type: "Photography",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Media = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-12 md:pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Media Production</span>
          <h1 className="text-4xl md:text-8xl font-serif italic mb-8">Visual <span className="text-white/40">Storytelling.</span></h1>
          <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            High-end production that captures the essence of a space or brand. My work is designed to evoke emotion and drive action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
            <Camera className="mx-auto mb-6 text-white/40" size={24} />
            <h3 className="text-lg font-serif italic mb-2">Photography</h3>
            <p className="text-xs text-white/30 uppercase tracking-widest">Architecture & Lifestyle</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
            <Video className="mx-auto mb-6 text-white/40" size={24} />
            <h3 className="text-lg font-serif italic mb-2">Cinematography</h3>
            <p className="text-xs text-white/30 uppercase tracking-widest">Property & Brand Films</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
            <Film className="mx-auto mb-6 text-white/40" size={24} />
            <h3 className="text-lg font-serif italic mb-2">Post-Production</h3>
            <p className="text-xs text-white/30 uppercase tracking-widest">Editing & Color Grading</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mediaWork.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">{work.type}</span>
                    <h3 className="text-2xl font-serif italic">{work.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};
