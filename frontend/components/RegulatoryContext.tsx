"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const regulations = [
  {
    title: "Directive Miel Européenne",
    description: "Adoptée en décembre 2023, elle garantit davantage de tracabilité, de qualité et de transparence, notamment par l'obligation d'étiqueter l'origine géographique des miels de mélange.",
  },
  {
    title: "Labels et Certifications", 
    description: "IGP, AOP, Label Rouge, Agriculture Biologique (AB), Eurofeuille... Notre solution renforce leur fiabilité et leur transparence sans les remplacer.",
  },
  {
    title: "Conformité RGPD",
    description: "Notre solution respecte les réglementations sur la protection des données personnelles et la sécurité des informations.",
  },
];

const RegulatoryContext = () => {
  return (
    <section className="py-24 relative overflow-hidden"
    id="lois-reglementation"
    >
      {/* Background image for desktop */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/assets/honeycomb-bg.jpg"
          alt="Honeycomb background"
          fill
          className="object-cover opacity-70 rounded-3xl"
          priority
        />
      </div>     
      
      {/* Background image for mobile */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/assets/honeycomb-bg.jpg"
          alt="Honeycomb background"
          fill
          className="object-cover opacity-70 rounded-3xl"
          priority
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
            Contexte Réglementaire
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full min-h-[300px] backdrop-blur-lg bg-black/40 rounded-xl p-10 border border-white/10 hover:border-[#ffdb16]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-[#ffdb16] mb-6">
                  {regulation.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {regulation.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RegulatoryContext;