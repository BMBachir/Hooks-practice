import React from "react";

const Card = ({ children }) => {
  return (
    <h1 className="p-4 border rounded-lg shadow-lg bg-white ">{children}</h1>
  );
};

export default Card;
