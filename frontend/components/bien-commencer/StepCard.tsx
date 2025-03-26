"use client"
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLastStep: boolean;
}

const StepCard = ({ icon: Icon, title, description, index, isLastStep }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="h-full backdrop-blur-lg bg-black/40 rounded-xl p-6 border border-[#ffdb16]/20 hover:border-[#ffdb16]/50 transition-all duration-300">
        <div className="w-12 h-12 bg-[#ffdb16] rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-black" />
        </div>
        <h3 className="text-xl font-semibold text-[#ffdb16] mb-3">
          {title}
        </h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
      {!isLastStep && (
        <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-[#ffdb16]/20 transform translate-x-full" />
      )}
    </motion.div>
  );
};

export default StepCard; 