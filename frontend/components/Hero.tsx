"use client"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-[#ffdb16] pb-4">
        HoneyTrust
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
        Une solution transparente révolutionnaire garantissant l'origine et
        l'authenticité du miel. Une offre innovante pour les apiculteurs
        et les consommateurs soucieux de la qualité et de l'origine de
        leurs produits.
      </p>
    </motion.section>
  );
};

export default Hero; 