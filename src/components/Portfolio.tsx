import { motion } from 'motion/react';

const portfolio = [
  {
    title: "The Glass House",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mountain Retreat",
    category: "Airbnb Management",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Urban Loft",
    category: "Media Production",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Proof of Work</span>
            <h2 className="text-3xl md:text-6xl font-serif italic">Selected <span className="text-white/40">Portfolio.</span></h2>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors border-b border-white/20 pb-2">
            View All Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif italic mb-1">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
