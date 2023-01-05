import React, { useState } from "react";
import SelectToken from "../components/SelectToken";
import { ethers } from "ethers";
import { useAppContext } from "../contexts/AppContext";
import Button from "../components/Button";

const Swap = () => {
  const context = useAppContext();

  const [fooAmount, setFooAmount] = useState(0);

  const [amountFoo, setAmountFoo] = useState(1);

  const HandleApprove = async () => {
    if (context?.connected === false) {
      window.alert("Please connect Wallet");
    } else {
      const amountNumber = amountFoo.toString();
      setFooAmount(Number(await context?.fooToken.balanceOf(context?.address)));
      const amount = Number(ethers.utils.parseUnits(amountNumber));
      if (amount > fooAmount)
        window.alert("Inputed amount is bigger than your wallet balance!");
      else {
        const exchangeAddress = process.env.REACT_APP_EXCHANGE_ADDRESS;
        await context?.fooToken
          .connect(context?.wallet)
          .approve(exchangeAddress, amount);
      }
    }
  };

  const HandleMint = async () => {
    if (context?.connected === false) {
      window.alert("Please connect Wallet");
    } else {
      await context?.fooToken.connect(context?.wallet).fund();
    }
  };

  const HandleSwap = async () => {
    if (context?.connected === false) {
      window.alert("Please connect Wallet");
    } else {
      const fooTokenAddress = process.env.REACT_APP_FOO_TOKEN_ADDRESS;
      const barTokenAddress = process.env.REACT_APP_BAR_TOKEN_ADDRESS;
      const amountNumber = amountFoo.toString();
      const amount = ethers.utils.parseUnits(amountNumber);
      await context?.exchange
        .connect(context?.wallet)
        .swap(fooTokenAddress, barTokenAddress, amount);
    }
  };

  return (
    <div className="flex justify-center py-32">
      <div className="flex bg-app-dark-swap flex-col px-3 py-5 w-96 border-app-dark rounded-2xl ">
        <h2 className="mb-3 text-3xl px-3">FooBar Swap</h2>
        <div className="flex flex-col gap-5">
          <SelectToken token="Foo" setAmount={setAmountFoo} />
          <Button handleClick={HandleMint} content="Mint" />
          <Button handleClick={HandleApprove} content="Approve" />
          <Button handleClick={HandleSwap} content="Swap" />
        </div>
      </div>
    </div>
  );
};

export default Swap;
