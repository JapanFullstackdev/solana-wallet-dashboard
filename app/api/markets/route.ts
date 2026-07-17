import { NextResponse } from "next/server";
import { getMarkets } from "@/services/polymarket.service";

export async function GET() {
  try {
    const markets = await getMarkets(10);

    return NextResponse.json(markets);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Unable to fetch markets"
      },
      {
        status: 500
      }
    );

  }
}
