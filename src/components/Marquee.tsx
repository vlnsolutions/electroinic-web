"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Samsung", "Apple", "Google", "Amazon", "Netflix", "Spotify", "Microsoft", "Sony",
  "Samsung", "Apple", "Google", "Amazon", "Netflix", "Spotify", "Microsoft", "Sony"
];

const Marquee = () => {
  // Triple the brands to ensure full coverage during transition
  const brandsTriple = [...brands, ...brands, ...brands];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-24 bg-white overflow-hidden border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-sm font-black text-brand-orange uppercase tracking-[0.4em] mb-4">
            Trusted by 10,000+ Merchant Partners
          </p>
          <div className="w-24 h-1.5 bg-brand-orange rounded-full mx-auto" />
        </motion.div>
      </div>
      
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap space-x-12 px-6"
        >
          {brandsTriple.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[240px] h-28 bg-white rounded-[32px] border-2 border-brand-orange/5 shadow-sm hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/10 transition-all duration-500 group cursor-default"
            >
              <span className="text-2xl font-bold text-gray-800 group-hover:text-brand-orange group-hover:scale-110 transition-all duration-300">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Marquee;
