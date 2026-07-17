"use client";

import { useEffect, useState } from "react";

type Stats = {
  portfolioValue: number;
  totalPnl: number;
  totalPositions: number;
  openPositions: number;
  closedPositions: number;
};

export default function StatsCard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then(setStats);
  }, []);

  if (!stats) {
    return (
      <div className="rounded-xl border p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-xl font-bold">
        Portfolio Summary
      </h2>

      <div className="mt-4 space-y-2">
        <p>Portfolio Value: ${stats.portfolioValue}</p>
        <p>Total P&L: ${stats.totalPnl}</p>
        <p>Total Positions: {stats.totalPositions}</p>
        <p>Open Positions: {stats.openPositions}</p>
        <p>Closed Positions: {stats.closedPositions}</p>
      </div>
    </div>
  );
}
