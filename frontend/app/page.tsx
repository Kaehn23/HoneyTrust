import Hero from "@/components/Hero";
import MarketContext from "@/components/MarketContext";
import Features from "@/components/Features";
import CallToAction from "@/components/ui/CallToAction";
import BlockchainSolution from "@/components/BlockchainSolution";
import KeyActors from "@/components/KeyActors";
import Simplification from "@/components/Simplification";
import RegulatoryContext from "@/components/RegulatoryContext";
import CompetitiveAdvantages from "@/components/CompetitiveAdvantages";
import FAQ from "@/components/FAQ";

export default function Home() {
   return (
      <div className="container mx-auto px-4 py-8">
         <Hero />         
         <Features />
         <MarketContext />
         <CallToAction />         
         <BlockchainSolution />
         <KeyActors />
         <Simplification />
         <RegulatoryContext />
         <CompetitiveAdvantages />
         <FAQ />
      </div>
   );
}
