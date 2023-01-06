import { useState, useEffect } from "react";

declare type HeaderType = {
  content: String;
  clicked: Boolean;
  handleClick: VoidFunction;
};

const Navbarbutton = (props: HeaderType) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    props.clicked ? setColor("") : setColor("text-app-dark-headerColor");
  }, [props.clicked]);

  return (
    <div
      className={
        color + " text-xl p-2 rounded-lg hover:bg-app-dark-token cursor-pointer"
      }
      onClick={props.handleClick}
    >
      {props.content}
    </div>
  );
};

export default Navbarbutton;
