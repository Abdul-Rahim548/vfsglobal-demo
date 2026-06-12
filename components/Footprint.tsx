"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Country = {
  name: string;
  countryCode: string;
  flag: string;
  mapEmbed: string;
  vac: string;
  desc: string;
  visa: string;
  pin: { top: string; left: string };
};

type Region = {
  title: string;
  map: string;
  pin: { top: string; left: string }; // ✅ added
  countries: Country[];
};

const data: Record<string, Region> = {
  India: {
    title: "India",
    map: "/india.png",
    pin: { top: "65%", left: "69%" }, // ✅ region pin
    countries: [
      {
        name: "Algeria",
        countryCode: "DZ",
        flag: "https://flagcdn.com/w40/dz.png",
        mapEmbed: "https://www.google.com/maps?q=Algeria&output=embed",
        vac: "1st Floor, Trade Centre BKC, Mumbai 400051",
        desc: "Visa Application Centre for Algeria — serves applicants from Mumbai.",
        visa: "Visa required — apply at VAC",
        pin: { top: "63%", left: "19%" },
      },
      {
        name: "UAE",
        countryCode: "AE",
        flag: "https://flagcdn.com/w40/ae.png",
        mapEmbed: "https://www.google.com/maps?q=Dubai&output=embed",
        vac: "Dubai - Sheikh Zayed Road",
        desc: "Visa Application Centre for UAE — Dubai office",
        visa: "Visa on arrival",
        pin: { top: "55%", left: "40%" },
      },
    ],
  },

  Netherlands: {
    title: "Netherlands",
    map: "/netherlands.png",
    pin: { top: "35%", left: "52%" }, // ✅ region pin
    countries: [
      {
        name: "Amsterdam",
        countryCode: "NL",
        flag: "https://flagcdn.com/w40/nl.png",
        mapEmbed: "https://www.google.com/maps?q=Amsterdam&output=embed",
        vac: "Amsterdam VAC",
        desc: "Netherlands VAC",
        visa: "Schengen Visa required",
        pin: { top: "45%", left: "48%" },
      },
    ],
  },
};

export default function Footprint() {
  const [region, setRegion] = useState<Region | null>(null);
  const [country, setCountry] = useState<Country | null>(null);
  const [vacOpen, setVacOpen] = useState(false);

  const openRegion = (key: keyof typeof data) => {
    const r = data[key];
    setRegion(r);
    setCountry(r.countries[0]);
    setVacOpen(false);
  };

  return (
    <div className="bg-[#f3f4f6] py-10">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-blue-900 px-4 md:px-10">
        We’ve got exclusive services <br className="hidden md:block" />
        to make your application process a whole lot easier!
      </h2>

      {/* WORLD MAP */}
      <div className="relative w-full max-w-8xl mx-auto mt-10">
        <img src="/map.png" className="w-full" />

        {/* ✅ MULTIPLE REGION PINS */}
        {Object.entries(data).map(([key, regionItem]) => (
          <div
            key={key}
            onClick={() => openRegion(key)}
            className="absolute cursor-pointer"
            style={{
              top: regionItem.pin.top,
              left: regionItem.pin.left,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="relative">
              <div className="absolute w-4 h-2 bg-black/30 rounded-full blur-sm top-[18px] left-1/2 -translate-x-1/2"></div>

              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="w-0 h-0 border-l-[6px] border-transparent border-r-[6px] border-transparent border-t-[10px] border-t-red-600 mx-auto -mt-[2px]" />
            </div>
          </div>
        ))}
      </div>

      {/* PANELS */}
      <AnimatePresence>
        {region && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setRegion(null);
                setVacOpen(false);
              }}
            />

            {/* CONTAINER */}
            <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-10 px-4 md:px-12">
              {/* LEFT PANEL */}
              <motion.div
                className="w-full md:w-[50vw] max-w-[900px] h-[70vh] bg-white rounded-xl shadow-xl flex flex-col md:flex-row relative overflow-hidden"
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
              >
                <button
                  onClick={() => {
                    setRegion(null);
                    setVacOpen(false);
                  }}
                  className="absolute top-4 right-4 z-20 bg-white px-2 py-1 rounded-full shadow"
                >
                  ✕
                </button>

                {/* COUNTRY LIST */}
                <div className="w-full md:w-1/2 p-6 md:p-8 border-r">
                  <h3 className="text-3xl font-bold text-black mb-6">
                    {region.title}
                  </h3>

                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    Click the flag and then the pin to view the address.
                  </p>

                  <div className="space-y-3">
                    {region.countries.map((c) => (
                      <div
                        key={c.name}
                        onClick={() => {
                          setCountry(c);
                          setVacOpen(false);
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                          country?.name === c.name
                            ? "bg-blue-50 border border-blue-200"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <img src={c.flag} className="w-6 h-4" />
                        <span className="text-lg md:text-xl font-medium text-black">
                          {c.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* REGION MAP */}
                <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gray-100">
                  <img
                    src={region.map}
                    className="w-full h-full object-contain"
                  />

                  {country && (
                    <div
                      onClick={() => setVacOpen(true)}
                      className="absolute cursor-pointer"
                      style={{
                        top: country.pin.top,
                        left: country.pin.left,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <span className="absolute h-5 w-5 bg-blue-400 rounded-full animate-ping"></span>
                      <span className="relative h-4 w-4 bg-blue-600 rounded-full"></span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* RIGHT PANEL */}
              <AnimatePresence>
                {vacOpen && country && (
                  <motion.div
                    className="w-full md:w-[50vw] max-w-[900px] h-[70vh] bg-white rounded-xl shadow-xl overflow-hidden relative"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 80, opacity: 0 }}
                  >
                    <button
                      onClick={() => setVacOpen(false)}
                      className="absolute top-4 right-4 z-20 bg-white px-2 py-1 rounded-full shadow"
                    >
                      ✕
                    </button>

                    <iframe src={country.mapEmbed} className="w-full h-[60%]" />

                    <div className="p-6 md:p-8a">
                      <h3 className="text-3xl font-bold text-black mb-6">
                        {country.name}
                      </h3>

                      <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                        {country.desc}
                      </p>

                      <div className="text-lg md:text-xl text-black space-y-4">
                        <p>
                          <span className="font-semibold">Visa:</span>{" "}
                          <span className="text-green-600">{country.visa}</span>
                        </p>

                        <p>
                          <span className="font-semibold">Address:</span>{" "}
                          {country.vac}
                        </p>
                      </div>

                      <button
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg transition"
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps?q=${encodeURIComponent(
                              country.vac,
                            )}`,
                          )
                        }
                      >
                        Open in Google Maps
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
