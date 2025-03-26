"use client"
import { motion } from "framer-motion";

const actors = [
   {
      icon: "🌍",
      title: "Apiculteurs",
      description:
         "Produisent le miel et enregistrent les informations sur la blockchain (récolte, certification, origine). Reçoivent des NFT attestant de l'authenticité de leur production.",
   },
   {
      icon: "⚗️", 
      title: "Laboratoires",
      description:
         "Fournissent des analyses de qualité et de pureté du miel. Les résultats sont enregistrés sur la blockchain par les apiculteurs.",
   },
   {
      icon: "{ }",
      title: "Développeurs", 
      description:
         "Créent l'infrastructure technique et assurent la sécurité et la scalabilité du projet.",
   },
   {
      icon: "🚗",
      title: "Consommateurs",
      description:
         "Scannent un QR code sur le pot de miel pour vérifier son authenticité et accéder à l'ensemble des données enregistrées.",
   },
];

const KeyActors = () => {
   return (
      <section className="py-24 md:py-32 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none rounded-3xl" />

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-8"
         >
            <motion.h2
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-24"
            >
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
                  Acteurs Clés du Projet
               </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {actors.map((actor, index) => (
                  <motion.div
                     key={actor.title}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="backdrop-blur-lg bg-white/5 rounded-2xl p-10 border border-white/10 hover:border-[#ffdb16]/50 transition-all duration-300 group"
                  >
                     <div className="flex flex-col items-center text-center">
                        <div className="text-6xl mb-8 bg-gradient-to-r from-[#ffdb16] to-yellow-500 w-24 h-24 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                           {actor.icon}
                        </div>
                        <h3 className="text-3xl font-semibold text-[#ffdb16] mb-6">
                           {actor.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                           {actor.description}
                        </p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </section>
   );
};

export default KeyActors;
