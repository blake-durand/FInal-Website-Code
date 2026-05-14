import { useRef, useState, useEffect, type CSSProperties, type MouseEvent } from 'react';
import { useAnimationFrame, motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';

const REVIEWS = [
  {
    id: 0,
    title: "Perfect Maui Escape",
    text: "The place we amazing - had all the amenities listed and more (beach chairs, sand castle materials, towels, etc.) Blake was an amazing, responsive host. I communicated that my bf has light sensitivity and Blake proactively installed blinds in the bedroom for us. We'll be coming back here when we visit Maui again :).",
    author: "May",
    date: "February 2026",
    initials: "SM",
    color: "#6366f1",
  },
  {
    id: 1,
    title: "Stunning Property, Amazing Host",
    text: "Great quite place to stay. Easy access to beach & pool. Lots of extras provided. Very clean. Great communication with Blake answering any questions we had. Would stay here again.",
    author: "Cathy",
    date: "January 2026",
    initials: "JK",
    color: "#ec4899",
  },
  {
    id: 2,
    title: "Best Airbnb We've Ever Stayed",
    text: "Blake was a fantastic host. He is very friendly, quick with communication and aims to make his guests as comfortable as possible. He ordered a coffee grinder for us and had 2 cozy blankets delivered during our stay. The condo is clean with a comfortable bed and couch. The kitchen has everything you need with new pots and pans, plenty of quality knives and a large set of storage containers. The fridge even has an ice cube maker with water dispenser. Blake provided ample supplies (plastic wrap, foil, olive oil, laundry soap, quality body soap and shampoo and cleaning supplies to name a few). There are 6 pools to choose from with close proximity to the condo. The pickle ball courts are in good condition and were available during our stay. Plenty of parking.",
    author: "Cherie",
    date: "January 2025",
    initials: "OT",
    color: "#f59e0b",
  },
  {
    id: 3,
    title: "Hidden Paradise in Maui",
    text: "Blake is the most responsible host！He will always be concerned about your stay and need，no matter what kind of questions you have, he will reply quickly，and very easy to communicate.Nice host!!.",
    author: "Xiao",
    date: "February 2025",
    initials: "MR",
    color: "#10b981",
  },
  {
    id: 4,
    title: "Flawless from Start to Finish",
    text: "We stayed here for three days and really enjoyed it. The apartment was quiet, clean, and well-equipped, with convenient parking. The room was bright and comfortable, very tidy, and stocked with all the essentials. The location is great — just a few minutes’ walk to the beach, and the surroundings are beautiful. The host was responsive and easy to communicate with. Highly recommend!",
    author: "Miro",
    date: "August 2024",
    initials: "EL",
    color: "#3b82f6",
  },
  {
    id: 5,
    title: "Absolutely Magical Stay",
    text: "I thoroughly enjoyed my stay here! The apartment is beautifully designed and renovated. True to the photos, and even better in person. Very aesthetically pleasing, but also warm and inviting. When I arrived, it was clean and smelled great. Blake was super kind and helpful throughout the month whenever I had an inquiry. The complex is very safe with a security gate, and it was generally quiet and peaceful. Multiple pools/spas are conveniently located, and the grounds are kept very nice. The area is centrally located in Palm Springs. Blake was a thoughtful host and communicator, and the apartment included all the basic amenities needed for a longer stay. I hope to go back - Highly recommend!",
    author: "Chelsea",
    date: "December 2024",
    initials: "RH",
    color: "#ef4444",
  },
];

type Review = typeof REVIEWS[number];

const AVATAR_COLORS = ["#6366f1","#ec4899","#f59e0b","#10b981","#3b82f6","#ef4444"];

const N = REVIEWS.length;
const SPEED = 0.00012; // card-units per ms (~8s per card)

// Normalized position in [-N/2, N/2] for a given card index and current offset
function getPos(index: number, offset: number): number {
  const raw = ((index - offset) % N + N) % N;
  return raw > N / 2 ? raw - N : raw;
}

// Arc-based transform: cards fan out along a parabolic arc
function cardTransform(pos: number) {
  const absPos = Math.abs(pos);
  return {
    x: pos * 210,
    y: pos * pos * 22,
    rotate: pos * 12,
    scale: Math.max(0.5, 1 - absPos * 0.08),
    opacity: Math.max(0, 1 - absPos * 0.22),
    zIndex: Math.round(20 - absPos * 3),
  };
}

function getInitialStyle(index: number): CSSProperties {
  const pos = getPos(index, 0);
  const { x, y, rotate, scale, opacity, zIndex } = cardTransform(pos);
  return {
    transform: `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
    opacity,
    zIndex,
    transformOrigin: 'center center',
  };
}

export const ReviewsCarousel = () => {
  const offsetRef = useRef(0);
  const targetRef = useRef(0);
  const isManualRef = useRef(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastActiveRef = useRef(0);
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  useEffect(() => {
    if (!activeReview) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveReview(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeReview]);

  useAnimationFrame((_, delta) => {
    if (isManualRef.current) {
      const diff = targetRef.current - offsetRef.current;
      if (Math.abs(diff) < 0.008) {
        offsetRef.current = targetRef.current;
        isManualRef.current = false;
      } else {
        // Frame-rate independent exponential ease
        const lerp = 1 - Math.exp(-delta / 100);
        offsetRef.current += diff * lerp;
      }
    } else if (!activeReview) {
      offsetRef.current += delta * SPEED;
      targetRef.current = offsetRef.current;
    }

    const currentOffset = offsetRef.current;

    // Update card transforms directly — bypasses React re-renders for 60fps smoothness
    REVIEWS.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;
      const pos = getPos(i, currentOffset);
      const { x, y, rotate, scale, opacity, zIndex } = cardTransform(pos);
      el.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(zIndex);
    });

    // Update progress dashes + card highlight when active review changes
    const activeIndex = ((Math.round(currentOffset) % N) + N) % N;
    if (activeIndex !== lastActiveRef.current) {
      // Unhighlight previous center card
      const prevEl = cardRefs.current[lastActiveRef.current];
      if (prevEl) {
        prevEl.style.borderColor = 'rgba(255,255,255,0.08)';
        prevEl.style.boxShadow = 'none';
      }
      lastActiveRef.current = activeIndex;
      // Highlight new center card
      const nextEl = cardRefs.current[activeIndex];
      if (nextEl) {
        nextEl.style.borderColor = 'rgba(255,255,255,0.35)';
        nextEl.style.boxShadow = '0 0 20px rgba(255,255,255,0.07)';
      }
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.width = i === activeIndex ? '24px' : '12px';
        dot.style.opacity = i === activeIndex ? '1' : '0.25';
      });
    }
  });

  const goNext = () => {
    targetRef.current = Math.round(offsetRef.current) + 1;
    isManualRef.current = true;
  };

  const goPrev = () => {
    targetRef.current = Math.round(offsetRef.current) - 1;
    isManualRef.current = true;
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-20 px-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Airbnb Reviews</span>
        <h2 className="text-3xl md:text-5xl font-serif italic">
          What Guests <span className="text-white/40">Are Saying.</span>
        </h2>
      </div>

      {/* Arc carousel */}
      <div className="relative h-[340px] flex items-start justify-center">
        {REVIEWS.map((review, i) => (
          <div
            key={review.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute w-[240px] bg-white/[0.03] border border-white/8 rounded-2xl p-5 will-change-transform select-none cursor-pointer hover:border-white/20 transition-[border-color]"
            style={getInitialStyle(i)}
            onClick={() => setActiveReview(review)}
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={11} fill="#f59e0b" strokeWidth={0} />
              ))}
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-5">{review.text}</p>

            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
              >
                {review.author[0]}
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium leading-tight">{review.author}</p>
                <p className="text-white/35 text-xs">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/35 transition-colors cursor-pointer"
          aria-label="Previous review"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {REVIEWS.map((_, i) => (
            <div
              key={i}
              ref={(el) => { dotRefs.current[i] = el; }}
              className="h-[2px] bg-white rounded-full"
              style={{
                width: i === 0 ? '24px' : '12px',
                opacity: i === 0 ? 1 : 0.25,
                transition: 'width 0.3s ease, opacity 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/35 transition-colors cursor-pointer"
          aria-label="Next review"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      {/* Full review modal */}
      <AnimatePresence>
        {activeReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
            onClick={() => setActiveReview(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-md w-full bg-zinc-900 border border-white/10 rounded-2xl p-8"
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/60 hover:text-white"
              >
                <X size={14} />
              </button>

              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="#f59e0b" strokeWidth={0} />
                ))}
              </div>

              <p className="text-white/75 text-sm leading-relaxed mb-6">{activeReview.text}</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                  style={{ backgroundColor: AVATAR_COLORS[REVIEWS.findIndex(r => r.id === activeReview.id) % AVATAR_COLORS.length] }}
                >
                  {activeReview.author[0]}
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium leading-tight">{activeReview.author}</p>
                  <p className="text-white/40 text-xs">{activeReview.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
