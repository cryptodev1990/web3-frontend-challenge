import React, { useState } from "react";
import SelectToken from "../components/SelectToken";
import { ethers } from "ethers";
import { useAppContext } from "../contexts/AppContext";

const Swap = () => {
  const context = useAppContext();

  const [amountFoo, setAmountFoo] = useState(1);

  const HandleApprove = async () => {
    const exchange_rate = amountFoo.toString();
    const rate = ethers.utils.parseUnits(exchange_rate);
    const exchangeAddress = process.env.REACT_APP_EXCHANGE_ADDRESS;
    await context?.fooToken
      .connect(context?.wallet)
      .approve(exchangeAddress, rate);
  };

  const HandleMint = async () => await context?.fooToken.connect(context?.wallet).fund();

  const HandleSwap = async () => {
    const fooTokenAddress = process.env.REACT_APP_FOO_TOKEN_ADDRESS;
    const barTokenAddress = process.env.REACT_APP_BAR_TOKEN_ADDRESS;
    const exchange_rate = amountFoo.toString();
    const rate = ethers.utils.parseUnits(exchange_rate);
    await context?.exchange
      .connect(context?.wallet)
      .swap(fooTokenAddress, barTokenAddress, rate);
  };

  return (
    <div className="flex justify-center py-32">
      <div className="flex bg-app-dark-swap flex-col px-3 py-5 w-96 border-app-dark rounded-2xl ">
        <h2 className="mb-3 text-3xl px-3">FooBar Swap</h2>
        <div className="flex flex-col gap-5">
          <SelectToken token="Foo" setAmount={setAmountFoo} />
          <button
            onClick={HandleMint}
            className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900"
          >
            Mint
          </button>
          <button
            onClick={HandleApprove}
            className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900"
          >
            Approve
          </button>
          <button
            onClick={HandleSwap}
            className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
