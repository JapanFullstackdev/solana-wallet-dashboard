const POLYMARKET_API =
  "https://gamma-api.polymarket.com";

export async function getMarkets(limit = 10) {
  const response = await fetch(
    `${POLYMARKET_API}/markets?closed=false&limit=${limit}`,
	{
	    cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Polymarket markets");
  }

  const data = await response.json();

  return data;
}
