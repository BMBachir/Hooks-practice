import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
const Button = () => {
  const { setUserOne } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setUserOne("Boub");
      }}
      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 mt-6 "
    >
      Change name
    </button>
  );
};

export default Button;
