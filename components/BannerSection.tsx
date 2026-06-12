"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BannerSection() {
  // ✅ Multiple banners
  const banners = [
    {
      img: "/uk-visa.png",
      title: "Apply for your UK visa from the comfort of your home or office",
      subtitle: "With our On Demand Mobile Visa service",
    },
    {
      img: "/uk-visa.png",
      title: "Fast-track visa processing with expert support",
      subtitle: "Get your visa approved faster and easier",
    },
    {
      img: "/uk-visa.png",
      title: "Global visa services at your fingertips",
      subtitle: "Apply anywhere, anytime with ease",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      {/* ✅ HEADING */}
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-900 leading-snug text-center mb-6 md:mb-10">
          We’ve got exclusive services to make your application process a whole
          lot easier!
        </h2>
      </div>

      {/* ✅ BANNER CARD */}
      <div className="max-w-[110rem] mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          {/* ✅ IMAGE */}
          <Image
            src={banners[current].img}
            alt="Visa Service Banner"
            width={1200}
            height={500}
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

          {/* ✅ OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />

          {/* ✅ TEXT CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white max-w-xl">
            <h3 className="text-lg md:text-3xl font-semibold leading-snug">
              {banners[current].title}
            </h3>

            <p className="mt-2 md:mt-4 text-sm md:text-lg text-white/90">
              {banners[current].subtitle}
            </p>

            {/* ✅ BUTTON */}
            <button className="mt-4 md:mt-6 bg-orange-500 hover:bg-orange-600 transition px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium w-fit">
              Book Now
            </button>
          </div>
        </div>

        {/* ✅ DOTS (WORKING) */}
        <div className="flex justify-center mt-4 gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                current === i ? "bg-blue-900 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
``;
