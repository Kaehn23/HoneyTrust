"use client"
import { motion } from "framer-motion";

const advantages = [
  {
    level: "1",
    title: "Transparence totale",
    description: "Traçabilité complète du miel",
  },
  {
    level: "2",
    title: "Simplicité d'utilisation",
    description: "Interface intuitive pour les apiculteurs",
  },
  {
    level: "3",
    title: "Sécurité renforcée",
    description: "Scellés de sécurité pour les QR codes",
  },
  {
    level: "4",
    title: "Modèle économique durable",
    description: "Abonnement tout compris pour les apiculteurs",
  },
];

const CompetitiveAdvantages = () => {
  return (
    <section id="avantages" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
            Avantages Concurrentiels
          </span>
        </motion.h2>

        <div className="relative flex flex-col items-center">
          {/* Pyramid sections */}
          <div className="space-y-6 w-full">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 relative mx-auto"
                style={{
                  width: `${60 + index * 10}%`,
                }}
              >
               

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#ffdb16]/20 hover:border-[#ffdb16]/50 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl text-center font-semibold text-[#ffdb16] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base text-center ">
                    {advantage.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-gray-300 text-md md:text-xl text-center max-w-3xl mx-auto font-semibold"
        >
          Contrairement à nos concurrents qui proposent des solutions complexes et coûteuses, 
          notre plateforme est spécifiquement conçue pour être accessible aux apiculteurs de 
          toutes tailles, avec une interface simplifiée et un modèle économique adapté à leurs besoins.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CompetitiveAdvantages; 