import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, TrendingUp, ShieldCheck, MapPin, Star, ArrowRight, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BorderBeam, CursorProximity } from '../components/Effects';

// All 50 Cloudinary photos for Kihei Akahi C417, sorted 1–50
const obsidianPhotos = [
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577867/1_kuvgei.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577878/2_tjoun7.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577867/3_fcmboq.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577887/4_fkjb2v.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577888/5_mqgnpo.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577889/6_rpejei.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577894/7_v9hu5p.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577892/8_hgwwrq.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577902/9_bgk4pp.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577890/10_qsmr40.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577885/11_yuq5cb.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577885/12_r4i3ig.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577888/13_fvcifj.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577903/14_jfnljg.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577881/15_hku8kk.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577895/16_owrsa9.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577896/17_hpkfae.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577898/18_nretac.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577899/19_jqukty.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577881/20_sgy5yq.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577882/21_so4l9o.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577895/22_lrcirv.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577892/23_pxzx1s.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577897/24_sl9xm2.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577899/25_wffrpj.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577883/26_uqvnxh.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577905/27_rohdkl.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577904/28_y2nrt0.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577916/29_hcy1kj.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577918/30_gbtjxt.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577919/31_yfr0af.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577882/32_vwzx8n.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577882/33_cjz2mk.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577879/34_xm5i87.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577908/35_fcahtk.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577874/36_s8gflw.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577874/37_uwaiwr.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577902/38_kaq2hw.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577911/39_myo9u0.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577875/40_qtpeeu.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577874/41_qgeekb.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577868/42_ati9dt.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577915/43_uokjia.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577914/44_jzrumu.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577877/45_svysxy.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577870/46_zvlar0.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577906/47_onqbrx.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577916/48_na3idq.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577911/49_s5a1za.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577917/50_sjlcta.jpg",
];

const thumb = (url: string) => url.replace('/upload/', '/upload/w_800,c_fill,q_auto,f_auto/');
const full  = (url: string) => url.replace('/upload/', '/upload/w_2400,q_auto,f_auto/');

const listings = [
  {
    id: 1,
    title: "Dee's Maui Retreat",
    location: "Maui, HI",
    price: "$450",
    image: thumb(obsidianPhotos[0]),
    url: "https://www.airbnb.com/rooms/1551894246856716785?guests=1&adults=1&s=67&unique_share_id=5a61a815-d946-43cc-890a-6809b2c2c4ee",
    rating: 4.9,
    tags: ["Ocean View", "Resort"]
  },
  {
    id: 2,
    title: "Azure Coast Estate",
    location: "Malibu, CA",
    price: "$850",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    url: "#",
    rating: 5.0,
    tags: ["Oceanfront", "Luxury"]
  },
  {
    id: 3,
    title: "Emerald Forest Cabin",
    location: "Big Bear, CA",
    price: "$320",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
    url: "#",
    rating: 4.8,
    tags: ["Mountain", "Hot Tub"]
  }
];

const cities = [
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000",
    url: "#"
  },
  {
    name: "Westlake",
    image: "https://images.unsplash.com/photo-1580587767526-cf3671a05014?auto=format&fit=crop&q=80&w=1000",
    url: "#"
  },
  {
    name: "Ventura",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1000",
    url: "#"
  },
  {
    name: "Santa Barbara",
    image: "https://images.unsplash.com/photo-1541464067620-bf5489a39653?auto=format&fit=crop&q=80&w=1000",
    url: "#"
  }
];

export const RealEstate = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + obsidianPhotos.length) % obsidianPhotos.length : null), []);
  const next  = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % obsidianPhotos.length : null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-20 md:pb-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Real Estate & Management</span>
          <h1 className="text-3xl md:text-8xl font-serif italic mb-8 leading-tight mx-auto max-w-5xl">
            Strategic <span className="text-white/40">Growth.</span> <br />
            <span className="whitespace-nowrap">Seamless <span className="text-white/40">Management.</span></span>
          </h1>
        </div>

        {/* Direct Booking Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Exclusive Stays</span>
              <h2 className="text-3xl md:text-6xl font-serif italic">Book <span className="text-white/40">Direct.</span></h2>
            </div>
            <p className="text-white/40 max-w-sm font-light text-sm leading-relaxed">
              Experience the properties I manage firsthand. Skip the platform fees and book your next stay directly through my curated collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <CursorProximity className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-colors">
                  {/* Image — Obsidian Villa is clickable to open gallery */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {listing.id === 1 ? (
                      <button
                        onClick={() => setLightboxIndex(0)}
                        className="w-full h-full block"
                        aria-label="View all 50 photos"
                      >
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] uppercase tracking-widest text-white/90 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Images size={11} /> View 50 Photos
                          </span>
                        </div>
                      </button>
                    ) : (
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
                      {listing.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[8px] uppercase tracking-widest text-white/80 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                      {listing.price} <span className="text-[8px] font-normal opacity-60">/ night</span>
                    </div>
                  </div>

                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-serif italic mb-1">{listing.title}</h3>
                        <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                          <MapPin size={10} /> {listing.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <Star size={12} className="text-brand-gold fill-brand-gold" />
                        {listing.rating}
                      </div>
                    </div>

                    <a
                      href={listing.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] overflow-hidden hover:bg-white hover:text-black transition-all flex items-center justify-center"
                    >
                      <BorderBeam className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Book Direct <ArrowRight size={12} />
                      </span>
                    </a>
                  </div>
                </CursorProximity>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IDX Search Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Market Search</span>
              <h2 className="text-3xl md:text-6xl font-serif italic">Find Your Next <span className="text-white/40">Investment.</span></h2>
            </div>
            <p className="text-white/40 max-w-sm font-light text-sm leading-relaxed">
              Explore live listings across Southern California's most desirable markets. Connected directly to the IDX for real-time inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.a
                key={city.name}
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden block"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif italic mb-2">{city.name}</h3>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                    Search Listings <ArrowRight size={12} />
                  </div>
                </div>
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10">
            <HomeIcon className="text-white/60 mb-8" size={32} />
            <h2 className="text-3xl font-serif italic mb-6">For Sellers</h2>
            <p className="text-white/40 font-light leading-relaxed mb-8">
              I leverage my media production background to create cinematic property tours and high-impact social campaigns that reach buyers where they are.
            </p>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Professional Staging & Media</li>
              <li className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Targeted Digital Advertising</li>
              <li className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Expert Negotiation</li>
            </ul>
          </div>

          <div className="p-12 rounded-3xl bg-white/[0.02] border border-white/10">
            <TrendingUp className="text-white/60 mb-8" size={32} />
            <h2 className="text-3xl font-serif italic mb-6">For Investors</h2>
            <p className="text-white/40 font-light leading-relaxed mb-8">
              Specializing in short-term rental acquisitions. I analyze the data to find properties with the highest ROI potential in the Airbnb market.
            </p>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Market Yield Analysis</li>
              <li className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Full-Service Management</li>
              <li className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Guest Experience Design</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 p-12 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
          <h2 className="text-3xl font-serif italic mb-6">Ready to start your journey?</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">Whether you're looking to buy, sell, or have your property managed, I'm here to help you achieve your goals.</p>
          <Link to="/contact" className="group relative inline-block px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden">
            <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Book a Call</span>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
            onClick={close}
          >
            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono select-none">
              {lightboxIndex + 1} / {obsidianPhotos.length}
            </div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={full(obsidianPhotos[lightboxIndex])}
              alt={`The Obsidian Villa photo ${lightboxIndex + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="max-w-[calc(100vw-120px)] max-h-[calc(100vh-100px)] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};
