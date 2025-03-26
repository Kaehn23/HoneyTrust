"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-white">
        Decouvrez notre solution de traçabilité
      </h2>
      <Link
        href="#faq"
        className="inline-block bg-[#ffdb16] text-black px-8 py-3 rounded-full hover:bg-[#ffdb16]/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,219,22,0.5)]"
      >
        En savoir plus
      </Link>
    </motion.section>
  );
};

export default CallToAction; 