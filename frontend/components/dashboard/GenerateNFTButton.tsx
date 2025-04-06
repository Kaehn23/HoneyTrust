import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useAccount } from 'wagmi';

export const GenerateNFTButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected } = useAccount();

  const handleGenerateNFT = async () => {
    if (!isConnected) {
      // TODO: Show wallet connection modal
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement NFT generation logic
      console.log('Generating NFT...');
    } catch (error) {
      console.error('Error generating NFT:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleGenerateNFT}
      disabled={isLoading}
      className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#ffdb16] to-[#ffb700] text-black font-semibold rounded-md hover:from-[#e5c414] hover:to-[#e5a500] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      {isLoading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black mr-2"></div>
          Génération en cours...
        </div>
      ) : (
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Générer un NFT
        </div>
      )}
    </Button>
  );
}; 