import {
  Connection,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

import {
  getAssociatedTokenAddress,
} from "@solana/spl-token";

export const connection = new Connection(
  clusterApiUrl("devnet"),
  "confirmed"
);

const USDC_DEVNET = new PublicKey(
  "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
);

export async function getSolBalance(address: string) {
  const publicKey = new PublicKey(address);

  const lamports = await connection.getBalance(publicKey);

  return lamports / 1_000_000_000;
}

export async function getUsdcBalance(address: string) {
  const owner = new PublicKey(address);

  const ata = await getAssociatedTokenAddress(
    USDC_DEVNET,
    owner
  );

  try {
    const balance = await connection.getTokenAccountBalance(ata);

    return Number(balance.value.uiAmount ?? 0);
  } catch {
    return 0;
  }
}
