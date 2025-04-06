// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();
//     const { 
//       userId,  
//       qrCodeData, 
//       // Honey lot data
//       lotNumber,
//       productionCountry,
//       productionRegion,
//       beekeeperName,
//       beekeeperContact,
//       siretNumber,
//       honeyType,
//       harvestDate,
//       moistureContent,
//       diastaseIndex,
//       hmfLevel,
//       residuesPresence,
//       packagingLocation,
//       packagingDate,
//       storageConditions,
//       packagingType,
//       organicCertification,
//       geographicIndication,
//       qualityLabels,
//     } = data;

//     if (!userId || !qrCodeData) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     // Create a new honey lot with QR code in a transaction
//     const result = await prisma.$transaction(async (tx: PrismaClient) => {
//       // Create honey lot
//       const honeyLot = await tx.honeyLot.create({
//         data: {
//           userId,
//           lotNumber,
//           productionCountry,
//           productionRegion,
//           beekeeperName,
//           beekeeperContact,
//           siretNumber,
//           honeyType,
//           harvestDate: new Date(harvestDate),
//           moistureContent,
//           diastaseIndex,
//           hmfLevel,
//           residuesPresence,
//           packagingLocation,
//           packagingDate: new Date(packagingDate),
//           storageConditions,
//           packagingType,
//           organicCertification,
//           geographicIndication,
//           qualityLabels,
//         },
//       });

//       // Create QR code associated with the honey lot
//       const qrCode = await tx.qRCode.create({
//         data: {
//           honeyLotId: honeyLot.id,
//           qrCodeData,
//         },
//       });

//       return { honeyLot, qrCode };
//     });

//     return NextResponse.json(result, { status: 201 });
//   } catch (error) {
//     console.error('Error creating honey lot:', error);
//     return NextResponse.json({ error: 'Failed to create honey lot' }, { status: 500 });
//   }
// } 