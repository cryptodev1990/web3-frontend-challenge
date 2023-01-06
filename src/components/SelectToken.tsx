import React from "react";

declare type PropType = {
  setToken: Function;
  token: boolean;
  setAmount: Function;
};

const SelectToken = (props: PropType) => {

  return (
    <div className="flex justify-between rounded-lg px-3 py-5 bg-app-dark-token">
      <input
        className="bg-app-dark-token outline-none font-bold text-app-dark-amountColor placeholder-app-dark-amountColor text-3xl w-1/2"
        type="number"
        min="1"
        placeholder="1"
        name="tokenAmount"
        onChange={async (e) => await props.setAmount(e?.target.value)}
      />
      <h2 className="bg-app-dark-select px-8 py-2 rounded-full font-semibold text-xl hover:cursor-pointer active:bg-gray-700" onClick={async () => await props.setToken(!props.token)}>
        {props.token ? "Foo" : "Bar"}
      </h2>
    </div>
  );
};

export default SelectToken;