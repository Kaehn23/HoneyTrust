export interface HoneyLotFormData {
  // 1. Origine du miel
  productionCountry: string;
  productionRegion: string;
  beekeeperName: string;
  beekeeperContact: string;
  siretNumber: string;
  honeyType: string;

  // 2. Identification du lot
  lotNumber: string;
  harvestDate: string;

  // 3. Contrôle et analyse
  moistureContent: string;
  diastaseIndex: string;
  hmfLevel: string;
  residuesPresence: string;

  // 4. Transformation et conditionnement
  packagingLocation: string;
  packagingDate: string;
  storageConditions: string;
  packagingType: string;

  // 5. Certification et labels (optional)
  organicCertification?: string;
  geographicIndication?: string;
  qualityLabels?: string;
} 