"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  return (
    <section className="w-full px-6 py-10 bg-[#f3f4f6]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3 max-w-[92%] text-left text-[22px] font-semibold leading-tight text-blue-900 sm:mb-4 sm:max-w-none sm:text-2xl md:text-4xl"
          >
            Rewards & Recognition Certifications
          </motion.h2>
        </div>

        {/* Right Certificates */}
        <div className="md:col-span-2 text-left">
          {/* Add your certificates here */}
          <p>Certificate 1</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
