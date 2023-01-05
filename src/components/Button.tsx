import React from "react";

declare type ButtonInterface = {
  handleClick: any;
  content: string;
};

const Button = (props: ButtonInterface) => {
  return (
    <button
      onClick={props.handleClick}
      className="flex justify-center items-center rounded-full bg-app-blue-swapConnect text-app-blue-swapConnectButton text-2xl py-2 hover:text-app-dark-headerColor active:text-app-blue-connectButton active:bg-blue-900"
    >
      {props.content}
    </button>
  );
};

export default Button;
