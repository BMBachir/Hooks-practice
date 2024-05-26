import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Context = () => {
  return (
    <main className="flex flex-col items-center justify-center  gap-8">
      <h1 className="text-5xl font-bold mb-9">useRef Hook</h1>
      <div className=" max-w-md mx-auto p-4">
        <div className="mb-8">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
            to={"/"}
          >
            <IoIosArrowBack />
            Get back
          </Link>
        </div>
      </div>

      <div className=""></div>
    </main>
  );
};

export default Context;
