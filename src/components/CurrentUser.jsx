import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const CurrentUser = () => {
  const { userOne } = useContext(UserContext);

  return (
    <div>
      <h1>User: {userOne}</h1>
    </div>
  );
};

export default CurrentUser;
