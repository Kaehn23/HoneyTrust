import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="container mx-auto px-4 py-8">
         {/* Hero Section */}
         <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-[#ffdb16] pb-4">
               HoneyTrust
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
               Découvrez comment la blockchain révolutionne le monde du miel et
               de l'apiculture
            </p>
         </section>

         {/* Bento Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Honey Production Card */}
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10">
               <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                     src="/assets/honey-production.jpg"
                     alt="Production de miel"
                     fill
                     className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
               </div>
               <h2 className="text-2xl font-semibold mb-3 text-center text-white group-hover:text-[#ffdb16] transition-colors duration-300">
                  Production de Miel
               </h2>
               <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
                  Découvrez comment la blockchain garantit la traçabilité et la
                  qualité du miel, de la ruche à votre table.
               </p>
            </div>

            {/* Blockchain Technology Card */}
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10">
               <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                     src="/assets/blockchain-tech.jpg"
                     alt="Technologie Blockchain"
                     fill
                     className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
               </div>
               <h2 className="text-2xl font-semibold mb-3 text-center text-white group-hover:text-[#ffdb16] transition-colors duration-300">
                  Technologie Blockchain
               </h2>
               <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
                  Explorez comment la blockchain sécurise et authentifie chaque
                  pot de miel.
               </p>
            </div>

            {/* Sustainability Card */}
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10">
               <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                     src="/assets/QRcode.jpg"
                     alt="QR Code"
                     fill
                     className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
               </div>
               <h2 className="text-2xl font-semibold mb-3 text-center text-white group-hover:text-[#ffdb16] transition-colors duration-300">
                  Tracabilité
               </h2>
               <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
                  Retrouvez rapidement les informations globales concernant votre pot de miel avec le QR Code.
               </p>
            </div>

            {/* Quality Assurance Card */}
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10">
               <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                     src="/assets/quality.jpg"
                     alt="Contrôle Qualité"
                     fill
                     className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
               </div>
               <h2 className="text-2xl font-semibold mb-3 text-center text-white group-hover:text-[#ffdb16] transition-colors duration-300">
                  Contrôle Qualité
               </h2>
               <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
                  Découvrez nos processus rigoureux de contrôle qualité et de
                  certification.
               </p>
            </div>

            {/* Community Card */}
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10">
               <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                     src="/assets/logo.png"
                     alt="Communauté"
                     fill
                     className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
               </div>
               <h2 className="text-2xl font-semibold mb-3 text-center text-white group-hover:text-[#ffdb16] transition-colors duration-300">
                  Notre Communauté
               </h2>
               <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
                  Rejoignez notre communauté d'apiculteurs et de passionnés de
                  miel.
               </p>
            </div>

            {/* Contact Card */}
            <div className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#ffdb16]/10">
               <div className="h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                     src="/assets/contact.jpg"
                     alt="Contact"
                     fill
                     className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
               </div>
               <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#ffdb16] transition-colors duration-300">
                  Contactez-nous
               </h2>
               <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-[#ffdb16]/90">
                  Des questions ? N'hésitez pas à nous contacter pour plus
                  d'informations.
               </p>
            </div>
         </div>

         {/* Call to Action */}
         <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
               Prêt à découvrir notre miel traçable ?
            </h2>
            <Link
               href="/products"
               className="inline-block bg-[#ffdb16] text-black px-8 py-3 rounded-full hover:bg-[#ffdb16]/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,219,22,0.5)]"
            >
               En savoir plus
            </Link>
         </section>
      </div>
   );
}
