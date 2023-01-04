import React from "react";

declare type PropType = {
  token: String;
};

const SelectToken = (props: PropType) => {
  return (
    <div className="flex justify-between rounded-lg px-3 py-5 bg-app-dark-token">
      <input
        className="bg-app-dark-token outline-none font-bold text-app-dark-amountColor placeholder-app-dark-amountColor text-3xl w-1/2"
        type="number"
        placeholder="0"
      />
      <h4 className="bg-app-dark-select px-8 py-2 rounded-full font-semibold text-xl">
        {props.token}
      </h4>
    </div>
  );
};

export default SelectToken;
