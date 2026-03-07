import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Video, Film, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const deeMauiPhotos = [
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

const mediaWork = [
  {
    title: "Kihei, Maui",
    type: "Photography",
    image: "https://res.cloudinary.com/dsekw4xln/image/upload/v1772577867/1_kuvgei.jpg",
    hasGallery: true,
  },
  {
    title: "Brand Storytelling",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
    hasGallery: false,
    videoUrl: "https://res.cloudinary.com/dsekw4xln/video/upload/v1772862324/A-Cam-Take2-compressed_uvmgsm.mp4",
  },
  {
    title: "Lifestyle Campaign",
    type: "Photography",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000",
    hasGallery: false,
  },
  {
    title: "Modern Interior Series",
    type: "Photography",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
    hasGallery: false,
  }
];

export const Media = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!galleryOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setCurrentPhoto(p => Math.max(0, p - 1));
      if (e.key === 'ArrowRight') setCurrentPhoto(p => Math.min(deeMauiPhotos.length - 1, p + 1));
      if (e.key === 'Escape') setGalleryOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [galleryOpen]);

  const openGallery = () => {
    setCurrentPhoto(0);
    setGalleryOpen(true);
  };

  const openVideo = (url: string) => {
    setActiveVideoUrl(url);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
    setActiveVideoUrl(null);
  };

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
              onClick={work.hasGallery ? openGallery : work.videoUrl ? () => openVideo(work.videoUrl!) : undefined}
            >
              {work.videoUrl ? (
                <video
                  src={work.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              )}
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

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeVideo}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={closeVideo}
            >
              <X size={18} />
            </button>
            <video
              src={activeVideoUrl}
              controls
              autoPlay
              className="max-h-[85vh] max-w-[90vw] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setGalleryOpen(false)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={() => setGalleryOpen(false)}
            >
              <X size={18} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest uppercase">
              {currentPhoto + 1} / {deeMauiPhotos.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setCurrentPhoto(p => Math.max(0, p - 1)); }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <motion.img
              key={currentPhoto}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={deeMauiPhotos[currentPhoto]}
              alt={`Dee's Maui Retreat ${currentPhoto + 1}`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setCurrentPhoto(p => Math.min(deeMauiPhotos.length - 1, p + 1)); }}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};
