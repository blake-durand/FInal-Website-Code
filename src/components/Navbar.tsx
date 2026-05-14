import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Real Estate', path: '/real-estate' },
  { name: 'Media', path: '/media' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/15 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
        <Link
          to="/"
          className={cn('font-serif italic text-[15px] md:text-[17px] tracking-tight', isHome ? 'text-white' : 'text-white/90')}
        >
          Blake Durand
        </Link>

        <div className="hidden md:flex md:flex-1 md:justify-end md:items-center md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-white',
                location.pathname === item.path ? 'text-white underline underline-offset-[10px]' : 'text-white/55'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-white/70 hover:text-white -mr-2"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden border-t border-white/10 bg-black px-4 pb-6 pt-2 flex flex-col"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'py-4 text-sm uppercase tracking-[0.18em] border-b border-white/10 transition-colors',
                location.pathname === item.path ? 'text-white' : 'text-white/50'
              )}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
};
