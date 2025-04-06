import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all honey lots
router.get('/', async (req, res) => {
  try {
    const honeyLots = await prisma.honeyLot.findMany();
    res.json(honeyLots);
  } catch (error) {
    console.error('Honey Lot route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific honey lot by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const honeyLot = await prisma.honeyLot.findUnique({
      where: { id: Number(id) },
    });

    if (!honeyLot) {
      return res.status(404).json({ error: 'Honey lot not found' });
    }

    res.json(honeyLot);
  } catch (error) {
    console.error('Honey Lot route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new honey lot with an associated QR code
router.post('/', async (req, res) => {
  try {
    const { 
      userId,  
      qrCodeData, 
      // Honey lot data
      lotNumber,
      productionCountry,
      productionRegion,
      beekeeperName,
      beekeeperContact,
      siretNumber,
      honeyType,
      harvestDate,
      moistureContent,
      diastaseIndex,
      hmfLevel,
      residuesPresence,
      packagingLocation,
      packagingDate,
      storageConditions,
      packagingType,
      organicCertification,
      geographicIndication,
      qualityLabels,
    } = req.body;

    if (!userId || !qrCodeData) {
      return res.status(400).json({ error: 'Missing required fields: userId and qrCodeData' });
    }

    // Create a new honey lot with QR code in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create honey lot
      const honeyLot = await tx.honeyLot.create({
        data: {
          userId,
          lotNumber,
          productionCountry,
          productionRegion,
          beekeeperName,
          beekeeperContact,
          siretNumber,
          honeyType,
          harvestDate: new Date(harvestDate),
          moistureContent,
          diastaseIndex,
          hmfLevel,
          residuesPresence,
          packagingLocation,
          packagingDate: new Date(packagingDate),
          storageConditions,
          packagingType,
          organicCertification,
          geographicIndication,
          qualityLabels,
        },
      });

      // Create QR code associated with the honey lot
      const qrCode = await tx.qRCode.create({
        data: {
          honeyLotId: honeyLot.id,
          qrCodeData,
        },
      });

      return { honeyLot, qrCode };
    });

    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating honey lot:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a honey lot
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // For updating, you might want to validate which fields can be updated
    const updatedHoneyLot = await prisma.honeyLot.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.json(updatedHoneyLot);
  } catch (error) {
    console.error('Honey Lot route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a honey lot
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.honeyLot.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Honey Lot route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
