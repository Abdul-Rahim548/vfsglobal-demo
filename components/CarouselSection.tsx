"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CarouselSection() {
  const items = [
    {
      title: "Form Filling",
      image: "/form-filling.png",
    },
    {
      title: "SMS Alert Services",
      image: "/sms-alert-services.png",
    },
    {
      title: "Courier Services",
      image: "/courier-services.png",
    },
    {
      title: "Language Solutions",
      image: "/language-solutions.png",
    },
    {
      title: "Courier Services",
      image: "/courier-services.png",
    },
    {
      title: "Language Solutions",
      image: "/language-solutions.png",
    },
    {
      title: "Courier Services",
      image: "/courier-services.png",
    },
    {
      title: "Language Solutions",
      image: "/language-solutions.png",
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  // Get visible items
  const start = page * itemsPerPage;
  const visibleItems = items.slice(start, start + itemsPerPage);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, totalPages]);

  return (
    <section
      className="py-12 bg-gray-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ✅ CARDS */}
      <div className="overflow-x-auto md:overflow-hidden scroll-smooth">
        <div
          className="flex md:transition-transform md:duration-700 md:ease-in-out md:transform snap-x snap-mandatory"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => {
            const start = i * itemsPerPage;
            const group = items.slice(start, start + itemsPerPage);

            return (
              <div
                key={i}
                className="flex md:flex min-w-max md:min-w-full justify-start md:justify-center items-center gap-4 sm:gap-6 md:gap-40 px-2 md:px-4 snap-x md:snap-cente"
              >
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-[40px] p-6 md:p-8 min-w-[75%] sm:min-w-[60%] md:min-w-0 md:w-full max-w-[420px] h-[260px] md:h-[300px] text-center flex flex-col justify-center items-center flex-shrink-0 snap-start"
                  >
                    {/* Image */}
                    <div className="h-40 flex items-center justify-center overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={150}
                        height={120}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-black">
                      {item.title}
                    </h3>

                    {/* CTA */}
                    <p className="mt-2 text-lg text-orange-500 font-medium cursor-pointer hover:underline">
                      Buy now
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      {/* ✅ DOTS */}
      <div className="flex justify-center mt-4 md:mt-6 gap-2 md:gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPage(i);
              setPaused(true);

              // resume auto-scroll after a delay
              setTimeout(() => setPaused(false), 5000);
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              page === i
                ? "bg-black scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
