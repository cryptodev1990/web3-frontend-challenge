import React, { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import {
  FooToken__factory,
  BarToken__factory,
  Exchange__factory,
} from "web3-frontend-challenge";

declare type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  fooToken: any;
  barToken: any;
  exchange: any;
  address: string;
  connected: boolean;
  connectWallet: VoidFunction;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: Props) => {

  const [address, setAddress] = useState("");

  const [connected, setConnected] = useState(false);

  const FooTokenAddress: string = process.env
    .REACT_APP_FOO_TOKEN_ADDRESS as string;

  const BarTokenAddress: string = process.env
    .REACT_APP_BAR_TOKEN_ADDRESS as string;

  const ExchangeAddress: string = process.env
    .REACT_APP_EXCHANGE_ADDRESS as string;

  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  // const wallet = new ethers.Wallet(privatekey, provider);
  const signer = provider.getSigner();
  const fooToken = FooToken__factory.connect(FooTokenAddress, signer);
  const barToken = BarToken__factory.connect(BarTokenAddress, signer);
  const exchange = Exchange__factory.connect(ExchangeAddress, signer);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      const res = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(res[0]);
      setConnected(true);
    } else {
      alert("install metamask extension!");
    }
  };

  return (
    <AppContext.Provider
      value={
        {
          fooToken,
          barToken,
          exchange,
          address,
          connected,
          connectWallet,
        } as AppContextInterface
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
