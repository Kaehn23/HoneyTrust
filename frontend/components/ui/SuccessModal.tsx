import { Button } from './Button';
import { useRouter } from 'next/navigation';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLoginClick = () => {
    onClose(); // Close the modal first
    router.push('/login'); // Then navigate
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 max-w-md w-full mx-4 shadow-xl border border-[#ffdb16]/20">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdb16]/20 mb-4">
            <svg
              className="h-6 w-6 text-[#ffdb16]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-[#ffdb16] mb-2">
            Félicitations !
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Votre compte a été créé avec succès.
          </p>
          <p className="text-sm text-green -500 mb-6">
            Pour une experience optimale, veuillez vous connecter via un ordinateur.  
          </p>
          <Button
            onClick={handleLoginClick}
            className="w-full"
          >
            Retour à la page de connexion
          </Button>
        </div>
      </div>
    </div>
  );
} 