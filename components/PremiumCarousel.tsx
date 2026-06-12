"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

type Slide = {
  eyebrow: string;
  title: string;
  location: string;
  image: string;
};

const slides: Slide[] = [
  {
    eyebrow: "BKK",
    title: "BKK",
    location: "Thailand",
    image: "/bkk.png",
  },
  {
    eyebrow: "Quick Approval",
    title: "Singapore",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Travel Ready",
    title: "Malaysia",
    location: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Smooth Process",
    title: "Thailand",
    location: "Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PremiumCarousel() {
  const [active, setActive] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      next();
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [next]);

  const visibleSlides = useMemo(() => {
    return [-1, 0, 1].map((offset) => {
      const index = (active + offset + slides.length) % slides.length;

      return {
        ...slides[index],
        index,
        offset,
      };
    });
  }, [active]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 45) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section className="w-full overflow-hidden bg-[#f3f4f6] py-6 text-slate-950 sm:py-8">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-3 max-w-[92%] mx-auto text-center text-[22px] font-semibold leading-tight text-blue-900 sm:mb-4 sm:max-w-none sm:text-2xl md:text-4xl"
        >
          Simplify your travel with a hassle-free e-visa for select countries
        </motion.h2>

        <div
          className="relative w-full select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="pointer-events-none absolute inset-y-8 left-0 z-20 w-8 bg-gradient-to-r from-[#f3f4f6] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-8 right-0 z-20 w-8 bg-gradient-to-l from-[#f3f4f6] to-transparent sm:w-16" />

          <div className="relative mx-auto h-[390px] w-full sm:h-[520px] lg:h-[560px]">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleSlides.map((slide) => {
                const isCenter = slide.offset === 0;

                return (
                  <motion.article
                    key={`${slide.index}-${active}`}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.86,
                      x: slide.offset * 260,
                    }}
                    animate={{
                      opacity: isCenter ? 1 : 0.45,
                      scale: isCenter ? 1 : 0.82,
                      x: slide.offset * (isMobile ? 125 : 450),
                      y: isCenter ? 0 : 28,
                      rotate: slide.offset * 2,
                      zIndex: isCenter ? 10 : 3,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.78,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 18,
                      mass: 0.7,
                    }}
                    className="absolute left-1/2 top-1/2 h-[345px] w-[255px] -translate-x-1/2 -translate-y-1/2 sm:h-[470px] sm:w-[385px] lg:h-[515px] lg:w-[430px]"
                  >
                    <div className="relative h-full w-full">
                      {/* outer aircraft wall panel */}
                      <div className="absolute inset-0 rounded-[42%] bg-gradient-to-br from-white via-[#d8d8d8] to-[#a8a8a8] shadow-[18px_24px_45px_rgba(0,0,0,0.22),inset_12px_12px_24px_rgba(255,255,255,0.95),inset_-14px_-14px_28px_rgba(80,80,80,0.22)]" />

                      {/* soft outer highlight */}
                      <div className="absolute inset-[8px] rounded-[41%] border border-white/80 bg-gradient-to-br from-white/80 via-transparent to-black/10" />

                      {/* recessed middle frame */}
                      <div className="absolute inset-[20px] rounded-[39%] bg-gradient-to-br from-[#eeeeee] via-[#cfcfcf] to-[#888888] shadow-[inset_10px_10px_22px_rgba(255,255,255,0.9),inset_-12px_-14px_24px_rgba(0,0,0,0.22)] sm:inset-[30px]" />

                      {/* inner dark groove */}
                      <div className="absolute inset-y-[36px] inset-x-[34px] rounded-[37%] bg-gradient-to-br from-[#8b8b8b] via-[#565656] to-[#303030] shadow-[inset_4px_5px_8px_rgba(0,0,0,0.45)] sm:inset-y-[52px] sm:inset-x-[50px]" />

                      {/* inner light rim */}
                      <div className="absolute inset-y-[43px] inset-x-[39px] rounded-[36%] bg-gradient-to-br from-[#f4f4f4] via-[#c7c7c7] to-[#6f6f6f] shadow-[inset_7px_8px_14px_rgba(255,255,255,0.8),inset_-7px_-8px_14px_rgba(0,0,0,0.22)] sm:inset-y-[60px] sm:inset-x-[58px]" />

                      {/* actual wider window view */}
                      <div className="absolute inset-y-[58px] inset-x-[42px] overflow-hidden rounded-[34%] bg-sky-300 shadow-[inset_0_0_18px_rgba(0,0,0,0.35)] sm:inset-y-[78px] sm:inset-x-[70px] lg:inset-y-[84px] lg:inset-x-[76px]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          draggable="false"
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/45" />

                        {/* glass shine */}
                        <div className="absolute -left-8 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-white/35 via-white/10 to-transparent blur-sm" />

                        {/* top small vent/detail */}
                        <div className="absolute left-1/2 top-5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/35 shadow-[0_2px_6px_rgba(0,0,0,0.25)]" />

                        <div className="absolute left-4 right-4 top-8 text-white sm:left-5 sm:right-5">
                          <span className="inline-flex max-w-full rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium backdrop-blur-md sm:text-xs">
                            {slide.eyebrow}
                          </span>
                        </div>

                        <div className="absolute bottom-5 left-3 right-3 text-white sm:bottom-7 sm:left-5 sm:right-5">
                          <div className="mb-2 flex items-center gap-1.5 text-xs text-white/85 sm:text-sm">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate">{slide.location}</span>
                          </div>

                          <h3 className="truncate text-xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                            {slide.title}
                          </h3>

                          <button
                            type="button"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg transition hover:scale-105 sm:mt-4 sm:px-3.5 sm:py"
                          >
                            Apply now
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-1 flex items-center justify-center gap-2 sm:mt-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
