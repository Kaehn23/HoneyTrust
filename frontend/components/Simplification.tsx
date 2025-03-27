"use client"
import { motion } from "framer-motion";

const steps = [
  {
    title: "Solution clé en main",
    description: "HoneyTrust propose une solution clé en main pour les apiculteurs, sans connaissances techniques requises. Laissez vous guider par notre équipe pour la création de votre compte.",
  },
  {
    title: "Inscription rapide",
    description: "Création d'un compte sécurisé avec email et mot de passe, sans connaissances techniques requises.",
  },
  {
    title: "Ajout d'un lot en 1 clic",
    description: "L'apiculteur renseigne uniquement les informations essentielles (date de récolte, lieu, type de miel, label).",
  },
  {
    title: "Génération automatique du NFT",
    description: "Le système crée automatiquement un NFT associé au lot sans que l'apiculteur ait besoin de comprendre la blockchain.",
  },
  {
    title: "Impression du QR code",
    description: "Un QR code est généré pour être collé sur chaque pot, permettant aux consommateurs d'accéder aux données.",
  },
];

const Simplification = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
            Simplification pour les Apiculteurs
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffdb16] to-yellow-500/30 hidden md:block" />
          
          {/* Timeline line - Mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffdb16] to-yellow-500/30 md:hidden" />

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center md:gap-16`}
              >
                {/* Mobile timeline dot */}
                <div className="absolute left-4 w-4 h-4 rounded-full bg-[#ffdb16] transform -translate-x-1/2 md:hidden" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} mb-4 md:mb-0 pl-8 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#ffdb16]/50 transition-all duration-300"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-[#ffdb16] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Desktop timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#ffdb16]" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Simplification;