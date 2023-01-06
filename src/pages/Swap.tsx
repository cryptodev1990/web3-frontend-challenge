import React, { useState, useEffect } from "react";
import SelectToken from "../components/SelectToken";
import { ethers } from "ethers";
import { useAppContext } from "../contexts/AppContext";
import Button from "../components/Button";

const Swap = () => {
  const context = useAppContext();

  const [fooBalance, setFooBalance] = useState(0);
  const [barBalance, setBarBalance] = useState(0);
  const [amount, setAmount] = useState(1);
  const [isFooToken, setIsFooToken] = useState(true);

  const Balance = async () => {
    if (context?.connected === true) {
      setFooBalance(
        Number(await context?.fooToken.balanceOf(context?.address)) / 10 ** 18
      );
      setBarBalance(
        Number(await context?.barToken.balanceOf(context?.address)) / 10 ** 18
      );
    }
  };

  useEffect(() => {
    Balance();
  }, [context]);

  const HandleApprove = async () => {
    if (context?.connected === false) {
      window.alert("Please connect Wallet");
    } else {
      const tokenAmount = Number(ethers.utils.parseUnits(amount.toString())) / 10 **18;
      let balance = isFooToken ? fooBalance : barBalance;
      if (tokenAmount > balance)
        window.alert("Inputed amount is bigger than your wallet balance!");
      else {
        const exchangeAddress = process.env.REACT_APP_EXCHANGE_ADDRESS;
        isFooToken
          ? await context?.fooToken
              .approve(exchangeAddress, ethers.BigNumber.from(tokenAmount))
          : await context?.barToken
              .approve(exchangeAddress, ethers.BigNumber.from(tokenAmount));
      }
    }
  };

  const HandleMint = async () => {
    if (context?.connected === false) {
      window.alert("Please connect Wallet");
    } else {
      await context?.fooToken.fund();
    }
  };

  const HandleSwap = async () => {
    if (context?.connected === false) {
      window.alert("Please connect Wallet");
    } else {
      const fooTokenAddress = process.env.REACT_APP_FOO_TOKEN_ADDRESS;
      const barTokenAddress = process.env.REACT_APP_BAR_TOKEN_ADDRESS;
      const tokenAmount = Number(ethers.utils.parseUnits(amount.toString())) / 10 **18;
      isFooToken
        ? await context?.exchange
            .swap(fooTokenAddress, barTokenAddress, ethers.BigNumber.from(tokenAmount))
        : await context?.exchange
            .swap(barTokenAddress, fooTokenAddress, ethers.BigNumber.from(tokenAmount));
    }
  };

  return (
    <div className="flex justify-center py-32">
      <div className="flex bg-app-dark-swap flex-col px-3 py-5 w-96 border-app-dark rounded-2xl ">
        <h2 className="mb-3 text-3xl px-3">FooBar Swap</h2>
        <div className="flex flex-col gap-5">
          <SelectToken
            setToken={setIsFooToken}
            setAmount={setAmount}
            token={isFooToken}
          />
          <Button handleClick={HandleMint} content="Mint" />
          <Button handleClick={HandleApprove} content="Approve" />
          <Button handleClick={HandleSwap} content="Swap" />
        </div>
      </div>
    </div>
  );
};

export default Swap;
