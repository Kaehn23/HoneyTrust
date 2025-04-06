import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';

// Contract ABI - you'll need to replace this with your actual contract ABI
const BEE_NFT_ABI = [
  {
    "inputs": [],
    "name": "mintBeeNFT",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

// Replace with your deployed contract address
const BEE_NFT_ADDRESS = "0x0000000000000000000000000000000000000000" as `0x${string}`;

export const GenerateNFTButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isConnected } = useAccount();

  const { writeContract, data: hash } = useWriteContract();

  const { isLoading: isMinting } = useWaitForTransactionReceipt({
    hash,
  });

  const handleGenerateNFT = async () => {
    if (!isConnected) {
      setError('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await writeContract({
        address: BEE_NFT_ADDRESS,
        abi: BEE_NFT_ABI,
        functionName: 'mintBeeNFT',
      });
    } catch (error) {
      console.error('Error generating NFT:', error);
      setError('Failed to generate NFT');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        onClick={handleGenerateNFT}
        disabled={isLoading || isMinting}
        className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#ffdb16] to-[#ffb700] text-black font-semibold rounded-md hover:from-[#e5c414] hover:to-[#e5a500] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        {isLoading || isMinting ? (
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isMinting && <p className="text-green-500 text-sm">Transaction in progress...</p>}
    </div>
  );
}; 