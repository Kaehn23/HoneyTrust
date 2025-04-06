'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BackButton } from '@/components/ui/BackButton';

interface HoneyLotData {
  id: string;
  lotNumber: string;
  productionCountry: string;
  productionRegion: string;
  beekeeperName: string;
  honeyType: string;
  harvestDate: string;
  packagingDate: string;
  organicCertification?: string;
  geographicIndication?: string;
  qualityLabels?: string;
}

export default function HoneyLotPage({ params }: { params: { id: string } }) {
  const [honeyLot, setHoneyLot] = useState<HoneyLotData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHoneyLotData = async () => {
      try {
        const response = await fetch(`/api/honey-lots/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch honey lot data');
        }
        
        const data = await response.json();
        setHoneyLot(data);
      } catch (err) {
        console.error('Error fetching honey lot:', err);
        setError('Impossible de récupérer les informations de ce lot de miel. Il est possible que le QR code soit invalide ou que le lot n\'existe plus.');
      } finally {
        setLoading(false);
      }
    };

    fetchHoneyLotData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-lg">Chargement des informations...</p>
        </div>
      </div>
    );
  }

  if (error || !honeyLot) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Information non disponible</h1>
          <p className="text-gray-600 mb-6">{error || 'Impossible de récupérer les informations de ce lot de miel.'}</p>
          <BackButton label="Retour à l'accueil" destination="/" />
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-400 p-6 relative">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Informations de traçabilité</h1>
              <div className="h-16 w-16 relative">
                <Image 
                  src="/logo-honeytrust.png" 
                  alt="HoneyTrust Logo" 
                  fill
                  style={{ objectFit: 'contain' }} 
                />
              </div>
            </div>
            <p className="text-gray-800 mt-2">
              Lot de miel #{honeyLot.lotNumber}
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Origine */}
              <div className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-3 text-gray-900 border-b pb-2">Origine</h2>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-600 font-medium">Type de miel:</span>
                    <span className="ml-2 text-gray-900">{honeyLot.honeyType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Pays:</span>
                    <span className="ml-2 text-gray-900">{honeyLot.productionCountry}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Région:</span>
                    <span className="ml-2 text-gray-900">{honeyLot.productionRegion}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Apiculteur:</span>
                    <span className="ml-2 text-gray-900">{honeyLot.beekeeperName}</span>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-3 text-gray-900 border-b pb-2">Dates</h2>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-600 font-medium">Récolte:</span>
                    <span className="ml-2 text-gray-900">{formatDate(honeyLot.harvestDate)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Mise en pot:</span>
                    <span className="ml-2 text-gray-900">{formatDate(honeyLot.packagingDate)}</span>
                  </div>
                </div>
              </div>

              {/* Labels et certifications */}
              {(honeyLot.organicCertification || honeyLot.geographicIndication || honeyLot.qualityLabels) && (
                <div className="border rounded-lg p-4 shadow-sm md:col-span-2">
                  <h2 className="text-lg font-semibold mb-3 text-gray-900 border-b pb-2">Labels et certifications</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {honeyLot.organicCertification && (
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="font-medium text-green-700">Agriculture Biologique</p>
                        <p className="text-sm text-green-600">{honeyLot.organicCertification}</p>
                      </div>
                    )}
                    
                    {honeyLot.geographicIndication && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="font-medium text-blue-700">Indication Géographique</p>
                        <p className="text-sm text-blue-600">{honeyLot.geographicIndication}</p>
                      </div>
                    )}
                    
                    {honeyLot.qualityLabels && (
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="font-medium text-purple-700">Labels de qualité</p>
                        <p className="text-sm text-purple-600">{honeyLot.qualityLabels}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Message de confiance */}
            <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200 flex items-center">
              <div className="text-green-600 text-xl mr-3">✓</div>
              <p className="text-green-800">
                <span className="font-medium">Données vérifiées par HoneyTrust</span>
                <span className="block text-sm mt-1">Les informations de ce produit sont stockées de manière sécurisée et vérifiable.</span>
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <BackButton label="Retour" destination="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 