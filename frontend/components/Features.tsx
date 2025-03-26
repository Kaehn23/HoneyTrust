"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({ image, title, description, delay }: {
  image: string;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-3 text-center text-white group-hover:text-[#ffdb16] transition-colors duration-300">
        {title}
      </h2>
      <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      image: "/assets/honey-production.jpg",
      title: "Production de Miel",
      description: "Découvrez comment la blockchain garantit la traçabilité et la qualité du miel, de la ruche à votre table."
    },
    {
      image: "/assets/blockchain-tech.jpg",
      title: "Technologie Blockchain",
      description: "Explorez comment la blockchain sécurise et authentifie chaque pot de miel."
    },
    {
      image: "/assets/QRcode.jpg",
      title: "Tracabilité",
      description: "Retrouvez rapidement les informations globales concernant votre pot de miel avec le QR Code."
    },
    {
      image: "/assets/quality.jpg",
      title: "Contrôle Qualité",
      description: "Découvrez nos processus rigoureux de contrôle qualité et de certification."
    },
    {
      image: "/assets/logo.png",
      title: "Notre Communauté",
      description: "Rejoignez notre communauté d'apiculteurs et de passionnés de miel."
    },
    {
      image: "/assets/contact.jpg",
      title: "Contactez-nous",
      description: "Des questions ? N'hésitez pas à nous contacter pour plus d'informations."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default Features; 