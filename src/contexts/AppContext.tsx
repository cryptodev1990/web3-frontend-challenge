import React, { createContext, useContext } from "react";
import { ethers } from "ethers";
import { FooToken__factory, BarToken__factory, Exchange__factory } from "web3-frontend-challenge";

declare type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  wallet: any;
  fooToken: any;
  barToken: any;
  exchange: any;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: Props) => {

  const privatekey: string = process.env.REACT_APP_PRIVATE_KEY as string;
  const FooTokenAddress: string = process.env.REACT_APP_FOO_TOKEN_ADDRESS as string;
  const BarTokenAddress: string = process.env.REACT_APP_BAR_TOKEN_ADDRESS as string;
  const ExchangeAddress: string = process.env.REACT_APP_EXCHANGE_ADDRESS as string;

  const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
  const wallet = new ethers.Wallet(privatekey, provider);
  const fooToken = FooToken__factory.connect(FooTokenAddress, provider);
  const barToken = BarToken__factory.connect(BarTokenAddress, provider);
  const exchange = Exchange__factory.connect(ExchangeAddress, provider);

  return (
    <AppContext.Provider value={{ wallet, fooToken, barToken, exchange } as AppContextInterface}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);