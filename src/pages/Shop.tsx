import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, Lock, X, Eye, EyeOff } from 'lucide-react';
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

const SHOP_PASSWORD = "shopwithblake";

export const Shop = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (password === SHOP_PASSWORD) {
      setUnlocked(true);
      setModalOpen(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

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
              className="group cursor-pointer relative"
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

              {/* Coming Soon Overlay */}
              {!unlocked && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/40 rounded-2xl" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Coming Soon</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Early Access Button */}
        {!unlocked && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => { setModalOpen(true); setError(false); }}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white/70 transition-colors border-b border-white/10 pb-2"
            >
              <Lock size={12} />
              Early Access
            </button>
          </div>
        )}

        <div className="mt-32 p-12 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
          <h2 className="text-3xl font-serif italic mb-6">Looking for custom solutions?</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">I offer personalized consulting for real estate marketing and property management systems.</p>
          <Link to="/contact" className="group relative inline-block px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden">
            <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Book a Consultation</span>
          </Link>
        </div>
      </div>

      {/* Password Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            onClick={(e) => { if (e.target === e.currentTarget) { setModalOpen(false); setError(false); setPassword(''); } }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl p-8"
            >
              <button
                onClick={() => { setModalOpen(false); setError(false); setPassword(''); }}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 block">Early Access</span>
                <h2 className="text-2xl font-serif italic">Enter Password</h2>
              </div>

              <div className="relative mb-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  placeholder="Password"
                  autoFocus
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/30 transition-colors pr-10"
                />
                <button
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>

              {error && (
                <p className="text-red-400/80 text-xs mb-4 tracking-wide">Incorrect password. Try again.</p>
              )}

              <button
                onClick={handleUnlock}
                className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                Unlock Shop
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};
