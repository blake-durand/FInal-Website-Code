import { useRef, type CSSProperties } from 'react';
import { useAnimationFrame } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 0,
    title: "Perfect Maui Escape",
    text: "Absolutely incredible property. Blake was the perfect host — responsive, thoughtful, and genuinely cared about our experience. The views were breathtaking and the space was immaculate.",
    author: "Sarah M.",
    date: "January 2025",
    initials: "SM",
    color: "#6366f1",
  },
  {
    id: 1,
    title: "Stunning Property, Amazing Host",
    text: "One of the best Airbnb experiences we've ever had. The property was spotless, beautifully designed, and had everything we could possibly need. Blake's attention to detail is unmatched.",
    author: "James K.",
    date: "November 2024",
    initials: "JK",
    color: "#ec4899",
  },
  {
    id: 2,
    title: "Best Airbnb We've Ever Stayed",
    text: "We've stayed in many Airbnbs, but this one truly stood out. The home was pristine, the location perfect, and Blake made us feel completely at ease from the moment we arrived.",
    author: "Olivia T.",
    date: "October 2024",
    initials: "OT",
    color: "#f59e0b",
  },
  {
    id: 3,
    title: "Hidden Paradise in Maui",
    text: "An absolutely magical place. Blake went above and beyond to ensure every aspect of our stay was perfect. The property photos don't do it justice — it was even more beautiful in person.",
    author: "Michael R.",
    date: "September 2024",
    initials: "MR",
    color: "#10b981",
  },
  {
    id: 4,
    title: "Flawless from Start to Finish",
    text: "From booking to checkout, everything was seamless. Blake communicated every detail clearly and the property exceeded all our expectations. We've already booked our return trip.",
    author: "Emma L.",
    date: "August 2024",
    initials: "EL",
    color: "#3b82f6",
  },
  {
    id: 5,
    title: "Absolutely Magical Stay",
    text: "This is the kind of place that ruins all future vacations — nothing will compare! Blake's professionalism and warmth made the experience unforgettable. Already looking forward to coming back.",
    author: "Rachel H.",
    date: "July 2024",
    initials: "RH",
    color: "#ef4444",
  },
];

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
    } else {
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

    // Update progress dashes when active review changes
    const activeIndex = ((Math.round(currentOffset) % N) + N) % N;
    if (activeIndex !== lastActiveRef.current) {
      lastActiveRef.current = activeIndex;
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
            className="absolute w-[240px] bg-white/[0.03] border border-white/8 rounded-2xl p-5 will-change-transform select-none"
            style={getInitialStyle(i)}
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
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                style={{ backgroundColor: review.color }}
              >
                {review.initials}
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
    </section>
  );
};
