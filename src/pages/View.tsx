import React, { useState } from "react";

const View = () => {
  const [fooAmount, setFooAmount] = useState(0);
  const [barAmount, setBarAmount] = useState(0);

  return (
    <div className="flex justify-center py-32">
      <div className="flex flex-col gap-4 w-96 bg-app-dark-swap rounded-xl">
        <div className="flex justify-between py-3 px-5 bg-app-dark-select rounded-xl">
          <h3 className="text-app-dark-amountColor text-2xl font-semibold">
            Foo
          </h3>
          <h3 className="text-app-dark-amountColor text-2xl font-semibold">{fooAmount}</h3>
        </div>
        <div className="flex justify-between py-3 px-5 bg-app-dark-select rounded-xl">
          <h3 className="text-app-dark-amountColor text-2xl font-semibold">
            Bar
          </h3>
          <h3 className="text-app-dark-amountColor text-2xl font-semibold">{barAmount}</h3>
        </div>
      </div>
    </div>
  );
};

export default View;
