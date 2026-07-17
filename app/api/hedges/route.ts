import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const hedges = await prisma.hedge.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(hedges);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    wallet,
    marketId,
    marketName,
    amount,
    entryPrice,
  } = body;

  const user = await prisma.user.upsert({
    where: {
      wallet,
    },
    update: {},
    create: {
      wallet,
    },
  });

  const hedge = await prisma.hedge.create({
    data: {
      userId: user.id,
      marketId,
      marketName,
      amount,
      entryPrice,
      currentPnl: 0,
    },
  });

  return NextResponse.json(hedge);
}
