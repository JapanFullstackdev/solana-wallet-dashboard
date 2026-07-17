"use client";

import { ReactNode, useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";


export function Providers({
  children,
}: {
  children: ReactNode;
}) {

  const endpoint = useMemo(
    () => clusterApiUrl("devnet"),
    []
  );


  const wallets = useMemo(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return [
      new PhantomWalletAdapter(),
    ];
  }, []);


  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect={false}
      >
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
