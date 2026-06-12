import TravelSearchBox from "../components/TravelSearchBox";
import CarouselSection from "../components/CarouselSection";
import BannerSection from "../components/BannerSection";
import PremiumCarousel from "../components/PremiumCarousel";
import Milestones from "../components/Milestones";
import Certifications from "../components/Certifications";
import Footprint from "../components/Footprint";
export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative h-[45vh] md:h-[65vh] bg-cover bg-top"
        style={{ backgroundImage: "url('/3840-350.png')" }}
      >
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-white/40" />
        {/* ✅ TOP NAV BAR */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-full px-2 md:px-4">
          <nav
            className="
      flex items-center
      justify-start md:justify-center
      gap-6 md:gap-14
      px-6 md:px-14 py-3 md:py-5
      rounded-full
      bg-blue-200/40 backdrop-blur-md shadow-md
      overflow-x-auto md:overflow-visible
      whitespace-nowrap
    "
          >
            <a className="text-orange-500 text-sm md:text-3xl font-semibold">
              HOME
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              ABOUT
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              SOLUTIONS
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              FOOTPRINT
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              INSIGHTS
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              MEDIA
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              CAREERS
            </a>

            <a className="text-black text-sm md:text-3xl hover:text-gray-200 transition">
              SUSTAINABILITY
            </a>
          </nav>
        </div>

        <div className="relative z-10 text-center px-4 pt-10 md:pt-24">
          <h2 className="text-2xl md:text-5xl font-semibold">
            Hi there, which country are you visiting?
          </h2>
        </div>

        <div className="relative z-10 mt-16 md:mt-40 flex justify-center px-4">
          <div className="w-full max-w-7xl">
            {/* ✅ TABS (attached to card) */}
            <div className="w-full flex justify-center">
              <div className="w-full flex bg-white/30 backdrop-blur-md rounded-t-3xl overflow-hidden text-sm md:text-lg shadow-md">
                <button className="flex-1 px-4 md:px-8 py-3 md:py-4 bg-orange-500 text-black font-semibold">
                  Visas and Consular Services
                </button>
                <button className="flex-1 px-4 md:px-8 py-3 md:py-4 text-black opacity-80 hover:opacity-100 font-semibold">
                  E-Visas
                </button>

                <button className="flex-1 px-4 md:px-8 py-3 md:py-4 text-black opacity-80 hover:opacity-100 font-semibold">
                  Passport Services
                </button>

                <button className="flex-1 px-4 md:px-8 py-3 md:py-4 text-black opacity-80 hover:opacity-100 font-semibold">
                  Attestation & Govt. Services
                </button>

                <button className="flex-1 px-4 md:px-8 py-3 md:py-4 text-black opacity-80 hover:opacity-100 font-semibold">
                  Tourism Services
                </button>
              </div>
            </div>

            {/* ✅ MAIN CARD */}

            <TravelSearchBox />
          </div>
        </div>
      </section>
      <CarouselSection />
      <BannerSection />
      <PremiumCarousel />
      <Milestones />
      <Certifications />
      <Footprint />
    </main>
  );
}
