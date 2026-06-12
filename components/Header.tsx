"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState("individual");

  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 md:grid md:grid-cols-3 md:pl-12 md:pr-8 py-4 md:py-6 bg-white border-b shadow-sm">
      {/* LEFT: Logo */}
      <div className="flex items-center ml-10">
        <Image
          src="/vfs-global-logo.svg"
          alt="Logo"
          width={310}
          height={120}
          className="w-[140px] md:w-[250px]"
          priority
        />
      </div>

      {/* RIGHT: Toggle Buttons */}

      <div className="flex justify-center">
        <div className="flex bg-gray-100 rounded-full p-1">
          {/* Individuals */}
          <button
            onClick={() => setActive("individual")}
            className={`px-6 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${
              active === "individual" ? "bg-black text-white" : "text-gray-600"
            }`}
          >
            Individuals
          </button>

          {/* Government */}
          <button
            onClick={() => setActive("government")}
            className={`px-6 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${
              active === "government" ? "bg-black text-white" : "text-gray-600"
            }`}
          >
            Government
          </button>
        </div>
      </div>
      {/* RIGHT: Search + Language */}

      <div className="flex items-center justify-end gap-3 md:gap-5 relative w-full">
        {/* ✅ Search Icon (your image) */}
        <button onClick={() => setSearchOpen(true)}>
          <Image
            src="/search-icon.webp" // <-- your magnifier image
            alt="search"
            width={42}
            height={42}
            className="md:w-[42px] md:h-[42px]"
          />
        </button>

        {/* ✅ Contact Us Icon */}
        <button onClick={() => console.log("Contact clicked")}>
          <Image
            src="/phone-image.png" // your contact image
            alt="contact us"
            width={50}
            height={20}
            className="md:w-[42px] md:h-[42px]"
          />
        </button>

        {/* Language Dropdown */}

        <div className="relative">
          {/* Button */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 border border-gray-300 rounded-full text-xs md:text-sm text-gray-700 bg-white"
          >
            {language}
            <span className="text-xs">{langOpen ? "▴" : "▾"}</span>
          </button>

          {/* Dropdown */}
          {langOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg overflow-hidden z-50">
              {["English", "Français", "Tiếng Việt"].map((lang) => (
                <div
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setLangOpen(false);
                  }}
                  className={`px-4 py-3 text-sm text-black cursor-pointer ${
                    language === lang ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16">
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />

          {/* Search bar */}
          <div className="relative w-[90%] md:w-[70%] max-w-4xl">
            <div className="flex items-center gap-3 bg-white border rounded-full px-4 py-3 md:px-6 md:py-4 shadow-lg">
              <Image
                src="/search-icon.webp"
                alt="Search"
                width={20}
                height={20}
              />

              <input
                type="text"
                placeholder="search vfsglobal.com"
                className="w-full outline-none text-gray-700 text-base md:text-lg"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
