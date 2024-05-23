import React from "react";
import magicbar from "../assets/motionarteffect-img5.png";

const MagicBar = () => {
  return (
    <div className="my-24 mx-4 md:mx-32 flex md:flex-row flex-col justify-between">
      <div className="flex flex-col md:items-start items-center justify-center gap-6 md:w-[60%]">
        <h2 className="text-white text-4xl leading-tight font-medium  tracking-wide ">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h2>
        <p className="text-gray-500">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="bg-gradient-to-r from-[#F87516] via-[#5E11FF] to-[#5E11FF] text-center w-full rounded-xl text-lg text-white px-5 py-4 w-[250px] md:w-[300px]">
          Purchase from Envato ➡
        </button>
      </div>
      #F87516
      <img src={magicbar} alt="" />
    </div>
  );
};

export default MagicBar;
