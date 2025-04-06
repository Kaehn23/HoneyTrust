import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const honeyLotId = params.id;
    
    if (!honeyLotId) {
      return NextResponse.json({ error: 'Honey lot ID is required' }, { status: 400 });
    }

    const honeyLot = await prisma.honeyLot.findUnique({
      where: {
        id: honeyLotId
      },
      include: {
        qrCode: true
      }
    });

    if (!honeyLot) {
      return NextResponse.json({ error: 'Honey lot not found' }, { status: 404 });
    }

    return NextResponse.json(honeyLot);
  } catch (error) {
    console.error('Error fetching honey lot:', error);
    return NextResponse.json({ error: 'Failed to fetch honey lot' }, { status: 500 });
  }
} 