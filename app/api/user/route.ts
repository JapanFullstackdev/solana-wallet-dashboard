import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { wallet } = await req.json();

  if (!wallet) {
    return NextResponse.json(
      { error: "Wallet is required" },
      { status: 400 }
    );
  }

  const user = await prisma.user.upsert({
    where: {
      wallet,
    },
    update: {},
    create: {
      wallet,
    },
  });

  return NextResponse.json(user);
}
