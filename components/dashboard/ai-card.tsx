export default function AiCard() {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        AI Hedge Recommendation
      </h2>

      <div className="mt-4">
        <p>
          Risk detected:
        </p>

        <p className="font-bold">
          Bitcoin downside risk
        </p>

        <p className="mt-3">
          Suggested hedge:
        </p>

        <p className="font-bold">
          BTC below $100k
        </p>

        <p className="mt-3 text-sm">
          Confidence: 91%
        </p>
      </div>
    </div>
  );
}
