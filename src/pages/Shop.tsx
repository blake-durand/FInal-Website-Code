import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BorderBeam } from '../components/Effects';

const products = [
  {
    id: 1,
    name: "Real Estate Marketing Kit",
    price: "$199",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Airbnb Host Guide",
    price: "$49",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Media Presets Pack",
    price: "$79",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Shop = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-20 md:pb-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">The Shop</span>
          <h1 className="text-4xl md:text-8xl font-serif italic mb-8 whitespace-nowrap">Concepts & <span className="text-white/40">Creations.</span></h1>
          <p className="text-white/40 max-w-xl mx-auto font-light">
            Beyond real estate, I design and build. A small-batch collection of my personal 3D-printed designs, digital downloads, and creative pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingBag size={18} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-serif italic mb-1">{product.name}</h3>
                  <p className="text-lg font-light text-white/60">{product.price}</p>
                </div>
                <button className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
          <h2 className="text-3xl font-serif italic mb-6">Looking for custom solutions?</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">I offer personalized consulting for real estate marketing and property management systems.</p>
          <Link to="/contact" className="group relative inline-block px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden">
            <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Book a Consultation</span>
          </Link>
        </div>
      </div>
    </motion.main>
  );
};
