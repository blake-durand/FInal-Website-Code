import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Real Estate', path: '/real-estate' },
  { name: 'Media', path: '/media' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-8 px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10"
      >
        <Link to="/" className="text-lg font-serif italic tracking-tight mr-4">
          Blake Durand
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xs uppercase tracking-widest transition-colors hover:text-white",
                location.pathname === item.path ? "text-white" : "text-white/50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-white/50 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link 
          to="/contact"
          className="hidden md:block px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
        >
          Book a Call
        </Link>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 p-6 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 md:hidden flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm uppercase tracking-widest py-2",
                location.pathname === item.path ? "text-white" : "text-white/50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
