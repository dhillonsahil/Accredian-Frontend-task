import Image from "next/image";
import React from "react";

const Hero = ({ openPopup }) => {
  return (
    <div className="flex mx-2 items-center my-5 w-screenflex-col  md:flex-row justify-center">
      <div className="my-9 bg-blue-100 overflow-hidden flex-col md:flex-row flex max-w-4xl rounded-lg">
        <div className="py-6 pl-5 flex  flex-col  justify-center item">
          <h1 className="text-5xl font-bold">Let's Learn & Earn</h1>
          <div className="mx-2 mt-6">
            <p className="text-lg">
              Get a chance to win up-to{" "}
              <span className="font-bold text-blue-600">Rs. 15000</span>
            </p>
            <button
              onClick={openPopup}
              className="my-4 bg-blue-400 mx-auto py-2 px-4 text-white rounded-lg "
            >
              Refer Now
            </button>
          </div>
        </div>
        <Image src="/refer.png" width={600} height={600} alt="Refer Image" />
      </div>
    </div>
  );
};

export default Hero;
