import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.upsert({
    where: {
      wallet: "demo-wallet",
    },
    update: {},
    create: {
      wallet: "demo-wallet",
    },
  });

  await prisma.hedge.create({
    data: {
      userId: user.id,
      marketId: "btc-100k",
      marketName: "Bitcoin above $100k",
      amount: 250,
      entryPrice: 0.48,
      currentPnl: 42,
    },
  });

  return NextResponse.json({
    success: true,
  });
}
