import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { BorderBeam } from './Effects';

export const Footer = () => {
  const location = useLocation();
  const hideCTA = ['/real-estate', '/contact', '/shop'].includes(location.pathname);

  return (
    <footer className="relative py-12 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {!hideCTA && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-white/[0.02] border border-white/10 text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl font-serif italic mb-6">Ready to start your journey?</h2>
            <p className="text-white/40 mb-8 max-w-lg mx-auto">Whether you're looking to buy, sell, or have your property managed, I'm here to help you achieve your goals.</p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden"
            >
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start a Conversation <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        )}

        <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-12 pt-24 border-t border-white/10", hideCTA && "pt-0 border-t-0")}>
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-serif italic mb-6 block">Blake Durand</Link>
            <p className="text-white/40 font-light max-w-sm leading-relaxed mb-8">
              Helping first-time buyers, sellers, and investors navigate the real estate market with elite marketing and management.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/real-estate" className="text-sm text-white/60 hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/media" className="text-sm text-white/60 hover:text-white transition-colors">Media Production</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/20">© 2026 Blake Durand. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-widest text-white/20 italic">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
};
