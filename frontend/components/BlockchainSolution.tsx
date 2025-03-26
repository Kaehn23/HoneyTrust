"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const BlockchainSolution = () => {
  const steps = [
    {
      number: 1,
      title: "Création du NFT",
      description: "Chaque lot de miel reçoit un NFT contenant des informations infalsifiables sur son origine, sa production et ses certifications."
    },
    {
      number: 2,
      title: "Enregistrement des données",
      description: "Les apiculteurs et laboratoires enregistrent les informations sur la blockchain, garantissant leur authenticité et leur immuabilité."
    },
    {
      number: 3,
      title: "Vérification par QR code",
      description: "Les consommateurs scannent un QR code sécurisé sur le pot pour accéder à l'ensemble des données enregistrées sur la blockchain."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-[#ffdb16]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Notre Solution<br />Blockchain
            </motion.h2>

            <div className="space-y-8 relative">
              {/* Yellow line connecting the steps */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#ffdb16]/30 hidden md:block" />

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#ffdb16] rounded-lg flex items-center justify-center text-black font-bold text-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#ffdb16] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/assets/beekeeper.jpg"
              alt="Apiculteur utilisant l'application HoneyTrust"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlockchainSolution; 