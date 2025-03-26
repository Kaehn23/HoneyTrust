"use client"
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";
import SupportCard from "./SupportCard";

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

const SupportOptions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportOptions.map((option, index) => (
            <SupportCard
              key={option.title}
              {...option}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions; 