"use client"
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SupportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
  color: string;
  index: number;
}

const SupportCard = ({ icon: Icon, title, description, action, href, color, index }: SupportCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={href}
        className="block h-full backdrop-blur-lg bg-black/40 rounded-xl p-6 border border-white/10 hover:border-[#ffdb16]/50 transition-all duration-300"
      >
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#ffdb16] mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>
        <span className="text-[#ffdb16] text-sm font-medium group-hover:underline">
          {action} →
        </span>
      </Link>
    </motion.div>
  );
};

export default SupportCard; 