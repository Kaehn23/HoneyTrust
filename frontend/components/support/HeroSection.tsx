"use client"
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffdb16]/10 to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
            Support HoneyTrust
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Notre équipe est là pour vous aider. Choisissez le mode de contact qui vous convient le mieux.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection; 