import React from "react";
import browse from "../assets/motionarteffect-img8.png";

const Browse = () => {
  return (
    <div className="my-24 mx-4 md:mx-32 bg-[#101027] md:p-10 p-6 gap-5  rounded-2xl flex flex-col  items-center justify-center md:gap-7 shadow-3xl  shadow-indigo-950">
      <h4 className="text-white text-2xl font-medium text-center leading-tight  tracking-wider">
        Supported by All Popular Browsers
      </h4>
      <p className="text-gray-400 text-base text-center ">
        Rest assured, Motion Art is designed to be compatible <br /> with all
        major web browsers.
      </p>
      <img src={browse} alt="" />
    </div>
  );
};

export default Browse;
