"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
              Questions Fréquentes
            </span>
          </h2>
          <p className="text-gray-300">
            Consultez notre FAQ pour trouver rapidement des réponses à vos questions.
          </p>
        </motion.div>
        <Link
          href="/#faq"
          className="block w-full md:w-auto mx-auto text-center backdrop-blur-lg bg-black/40 rounded-xl p-6 border border-white/10 hover:border-[#ffdb16]/50 transition-all duration-300"
        >
          <span className="text-[#ffdb16] text-lg font-medium">
            Voir la FAQ →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection; 