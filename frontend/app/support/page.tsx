"use client"
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";

const supportOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Envoyez-nous un email pour toute question ou assistance",
    action: "Envoyer un email",
    href: "mailto:support@honeytrust.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Support Téléphonique",
    description: "Appelez-nous pour une assistance immédiate",
    action: "Appeler",
    href: "tel:+33123456789",
    color: "from-green-500 to-green-600"
  },
  {
    icon: MessageSquare,
    title: "Chat en Direct",
    description: "Discutez en temps réel avec notre équipe de support",
    action: "Démarrer le chat",
    href: "#chat",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Horaires d'Ouverture",
    description: "Lundi - Vendredi: 9h00 - 18h00",
    action: "Voir les horaires",
    href: "#horaires",
    color: "from-orange-500 to-orange-600"
  }
];

const SupportPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffdb16]/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdb16] to-yellow-500">
              Support HoneyTrust
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. Choisissez le mode de contact qui vous convient le mieux.
          </p>
        </motion.div>
      </section>

      {/* Support Options Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={option.href}
                  className="block h-full backdrop-blur-lg bg-black/40 rounded-xl p-6 border border-white/10 hover:border-[#ffdb16]/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#ffdb16] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {option.description}
                  </p>
                  <span className="text-[#ffdb16] text-sm font-medium group-hover:underline">
                    {option.action} →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
    </div>
  );
};

export default SupportPage; 