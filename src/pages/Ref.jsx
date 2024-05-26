import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

const Ref = () => {
  return (
    <main className="flex flex-col items-center justify-center  gap-8">
      <div className="fixed bottom-8 right-8">
        <div className="cursor-pointer bg-gray-900 p-2 rounded-full ">
          <FaArrowUp size={30} color="white" />
        </div>
      </div>
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

      <div className="grid grid-cols-1 gap-4 items-center justify-center">
        <div className="flex flex-col items-center space-y-4 mb-11">
          <img
            width={300}
            height={300}
            className="rounded-lg aspect-square object-cover"
            src="https://picsum.photos/230/600"
            alt="Photo 1"
          />
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Paragraph 1</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              eget aliquam nisl nisl eget nisl.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-11">
          <img
            alt="Photo 2"
            className="aspect-square object-cover rounded-lg"
            height={300}
            src="https://picsum.photos/230/200"
            width={300}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Paragraph 2</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam
              nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl
              nisl eget nisl.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-11">
          <img
            alt="Photo 3"
            className="aspect-square object-cover rounded-lg"
            height={300}
            src="https://picsum.photos/130/300"
            width={300}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Paragraph 3</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              eget aliquam nisl nisl eget nisl.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-11">
          <img
            alt="Photo 4"
            className="aspect-square object-cover rounded-lg"
            height={300}
            src="https://picsum.photos/240/300"
            width={300}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Paragraph 4</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam
              nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl
              nisl eget nisl.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ref;
