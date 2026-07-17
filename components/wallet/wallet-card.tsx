"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  getSolBalance,
  getUsdcBalance,
} from "@/lib/solana";

export default function WalletCard() {
  const { publicKey, connected } = useWallet();

  const [sol, setSol] = useState(0);
  const [usdc, setUsdc] = useState(0);

  useEffect(() => {
    async function loadBalances() {
      if (!publicKey) return;

      const address = publicKey.toBase58();

      const solBalance = await getSolBalance(address);
      const usdcBalance = await getUsdcBalance(address);

      setSol(solBalance);
      setUsdc(usdcBalance);
    }

    loadBalances();
  }, [publicKey]);

  if (!connected || !publicKey) {
    return (
      <div className="rounded-xl border p-6">
        <h2 className="text-lg font-semibold">Wallet</h2>
        <p className="mt-4">Wallet not connected</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">Wallet</h2>

      <p className="mt-4 break-all text-sm">
        {publicKey.toBase58()}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">SOL</p>
          <p className="text-2xl font-bold">{sol}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">USDC</p>
          <p className="text-2xl font-bold">{usdc}</p>
        </div>
      </div>
    </div>
  );
}
