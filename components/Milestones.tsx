"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2001",
    kicker: "Foundation",
    title: "A bold beginning",
    copy: "The journey started with a clear vision...",
    image: "/vfs-image.jpg",

    // ✅ ADD THIS
    stats: [
      { value: "71", label: "Client Governments" },
      { value: "4105", label: "Application Centres" },
      { value: "168", label: "Countries of Operation" },
      { value: "542.42m", label: "Applications Processed*" },
      { value: "17756", label: "Employees" },
    ],
    points: [
      "World’s Largest Visa Application Centre in Dubai achieves prestigious LEED v4 ID+C Gold Certification",
      "Official Mozambique eVisa platform powered by VFS Global goes live as part of the Visit Mozambique initiative",
    ],
  },

  {
    year: "2004-05",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2007",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2008",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2009",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2010",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2011",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2012",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2013",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2014",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2015",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2016",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2017",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2018",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2019",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2020",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2021",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2022",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2023",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2024",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2025",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
  {
    year: "2026",
    kicker: "Momentum",
    title: "Scaling with purpose",
    copy: "New partnerships...",
    image: "...",

    // ✅ DIFFERENT DATA
    stats: [
      { value: "80", label: "Client Governments" },
      { value: "4200", label: "Application Centres" },
      { value: "175", label: "Countries of Operation" },
      { value: "560m", label: "Applications Processed*" },
      { value: "18500", label: "Employees" },
    ],
    points: [
      "Expansion into new global markets",
      "Digital transformation initiatives launched",
    ],
  },
];
``;
const yearColors: Record<string, string> = {
  "2001": "from-orange-50 to-orange-100",
  "2004-05": "from-blue-50 to-blue-100",
  "2007": "from-indigo-50 to-indigo-100",
  "2008": "from-purple-50 to-purple-100",
  "2009": "from-pink-50 to-pink-100",
  "2010": "from-green-50 to-green-100",
  "2011": "from-emerald-50 to-emerald-100",
  "2012": "from-cyan-50 to-cyan-100",
  "2013": "from-sky-50 to-sky-100",
  "2014": "from-teal-50 to-teal-100",
  "2015": "from-lime-50 to-lime-100",
  "2016": "from-amber-50 to-amber-100",
  "2017": "from-rose-50 to-rose-100",
  "2018": "from-fuchsia-50 to-fuchsia-100",
  "2019": "from-violet-50 to-violet-100",
  "2020": "from-gray-100 to-gray-200",
  "2021": "from-blue-50 to-indigo-100",
  "2022": "from-cyan-50 to-blue-100",
  "2023": "from-orange-50 to-yellow-100",
  "2024": "from-green-50 to-emerald-100",
  "2025": "from-purple-50 to-indigo-100",
  "2026": "from-pink-50 to-rose-100",
};
``;

export default function PremiumMilestonesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(milestones.length - 1);

  const [isPaused, setIsPaused] = useState<boolean>(false);
  const yearListRef = useRef<HTMLDivElement | null>(null);
  const activeButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeMilestone = milestones[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, milestones.length]);

  useEffect(() => {
    const container = yearListRef.current;
    const activeButton = activeButtonRefs.current[activeIndex];

    if (!container || !activeButton) return;

    requestAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      const offset =
        buttonRect.top -
        containerRect.top -
        container.clientHeight / 2 +
        buttonRect.height / 2;

      const targetScrollTop = container.scrollTop + offset;

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    });
  }, [activeIndex]);

  const progressHeight = useMemo(() => {
    return `${((activeIndex + 1) / milestones.length) * 100}%`;
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? milestones.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % milestones.length);
  };

  return (
    <section className="min-h-screen w-full overflow-hidden bg-[#f3f4f6] px-4 py-10 sm:py-14 lg:py-16 text-slate-950 sm:px-6 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-3 max-w-[92%] mx-auto text-center text-[22px] font-semibold leading-tight text-blue-900 sm:mb-4 sm:max-w-none sm:text-2xl md:text-4xl"
      >
        Milestones
      </motion.h2>

      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-12">
        <div className="flex min-h-[calc(100vh-10rem)] items-center">
          <div className="grid w-full gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside
              className={`relative overflow-hidden rounded-[2rem] border border-slate-200/80 
  bg-gradient-to-br ${
    yearColors[activeMilestone.year] || "from-slate-50 to-slate-100"
  } shadow-2xl shadow-slate-300/30 transition-all duration-500`}
            >
              <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-white/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-slate-100/80 blur-3xl" />

              <div className="relative p-5 sm:p-6">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-amber-600">
                      <Sparkles className="h-3.5 w-3.5" />
                      Timeline
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      Milestones
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-[#f7f8fa] text-slate-700 shadow-sm transition hover:border-amber-300 hover:bg-white hover:text-amber-700"
                      aria-label="Previous milestone"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-[#f7f8fa] text-slate-700 shadow-sm transition hover:border-amber-300 hover:bg-white hover:text-amber-700"
                      aria-label="Next milestone"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-[22px] top-0 h-full w-px overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      className="w-full rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-cyan-400"
                      animate={{ height: progressHeight }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>

                  <div
                    ref={yearListRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="max-h-[320px] sm:max-h-[420px] lg:max-h-[560px] space-y-3 overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:rgba(217,119,6,0.75)_rgba(226,232,240,1)]"
                  >
                    {milestones.map((item, index) => {
                      const isActive = index === activeIndex;

                      return (
                        <button
                          key={item.year}
                          ref={(element) => {
                            activeButtonRefs.current[index] = element;
                          }}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`group relative flex w-full items-center gap-4 rounded-2xl px-2 py-3 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-white shadow-lg shadow-slate-200/70"
                              : "hover:bg-white/70"
                          }`}
                        >
                          <span
                            className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isActive
                                ? "border-amber-400 bg-gradient-to-br from-amber-200 to-amber-500 text-white shadow-lg shadow-amber-300/50"
                                : "border-slate-200 bg-[#f7f8fa] text-slate-400 shadow-sm group-hover:border-amber-300 group-hover:bg-white group-hover:text-amber-600"
                            }`}
                          >
                            <span className="h-2.5 w-2.5 rounded-full bg-current" />
                          </span>

                          <span className="min-w-0">
                            <span
                              className={`block text-xl font-semibold tracking-tight transition-colors ${
                                isActive
                                  ? "text-slate-950"
                                  : "text-slate-400 group-hover:text-slate-800"
                              }`}
                            >
                              {item.year}
                            </span>
                            <span
                              className={`mt-0.5 block truncate text-xs uppercase tracking-[0.2em] transition-colors ${
                                isActive
                                  ? "text-amber-700"
                                  : "text-slate-300 group-hover:text-slate-500"
                              }`}
                            >
                              {item.kicker}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            <main
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`relative flex items-center justify-center min-h-[520px] sm:min-h-[620px] overflow-hidden 
rounded-[2.25rem] border border-slate-200/80 
bg-gradient-to-br ${
                yearColors[activeMilestone.year] || "from-slate-50 to-slate-100"
              } shadow-2xl shadow-slate-300/30 px-8 py-10 transition-all duration-500`}
            >
              {/* Background soft map feel */}
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/world-map-light.svg')] bg-center bg-no-repeat bg-contain" />

              <div className="relative z-10 w-full max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMilestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-10 grid gap-10 sm:gap-12 lg:grid-cols-[420px_1fr] items-center"
                  >
                    {/* ✅ LEFT STATS BOX */}

                    <div
                      className={`relative rounded-2xl border border-slate-300 bg-gradient-to-br ${
                        yearColors[activeMilestone.year] ||
                        "from-white to-slate-100"
                      } p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-sm mx-auto`}
                    >
                      <div className="space-y-4">
                        {activeMilestone.stats?.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-5 border-b pb-4 last:border-none"
                          >
                            <span className="w-20 text-left text-2xl sm:text-3xl font-bold text-slate-900">
                              {item.value}
                            </span>

                            <div className="relative flex-1 pl-4">
                              {/* vertical dot line */}
                              <span className="absolute left-0 top-2 h-full w-px bg-slate-300" />
                              <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-slate-400" />

                              <span className="text-sm sm:text-base text-slate-700 leading-snug">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* footnote */}
                      <div className="mt-6 border-t pt-4 text-xs text-slate-500">
                        <p>^Statistics stated are as on 31 March 2026</p>
                        <p>
                          *Cumulative figures in million (m), since inception
                        </p>
                      </div>
                    </div>

                    {/* ✅ RIGHT BULLET CONTENT */}
                    <div className="flex items-center justify-center">
                      <ul className="space-y-6 sm:space-y-7 text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed max-w-2xl">
                        {activeMilestone.points?.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 sm:gap-5"
                          >
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-900 shrink-0"></span>
                            <span className="font-medium text-slate-800">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
