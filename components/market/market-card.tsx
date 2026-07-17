"use client";

import { useEffect, useState } from "react";

type Market = {
  id: string;
  question: string;
  active: boolean;
};

export default function MarketCard() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/markets")
      .then((res) => res.json())
      .then((data) => {
        setMarkets(data.slice(0, 10));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border p-6">
        Loading markets...
      </div>
    );
  }

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        Live Prediction Markets
      </h2>

      <div className="mt-4 space-y-3">
        {markets.map((market) => (
          <div
            key={market.id}
            className="border rounded-lg p-3"
          >
            <p className="font-medium">
              {market.question}
            </p>

            <p className="text-sm text-gray-500">
              {market.active ? "Active" : "Closed"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
