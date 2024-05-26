import React, { useState } from "react";
import User from "../components/User";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import UserContext from "../Context/UserContext";
function Context() {
  const [userOne, setUserOne] = useState("Mouh");

  const userValues = { userOne, setUserOne };

  return (
    <UserContext.Provider value={userValues}>
      <main className="flex flex-col items-center justify-center h-screen gap-8">
        <h1 className="text-5xl font-bold">Practicing with Hooks</h1>
        <div className="mb-8">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
            to={"/"}
          >
            <IoIosArrowBack />
            Get back
          </Link>
        </div>
        <User />
      </main>
    </UserContext.Provider>
  );
}

export default Context;
