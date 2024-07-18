import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Contact = () => {
  return (
    <div className="my-10 mx-2 relative max-w-4xl lg:mx-auto bg-blue-600 p-8 flex lg:flex-row flex-col justify-between items-center rounded-lg shadow-lg overflow-hidden">
      <div className="absolute hidden inset-0 right-[-60vw] top-0 lg:flex items-center justify-center">
        <div className="absolute  w-96 h-96 bg-blue-500 rounded-full opacity-30"></div>
        <div className="absolute  w-72 h-72 bg-blue-400 rounded-full opacity-30"></div>
        <div className="absolute  w-48 h-48 bg-blue-300 rounded-full opacity-30"></div>
      </div>
      <div className="flex lg:flex-row flex-col items-center space-x-4 relative z-10">
        <div className="bg-blue-500 flex-col lg:flex-row p-4 rounded-full">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-6-3h2a1 1 0 000-2h-2a1 1 0 100 2zM4 10a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm3 3a1 1 0 100 2h2a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-white my-4">
          <h2 className="text-2xl font-bold">
            Want to delve deeper into the program?
          </h2>
          <p className="text-lg">
            Share your details to receive expert insights from our program team!
          </p>
        </div>
      </div>
      <button className="bg-white my-2 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition relative z-10">
        Get in touch &rarr;
      </button>
    </div>
  );
};

export default Contact;
