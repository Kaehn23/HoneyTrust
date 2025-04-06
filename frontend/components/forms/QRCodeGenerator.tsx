import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

interface QRCodeGeneratorProps {
  honeyLotId: string;
  onQRCodeGenerated: (qrCodeData: string) => void;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ 
  honeyLotId, 
  onQRCodeGenerated 
}) => {
  const [qrCodeData, setQRCodeData] = useState('');
  
  useEffect(() => {
    // Generate a unique QR code value
    const generateQRCode = () => {
      // Create a unique string using honeyLotId, timestamp, and random value
      const uniqueString = `${honeyLotId}_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      setQRCodeData(uniqueString);
      onQRCodeGenerated(uniqueString);
    };
    
    if (honeyLotId) {
      generateQRCode();
    }
  }, [honeyLotId, onQRCodeGenerated]);

  if (!qrCodeData) {
    return <div>Génération du QR code...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <QRCode
          size={256}
          value={`${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/honey-lot/${honeyLotId}`}
          viewBox="0 0 256 256"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Ce QR code unique permet à vos clients de consulter les informations de traçabilité de ce lot de miel.
      </p>
    </div>
  );
}; 