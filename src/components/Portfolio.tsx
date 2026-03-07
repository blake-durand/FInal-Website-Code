import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const THOMAS_VIDEO = "https://res.cloudinary.com/dsekw4xln/video/upload/v1772921433/Thomas-Website-compressed.mp4";

// All 34 Cloudinary photos for 2988 Solimar Beach, sorted 1–34
const mountainRetreatPhotos = [
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659686/1_l3rttn.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659686/2_ubz5cq.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659719/3_oixyjw.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659698/4_tysmg7.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659710/5_m6bqoe.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659712/6_dklycg.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659718/7_os51iu.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659708/8_baovpi.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659731/9_zwscn8.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659742/10_oh84zz.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659745/11_iweetb.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659747/12_navdlc.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659751/13_qbdrjp.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659749/14_iksogz.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659766/15_j0q7fo.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659768/16_j5hrtx.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659780/17_ipyb4s.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659782/18_hwmlk0.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659775/19_amitjs.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659785/20_pp0rsz.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659801/21_eyarw8.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659787/22_v4vcxn.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659799/23_ttlihg.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659821/24_ggpirh.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659828/25_ffz8sk.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659796/26_un1fwp.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659822/27_izajfs.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659838/28_q7zs4m.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659826/29_vla5o0.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659812/30_fdyxya.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659819/31_mxfvot.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659841/32_grbmoz.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659838/33_zv3siu.jpg",
  "https://res.cloudinary.com/dsekw4xln/image/upload/v1772659825/34_m2f5hc.jpg",
];

// All 50 Cloudinary photos for Kihei Akahi C417, sorted 1–50
const glassHousePhotos = [
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

const portfolio = [
  {
    title: "Dee's Maui Retreat",
    category: "Property Management",
    image: thumb(glassHousePhotos[0]),
    photos: glassHousePhotos,
  },
  {
    title: "Thomas DeLauer",
    category: "Media Production",
    image: null,
    photos: null,
    videoUrl: THOMAS_VIDEO,
  },
  {
    title: "Solimar Beachfront Home",
    category: "Real Estate",
    image: thumb(mountainRetreatPhotos[0]),
    photos: mountainRetreatPhotos,
  }
];

export const Portfolio = () => {
  const [activePhotos, setActivePhotos] = useState<string[] | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openGallery = (photos: string[]) => {
    setActivePhotos(photos);
    setPhotoIndex(0);
  };

  const close = useCallback(() => setActivePhotos(null), []);
  const prev  = useCallback(() => setPhotoIndex(i => activePhotos ? (i - 1 + activePhotos.length) % activePhotos.length : 0), [activePhotos]);
  const next  = useCallback(() => setPhotoIndex(i => activePhotos ? (i + 1) % activePhotos.length : 0), [activePhotos]);

  useEffect(() => {
    if (!activePhotos) return;
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
  }, [activePhotos, close, prev, next]);

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Proof of Work</span>
            <h2 className="text-3xl md:text-6xl font-serif italic">Selected <span className="text-white/40">Portfolio.</span></h2>
          </div>
          <Link to="/media" className="text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors border-b border-white/20 pb-2">
            View All Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {portfolio.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 cursor-pointer"
                onClick={item.videoUrl ? () => setActiveVideo(item.videoUrl!) : undefined}
              >
                {item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={item.image!}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 pointer-events-none flex items-end justify-start p-4">
                  {item.photos && (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] uppercase tracking-widest text-white/90 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Images size={11} /> View {item.photos.length} Photos
                    </span>
                  )}
                </div>

                {/* Invisible click target for photo gallery */}
                {item.photos && (
                  <button
                    onClick={() => openGallery(item.photos!)}
                    className="absolute inset-0 z-10"
                    aria-label={`View all ${item.photos.length} photos`}
                  />
                )}
              </div>
              <h3 className="text-xl font-serif italic mb-1">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={() => setActiveVideo(null)}
            >
              <X size={18} />
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="max-h-[85vh] max-w-[90vw] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {activePhotos && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92 backdrop-blur-md"
            onClick={close}
          >
            {/* Counter */}
            <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono select-none">
              {photoIndex + 1} / {activePhotos.length}
            </div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Desktop side arrows */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="hidden md:block absolute left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={photoIndex}
              src={full(activePhotos[photoIndex])}
              alt={`Photo ${photoIndex + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-[calc(100vw-32px)] md:max-w-[calc(100vw-120px)] max-h-[calc(100vh-160px)] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            {/* Desktop side arrow */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="hidden md:block absolute right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Mobile bottom arrows */}
            <div className="flex md:hidden items-center gap-8 mt-6" onClick={e => e.stopPropagation()}>
              <button onClick={prev} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white" aria-label="Previous photo">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white" aria-label="Next photo">
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
