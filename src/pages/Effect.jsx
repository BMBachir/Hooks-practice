import React, { useState } from "react";
import { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Effect = () => {
  const [users, setUsers] = useState([]);
  const [filtredUsers, setFiltredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      console.log(users);
    }
  }, [users]);

  const handleChange = (e) => {
    const filter = users.filter((user) => user.name.includes(e.target.value));
    setFiltredUsers(filter);
  };
  useEffect(() => {
    setFiltredUsers(users);
  }, [users]);

  return (
    <main className="flex flex-col items-center justify-center  gap-8">
      <h1 className="text-5xl font-bold mb-9">useEffect Hook</h1>
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
        <div className=" relative mb-8 " onChange={handleChange}>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search for users"
            type="search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <IoSearchSharp className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex flex-col items-center gap-4">
            {filtredUsers.map((user) => (
              <div key={user.id} className="flex flex-col mb-6">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Effect;
