"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroBg: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background SVG with hexagon pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Pattern for hexagons with dots */}
          <pattern id="hexagonPattern" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon
              points="30,0 60,15 60,37 30,52 0,37 0,15"
              fill="none"
              stroke="#e5c414"
              strokeWidth="1"
              filter="url(#glow)"
            />
            {/* Dots at each vertex */}
            <circle cx="30" cy="0" r="1.5" fill="#e5c414" filter="url(#glow)" />
            <circle cx="60" cy="15" r="1.5" fill="#e5c414" filter="url(#glow)" />
            <circle cx="60" cy="37" r="1.5" fill="#e5c414" filter="url(#glow)" />
            <circle cx="30" cy="52" r="1.5" fill="#e5c414" filter="url(#glow)" />
            <circle cx="0" cy="37" r="1.5" fill="#e5c414" filter="url(#glow)" />
            <circle cx="0" cy="15" r="1.5" fill="#e5c414" filter="url(#glow)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
      </svg>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-white text-4xl md:text-6xl font-bold text-center px-4"
        >
          Honey Trust, solution de tracabilité transparente
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroBg;
