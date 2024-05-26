import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-5xl font-bold">Practice with Hooks</h1>
      <div className="flex gap-4">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  "
          to={"/useref"}
        >
          Learn More
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  "
          to={"/useEffect"}
        >
          useEffect
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  "
          href="#"
        >
          useRef
        </Link>
      </div>
    </main>
  );
};

export default Home;