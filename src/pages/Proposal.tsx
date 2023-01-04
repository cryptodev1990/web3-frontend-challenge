import React from "react";
import SelectToken from "../components/SelectToken";

const Proposal = () => {
  return (
    <div className="flex justify-center py-32">
      <div className="flex bg-app-dark-swap flex-col px-3 py-5 w-96 border-app-dark rounded-2xl ">
        <h2 className="mb-3 text-3xl px-3">FooBar Swap</h2>
        <div className="flex flex-col gap-5">
          <SelectToken token="Foo" />
          <SelectToken token="Bar" />
          <button className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
