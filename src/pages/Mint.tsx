import React from "react";
import { useAppContext } from "../contexts/AppContext";

const Mint = () => {

  const context = useAppContext();

  const HandleMint = async () => await context?.fooToken.connect(context?.wallet).fund();

  return (
    <div className="flex justify-center py-32">
      <div className="flex flex-col gap-6 bg-app-dark-swap px-5 py-10 rounded-xl w-96">
        <div className="text-2xl font-semibold">Mint</div>
        <input
          className="flex bg-app-dark-token rounded-md px-4 py-3 font-semibold text-2xl text-app-dark-amountColor placeholder-app-dark-amountColor outline-none"
          placeholder="Input address"
        />
        <button onClick={HandleMint} className="flex bg-app-blue-connect active:bg-blue-900 rounded-full justify-center py-3 text-app-blue-connectButton text-2xl font-semibold">
          Mint
        </button>
      </div>
    </div>
  );
};

export default Mint;
