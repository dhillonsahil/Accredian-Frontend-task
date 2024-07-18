import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const ReferCircles = () => {
  return (
    <div className=" bg-[#f0f4fc]">
      <h2 className={`${poppinsFont.className} text-2xl text-center py-8`}>
        How Do I <span className="text-blue-600">Refer?</span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-around mx-auto items-center w-4/5">
        <div className="relative my-10  w-48 h-48 bg-white rounded-full shadow-md flex flex-col justify-center items-center text-center step">
          <div className="text-5xl text-blue-500 mb-2">
            <FaUserPlus />
          </div>
          <div className="text-gray-700 p-4">
            Submit referrals easily via our website's referral section.
          </div>
        </div>
        <div className="relative my-10  w-48 h-48 bg-white rounded-full shadow-md flex flex-col justify-center items-center text-center step">
          <div className="text-5xl text-blue-500 mb-2">
            <MdOutlineEditNote />
          </div>
          <div className="text-gray-700 p-4">
            Earn rewards once your referral joins an Accredian program.
          </div>
        </div>
        <div className="relative my-10  w-48 h-48 bg-white rounded-full shadow-md flex flex-col justify-center items-center text-center step">
          <div className="text-5xl text-blue-500 mb-2">
            <IoMdWallet />
          </div>
          <div className="text-gray-700 p-4">
            Both parties receive a bonus 30 days after program enrollment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferCircles;
