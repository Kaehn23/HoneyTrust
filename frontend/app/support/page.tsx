"use client"
import HeroSection from "@/components/support/HeroSection";
import SupportOptions from "@/components/support/SupportOptions";
import FAQSection from "@/components/support/FAQSection";

const SupportPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <SupportOptions />
      <FAQSection />
    </div>
  );
};

export default SupportPage; 