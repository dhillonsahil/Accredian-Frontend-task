"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Questions = [
  {
    question:
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    asnwer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "How to Use",
    asnwer:
      "Click On Refer Button and Fill the Details. Whenever the user signup for the course your requirements will be met.",
  },
];

const ReferFaq = ({ openPopup }) => {
  const [showQuestion, setShowQuestion] = React.useState(0);
  return (
    <div className="mt-16 mx-10 lg:mx-20">
      <div className="flex justify-center mb-20">
        <button
          onClick={openPopup}
          className="px-11 py-2 text-xl bg-blue-600 text-white rounded-lg"
        >
          Refer Now
        </button>
      </div>
      <div className="text-center">
        <h1 className={`text-xl ${poppinsFont.className}`}>
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/5 flex flex-col my-4">
          <button
            className=" py-3 hover:bg-gray-100 px-4 border border-gray-600 mx-2 my-3 rounded-lg"
            onClick={() => setShowQuestion(0)}
          >
            Eligiblity
          </button>
          <button
            className="px-4 hover:bg-gray-100 py-3 border border-gray-600 mx-2 my-3 rounded-lg"
            onClick={() => setShowQuestion(1)}
          >
            How to Use?
          </button>
        </div>
        <div className="flex text-sm mx-6 flex-col   items-center justify-center">
          <p className="text-lg  mt-4 text-justify text-blue-600">
            {Questions[showQuestion].question}
          </p>
          <p className="text-lg lg:w-[60vw] my-4 text-justify ">
            {Questions[showQuestion].asnwer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferFaq;
