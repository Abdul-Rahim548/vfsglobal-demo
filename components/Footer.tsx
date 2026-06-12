import TravelSearchBox from "../components/TravelSearchBox";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/footerbg.png')" }}
    >
      {/* ✅ LIGHT OVERLAY (IMPORTANT) */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        {/* ✅ TOP SEARCH SECTION */}
        <div className="py-20 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Where do you want to travel?
          </h2>

          <div className="max-w-5xl mx-auto">
            <TravelSearchBox />
          </div>
        </div>

        {/* ✅ FOOTER LINKS */}
        <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
          {/* ✅ Links (bold + bigger) */}
          <div className="flex flex-wrap gap-6 md:gap-10 text-lg md:text-xl font-bold mb-6 justify-center md:justify-start">
            <a className="hover:text-orange-400 cursor-pointer">About</a>
            <a className="hover:text-orange-400 cursor-pointer">Media</a>
            <a className="hover:text-orange-400 cursor-pointer">Contact</a>
            <a className="hover:text-orange-400 cursor-pointer">FAQs</a>
          </div>

          {/* ✅ Policy (clear & readable) */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-base text-gray-200 mb-8 justify-center md:justify-start font-medium">
            <a className="hover:text-white cursor-pointer">Disclaimer</a>
            <a className="hover:text-white cursor-pointer">Privacy Notice</a>
            <a className="hover:text-white cursor-pointer">Cookie Policy</a>
            <a className="hover:text-white cursor-pointer">
              Terms And Conditions
            </a>
            <a className="hover:text-white cursor-pointer">
              Data Privacy Rights Form
            </a>
            <a className="hover:text-white cursor-pointer">
              Report a Vulnerability
            </a>
          </div>

          {/* ✅ Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/30 pt-6">
            {/* ✅ Bold + readable */}
            <p className="text-base md:text-lg font-semibold text-gray-100 text-center md:text-left">
              © 2025 VFS Global Group. All Rights Reserved.
            </p>

            {/* ✅ Bigger icons */}
            <div className="flex gap-6 text-xl md:text-2xl">
              <FaInstagram className="hover:text-orange-400 cursor-pointer" />
              <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
              <FaTwitter className="hover:text-orange-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
