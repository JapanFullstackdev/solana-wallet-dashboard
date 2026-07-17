const POLYMARKET_API =
  "https://gamma-api.polymarket.com";

export async function getMarkets() {
  const response = await fetch(
    `${POLYMARKET_API}/markets?closed=false&limit=10`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Polymarket markets");
  }

  const data = await response.json();

  return data;
}
