"use client"
import { motion } from "framer-motion";

const MarketContext = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto rounded-2xl mt-8 bg-gray-800">
    <section className="py-16 px-4 md:px-8">
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-[#ffdb16]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Le Contexte du Marché
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <motion.div 
          className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-[#ffdb16]/20 hover:border-[#ffdb16]/40 transition-all duration-300"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#ffdb16] flex items-center justify-center text-black font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold text-[#ffdb16]">Demande de transparence</h3>
          </div>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
            72% des Français sont plus attentifs à l'origine des produits alimentaires et 76% examinent désormais leur composition, reflétant une demande accrue de transparence.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-[#ffdb16]/20 hover:border-[#ffdb16]/40 transition-all duration-300"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#ffdb16] flex items-center justify-center text-black font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold text-[#ffdb16]">Marché en expansion</h3>
          </div>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
            Le marché mondial de la traçabilité alimentaire était évalué à 16,58 milliards de dollars en 2023 et devrait croître de plus de 8% entre 2024 et 2032.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="group bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-[#ffdb16]/20 hover:border-[#ffdb16]/40 transition-all duration-300"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#ffdb16] flex items-center justify-center text-black font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold text-[#ffdb16]">Enjeu de santé publique</h3>
          </div>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
            Selon l'OMS, 600 millions de personnes souffrent chaque année de maladies d'origine alimentaire dues à la consommation de produits contaminés.
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default MarketContext;