import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { RainbowKitProvider } from "@/components/providers/RainbowKitProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "HoneyTrust",
   description: "HoneyTrust - Votre plateforme de confiance",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fr">
         <body className={inter.className}>
            <RainbowKitProvider>
               <Navbar />
               {children}
            </RainbowKitProvider>
         </body>
      </html>
   );
}
