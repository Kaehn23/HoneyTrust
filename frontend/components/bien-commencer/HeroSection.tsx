"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffdb16]/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
                Comment connecter votre portefeuille au Web3
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Votre aventure dans le Web3 commence aujourd'hui. Pour découvrir ce nouveau monde numérique, 
              il faut d'abord relier votre portefeuille aux applications en ligne.
            </p>
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-[#ffdb16]/20">
              <p className="text-[#ffdb16] font-medium text-2xl">
                Votre sécurité est essentielle. <br />
                <span className="font-semibold underline-offset-4 underline">Conservez votre phrase de sécurité hors d'atteinte d'internet 
                et ne la partagez jamais.</span> <br />
                 En cas de doute, contactez l'assistance client pour de l'aide.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative max-w-md w-full"
          >
            <div className="relative aspect-[9/16] w-full">
              <Image
                src="/assets/wallet-connect.jpg"
                alt="Wallet Connection Interface"
                fill
                className="object-contain rounded-3xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 