"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment fonctionne la traçabilité du miel sur HoneyTrust ?",
    answer: "Chaque lot de miel reçoit un NFT unique contenant toutes les informations de production. Un QR code est généré et apposé sur chaque pot, permettant aux consommateurs d'accéder instantanément à l'historique complet du produit."
  },
  {
    question: "Quelles informations sont enregistrées sur la blockchain ?",
    answer: "Nous enregistrons la date de récolte, la localisation du rucher, le type de miel, les certifications, les résultats d'analyses laboratoire, et tout le parcours du miel jusqu'au consommateur final."
  },
  {
    question: "La plateforme est-elle accessible aux petits producteurs ?",
    answer: "Absolument ! Notre solution est conçue pour être accessible à tous les apiculteurs, quelle que soit leur taille. L'interface est intuitive et le modèle d'abonnement est adapté aux différents volumes de production."
  },
  {
    question: "Comment sont protégées les données des apiculteurs ?",
    answer: "Toutes les données sont sécurisées selon les normes RGPD. La blockchain garantit l'immuabilité des informations, tandis que notre système de gestion des accès assure la confidentialité des données sensibles."
  },
  {
    question: "Quel est le coût d'utilisation de la plateforme ?",
    answer: "Nous proposons un abonnement tout compris avec différentes formules adaptées aux besoins des apiculteurs. Le prix est calculé en fonction du volume de production et inclut toutes les fonctionnalités de traçabilité."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      className="border border-[#ffdb16]/20 rounded-xl overflow-hidden backdrop-blur-sm"
    >
      <button
        className="w-full p-6 text-left flex items-center justify-between gap-4 bg-black/40 hover:bg-black/50 transition-colors"
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-semibold text-[#ffdb16]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-[#ffdb16]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
            Questions Fréquentes
          </span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ; 