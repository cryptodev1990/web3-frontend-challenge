import React, { useState } from "react";
import SelectToken from "../components/SelectToken";
import { ethers } from "ethers";
import { useAppContext } from "../contexts/AppContext";

const Proposal = () => {

  const context = useAppContext();

  const [amountFoo, setAmountFoo] = useState(1);
  const [amountBar, setAmountBar] = useState(1);

  const exchange_rate : string = (amountFoo / amountBar).toString();
  const rate = ethers.utils.parseUnits(exchange_rate);

  const HandleApprove = async () => await (context as any).fooToken.connect((context as any).wallet).approve((context as any).exchange, rate);

  const HandleSwap = async () => await (context as any).exchange.connect((context as any).wallet).swap((context as any).fooToken, (context as any).barToken, rate);

  return (
    <div className="flex justify-center py-32">
      <div className="flex bg-app-dark-swap flex-col px-3 py-5 w-96 border-app-dark rounded-2xl ">
        <h2 className="mb-3 text-3xl px-3">FooBar Swap</h2>
        <div className="flex flex-col gap-5">
          <SelectToken token="Foo" setAmount={ setAmountFoo } />
          <SelectToken token="Bar" setAmount={ setAmountBar }/>
          <button onClick={HandleApprove} className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900">
            Send Proposal
          </button>
          <button onClick={HandleSwap} className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900">
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
