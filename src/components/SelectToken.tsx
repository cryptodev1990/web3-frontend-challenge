import React from "react";

declare type PropType = {
  token: String;
  setAmount: any
};

const SelectToken = (props: PropType) => {

  return (
    <div className="flex justify-between rounded-lg px-3 py-5 bg-app-dark-token">
      <input
        className="bg-app-dark-token outline-none font-bold text-app-dark-amountColor placeholder-app-dark-amountColor text-3xl w-1/2"
        type="number"
        min={1}
        placeholder="1"
        name="tokenAmount"
        onChange={(e) => props.setAmount((e as any).target.value)}
      />
      <h2 className="bg-app-dark-select px-8 py-2 rounded-full font-semibold text-xl">
        {props.token}
      </h2>
    </div>
  );
};

export default SelectToken;