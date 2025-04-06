import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { isConnected } = useAccount();
  
  // Automatically close modal when wallet is connected
  useEffect(() => {
    if (isConnected) {
      onClose();
    }
  }, [isConnected, onClose]);

  if (!isOpen) return null;

  const handleNoClick = () => {
    onClose(); // Close the modal first
    router.push('/bien-commencer'); // Then navigate
  };

  const handleHomeClick = () => {
    onClose(); // Close the modal first
    router.push('/'); // Then navigate to homepage
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-white mb-4 flex justify-center">Connecter un wallet</h2>
        <p className="text-gray-300 mb-6 flex justify-center">Voulez-vous connecter votre wallet ?</p>
        <div className="flex flex-col items-center space-y-4">
          <ConnectButton.Custom>
            {({ openConnectModal, account }) => (
              <button
                onClick={() => {
                  if (!account) {
                    openConnectModal();
                  } else {
                    onClose();
                  }
                }}
                className="px-4 py-2 bg-[#ffdb16] cursor-pointer text-black rounded-lg hover:bg-[#ffdb16]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,219,22,0.3)] active:scale-95"
              >
                {account ? 'Continuer' : 'Oui'}
              </button>
            )}
          </ConnectButton.Custom>
          <button
            onClick={handleNoClick}
            className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95"
          >
            Non
          </button>
          <button
            onClick={handleHomeClick}
            className="px-4 py-2 bg-gray-700 cursor-pointer text-white rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(75,85,99,0.3)] active:scale-95 mt-2"
          >
            Retour au site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal; 