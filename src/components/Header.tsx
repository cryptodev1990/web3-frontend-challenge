import React, { useState, useEffect } from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../assets/menu.svg";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const context = useAppContext();

  const navigate = useNavigate();
  const [id, setId] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [content, setContent] = useState("Connect");

  const SwapClick = () => {
    setId(1);
    navigate("/swap");
  };

  const SwapHambugerClick = () => {
    setId(1);
    navigate("/swap");
    setOpenMenu(false);
  };

  const ViewClick = () => {
    setId(2);
    navigate("/view");
  };

  const ViewHambugerClick = () => {
    setId(2);
    navigate("/view");
    setOpenMenu(false);
  };

  const truncAddress = (str:string) => {
    return `${str.slice(0,6)}...${str.slice(str.length - 6)}`;
  }

  const handleConnect = async () => {
    await context?.connectWallet();
  }

  useEffect(() => {
    if(context?.address !== "") {
      setContent(truncAddress((context as any).address));
    }
  }, [context]);
  
  return (
    <div className="flex justify-between">
      <div className="hidden md:flex gap-8 items-center">
        <h1 className="text-2xl mr-10">FooBar</h1>
        <NavButton
          content="Swap"
          clicked={id === 1}
          handleClick={SwapClick}
        />
        <NavButton
          content="Balance"
          clicked={id === 2}
          handleClick={ViewClick}
        />
      </div>
      <button
        onClick={handleConnect}
        className="hidden md:flex px-8 py-2 rounded-full text-lg font-bold hover:text-app-dark-headerColor bg-app-blue-connect text-app-blue-connectButton active:text-blue-600 active:bg-blue-500"
      >
        {content}
      </button>
      <div className="md:hidden flex" onClick={() => setOpenMenu(!openMenu)}>
        <img src={HamburgerMenu} alt="menu" title="menu" />
      </div>
      <div
        className={
          (openMenu ? "-translate-x-0" : "translate-x-full") +
          " fixed top-0 right-0 w-screen h-full z-50 bg-black bg-opacity-80 transform duration-200"
        }
      >
        <div
          className="h-36 flex bg-black items-center pr-10 justify-end"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <p className="text-5xl cursor-pointer text-white">X</p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-8 pt-10">
          <NavButton
            content="Swap"
            clicked={id === 1}
            handleClick={SwapHambugerClick}
          />
          <NavButton
            content="Balance"
            clicked={id === 2}
            handleClick={ViewHambugerClick}
          />
          <button
            className="px-8 py-2 text-xl font-bold active:text-blue-600 active:bg-blue-500 bg-app-blue-connect rounded-full"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            {content}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
