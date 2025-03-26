"use client"
import { Wallet, Key, Link as LinkIcon } from "lucide-react";
import StepCard from "./StepCard";

const steps = [
  {
    icon: Wallet,
    title: "Choisir un portefeuille",
    description: "Téléchargez MetaMask ou Rabby Wallet uniquement depuis l'app store officiel. Évitez les sources non vérifiées pour votre sécurité.",
  },
  {
    icon: Key,
    title: "Créer un compte",
    description: "Créez votre compte en suivant chaque étape. Votre phrase de récupération vous permet de reprendre le contrôle. Gardez-la en sécurité.",
  },
  {
    icon: LinkIcon,
    title: "Se connecter",
    description: "Allez sur le site Web3 et choisissez \"Connecter un portefeuille\". Sélectionnez MetaMask ou Coinbase selon votre établissement.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
              isLastStep={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection; 