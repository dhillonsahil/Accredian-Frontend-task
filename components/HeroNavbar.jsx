import React from "react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});
const HeroNavbar = () => {
  return (
    <div className="items-center flex w-screen justify-center">
      <div
        className={`bg-blue-100  flex  flex-row p-2 rounded-full max-w- justify-center  ${poppinsFont.className}`}
      >
        <div className="mx-2 px-2 md:mx-6 text-blue-600 items-center">
          Refer
          <p className="w-1 h-1 mx-auto bg-blue-600 rounded-full"></p>
        </div>
        <p className="mx-2 px-2 md:mx-6">Benefits</p>
        <p className="mx-2 px-2 md:mx-6">FAQs</p>
        <p className="mx-2 px-2 md:mx-6">Support</p>
      </div>
    </div>
  );
};

export default HeroNavbar;
