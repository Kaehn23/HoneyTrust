'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { BackButton } from '@/components/ui/BackButton';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { HoneyLotFormData } from '@/components/forms/HoneyLotTypes';
import { QRCodeGenerator } from '@/components/forms/QRCodeGenerator';

export default function CreateHoneyLotPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeyLotId, setHoneyLotId] = useState<string | null>(null);
  const [qrCodeData, setQRCodeData] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<HoneyLotFormData>();

  const handleQRCodeGenerated = (qrData: string) => {
    setQRCodeData(qrData);
  };

  const onSubmit: SubmitHandler<HoneyLotFormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      const email = searchParams.get('email');
      
      // Get the user ID (in a real app, you would use authentication)
      // For demo purposes, we'll use a placeholder
      const userId = "admin"; // Replace with actual user authentication
      
      // Submit the form data to the API
      const response = await fetch('/api/honey-lots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userId,
          qrCodeData,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create honey lot');
      }
      
      const result = await response.json();
      setHoneyLotId(result.honeyLot.id);
      setFormSubmitted(true);
      
      // Show success message but don't redirect yet (so user can see QR code)
      alert('Lot de miel créé avec succès ! Un QR code a été généré.');
    } catch (error) {
      console.error('Error creating honey lot:', error);
      alert('Une erreur est survenue lors de la création du lot de miel.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pt-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
            Créer un nouveau lot de miel
          </h1>
        </div>
        
        {formSubmitted && honeyLotId ? (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Lot de miel créé avec succès !</h2>
            <div className="max-w-md mx-auto">
              <QRCodeGenerator 
                honeyLotId={honeyLotId} 
                onQRCodeGenerated={handleQRCodeGenerated} 
              />
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={() => {
                    const email = searchParams.get('email');
                    router.push(`/dashboard?email=${encodeURIComponent(email || '')}`);
                  }}
                  className="px-6 py-3 bg-[#ffdb16] text-black font-semibold rounded-md hover:bg-w transition-colors"
                >
                  Retourner au tableau de bord
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* 1. Origine du miel */}
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-4 uppercase text-gray-900">1. Origine du miel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pays de production
                    </label>
                    <input
                      type="text"
                      {...register('productionCountry', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />  
                    {errors.productionCountry && (
                      <p className="text-red-500 text-sm mt-1">{errors.productionCountry.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Région de production
                    </label>
                    <input
                      type="text"
                      {...register('productionRegion', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.productionRegion && (
                      <p className="text-red-500 text-sm mt-1">{errors.productionRegion.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom de l'apiculteur
                    </label>
                    <input
                      type="text"
                      {...register('beekeeperName', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.beekeeperName && (
                      <p className="text-red-500 text-sm mt-1">{errors.beekeeperName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact de l'apiculteur
                    </label>
                    <input
                      type="text"
                      {...register('beekeeperContact', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Un ID unique sera généré à la place des données personnelles.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      N° de Siret
                    </label>
                    <input
                      type="text"
                      {...register('siretNumber', { 
                        required: 'Ce champ est requis',
                        pattern: {
                          value: /^[0-9]{14}$/,
                          message: 'Le numéro SIRET doit contenir 14 chiffres'
                        }
                      })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.siretNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.siretNumber.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type de miel
                    </label>
                    <input
                      type="text"
                      {...register('honeyType', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.honeyType && (
                      <p className="text-red-500 text-sm mt-1">{errors.honeyType.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 2. Identification du lot */}
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 uppercase">2. Identification du lot</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Numéro de lot
                    </label>
                    <input
                      type="text"
                      {...register('lotNumber', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.lotNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.lotNumber.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de récolte
                    </label>
                    <input
                      type="date"
                      {...register('harvestDate', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.harvestDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.harvestDate.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 3. Contrôle et analyse */}
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 uppercase">3. Contrôle et analyse (effectués en laboratoire)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teneur en humidité (%)
                    </label>
                    <input
                      type="text"
                      {...register('moistureContent', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.moistureContent && (
                      <p className="text-red-500 text-sm mt-1">{errors.moistureContent.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Indice de diastase
                    </label>
                    <input
                      type="text"
                      {...register('diastaseIndex', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.diastaseIndex && (
                      <p className="text-red-500 text-sm mt-1">{errors.diastaseIndex.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      HMF (Hydroxyméthylfurfural)
                    </label>
                    <input
                      type="text"
                      {...register('hmfLevel', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Pour vérifier le vieillissement et le chauffage
                    </p>
                    {errors.hmfLevel && (
                      <p className="text-red-500 text-sm mt-1">{errors.hmfLevel.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Présence de résidus
                    </label>
                    <textarea
                      {...register('residuesPresence', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                      placeholder="Antibiotiques, pesticides, contaminants..."
                      rows={3}
                    />
                    {errors.residuesPresence && (
                      <p className="text-red-500 text-sm mt-1">{errors.residuesPresence.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 4. Transformation et conditionnement */}
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 uppercase">4. Transformation et conditionnement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lieu de mise en pot
                    </label>
                    <input
                      type="text"
                      {...register('packagingLocation', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.packagingLocation && (
                      <p className="text-red-500 text-sm mt-1">{errors.packagingLocation.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de mise en pot
                    </label>
                    <input
                      type="date"
                      {...register('packagingDate', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.packagingDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.packagingDate.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Conditions de stockage avant mise en vente
                    </label>
                    <textarea
                      {...register('storageConditions', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                      rows={3}
                    />
                    {errors.storageConditions && (
                      <p className="text-red-500 text-sm mt-1">{errors.storageConditions.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type d'emballage utilisé
                    </label>
                    <input
                      type="text"
                      {...register('packagingType', { required: 'Ce champ est requis' })}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                    {errors.packagingType && (
                      <p className="text-red-500 text-sm mt-1">{errors.packagingType.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 6. Certification et labels */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 uppercase">6. Certification et labels (si applicable)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Label biologique (AB, EU Organic, etc.)
                    </label>
                    <input
                      type="text"
                      {...register('organicCertification')}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Indications géographiques protégées (IGP, AOP)
                    </label>
                    <input
                      type="text"
                      {...register('geographicIndication')}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Autres labels de qualité
                    </label>
                    <input
                      type="text"
                      {...register('qualityLabels')}
                      className="w-full p-2 border rounded-md text-gray-900"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-[#ffdb16] text-black font-semibold rounded-md hover:bg-w transition-colors"
                >
                  {isSubmitting ? 'Création en cours...' : 'Créer le lot de miel'}
                </Button>
              </div>
              <div className="flex space-x-4 w-full sm:w-auto">
                <BackButton 
                  label="Retourner à l'accueil" 
                  destination="/dashboard"
                  className="w-full sm:w-auto px-4 py-2"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 