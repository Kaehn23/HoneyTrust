import React from 'react';
import { useRouter } from 'next/navigation';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleNoClick = () => {
    onClose(); // Close the modal first
    router.push('/bien-commencer'); // Then navigate
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-white mb-4">Connecter un wallet</h2>
        <p className="text-gray-300 mb-6">Voulez-vous connecter votre wallet ?</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleNoClick}
            className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Non
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#ffdb16] cursor-pointer text-black rounded-lg hover:bg-[#ffdb16]/90 transition-colors"
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal; 