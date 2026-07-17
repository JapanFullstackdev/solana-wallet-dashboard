"use client";
import dynamic from "next/dynamic";
import WalletCard from "@/components/wallet/wallet-card";
import PnlCard from "@/components/dashboard/pnl-card";
import AiCard from "@/components/dashboard/ai-card";
import MarketCard from "@/components/market/market-card";
import StatsCard from "@/components/dashboard/stats-card";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui")
      .then((m) => m.WalletMultiButton),
  {
    ssr: false,
  }
);

export default function Dashboard() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-3xl font-bold">
        HedgeFlow Dashboard
      </h1>
	<WalletMultiButton />

      <div className="grid gap-6 mt-8 md:grid-cols-2">

        <WalletCard />

        <PnlCard />

        <AiCard />

        <MarketCard />
	<StatsCard />

      </div>

    </main>
  );
}
