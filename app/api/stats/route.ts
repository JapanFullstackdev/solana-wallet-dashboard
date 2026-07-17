import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const hedges = await prisma.hedge.findMany();

  const totalPositions = hedges.length;

  const portfolioValue = hedges.reduce(
    (sum, h) => sum + h.amount,
    0
  );

  const totalPnl = hedges.reduce(
    (sum, h) => sum + h.currentPnl,
    0
  );

  const openPositions = hedges.filter(
    (h) => h.status === "OPEN"
  ).length;

  const closedPositions = hedges.filter(
    (h) => h.status === "CLOSED"
  ).length;

  return NextResponse.json({
    portfolioValue,
    totalPnl,
    totalPositions,
    openPositions,
    closedPositions,
  });
}
