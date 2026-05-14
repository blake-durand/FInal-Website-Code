import { Instagram, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { BorderBeam } from './Effects';

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hideCTA = ['/real-estate', '/contact', '/shop'].includes(location.pathname);

  if (isHome) {
    return (
      <footer className="border-t border-white/10 bg-black px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
            <Link to="/real-estate" className="hover:text-white transition-colors">
              Real Estate
            </Link>
            <Link to="/media" className="hover:text-white transition-colors">
              Media
            </Link>
            <Link to="/shop" className="hover:text-white transition-colors">
              Shop
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">© 2026 Blake Durand</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn('relative border-t border-white/10 px-6 py-16 md:py-24', 'bg-black')}>
      <div className="relative z-10 mx-auto max-w-7xl">
        {!hideCTA && (
          <div className="mb-20 border border-white/10 bg-white/[0.02] p-10 text-center md:p-14">
            <h2 className="mb-6 font-serif text-2xl italic text-white md:text-3xl">Ready to talk?</h2>
            <p className="mb-8 mx-auto max-w-lg text-[15px] font-light leading-relaxed text-white/45">
              Whether you're buying, selling, or need property managed, we'll find the right next step together.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 bg-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-white/90"
            >
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Contact <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        )}

        <div
          className={cn(
            'grid gap-14 border-white/10 md:grid-cols-4',
            hideCTA ? '' : 'border-t pt-16 md:border-t md:pt-20'
          )}
        >
          <div className="md:col-span-2">
            <Link to="/" className="mb-6 block font-serif text-2xl italic text-white">
              Blake Durand
            </Link>
            <p className="mb-10 max-w-sm text-[15px] font-light leading-relaxed text-white/45">
              Real estate and media focused on clarity, conversion, and care.
            </p>
            <div className="flex gap-6 text-white/40">
              <a href="#" className="transition-colors hover:text-white">
                <Instagram size={20} strokeWidth={1.25} />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Linkedin size={20} strokeWidth={1.25} />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Twitter size={20} strokeWidth={1.25} />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Mail size={20} strokeWidth={1.25} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] uppercase tracking-[0.28em] text-white/35">Navigate</h4>
            <ul className="space-y-4 text-sm text-white/55">
              <li>
                <Link to="/real-estate" className="transition-colors hover:text-white">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/media" className="transition-colors hover:text-white">
                  Media Production
                </Link>
              </li>
              <li>
                <Link to="/shop" className="transition-colors hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] uppercase tracking-[0.28em] text-white/35">Legal</h4>
            <ul className="space-y-4 text-sm text-white/55">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.18em] text-white/28 md:flex-row md:items-center">
          <p>© 2026 Blake Durand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
