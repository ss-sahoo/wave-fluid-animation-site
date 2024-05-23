import React from "react";
import motiongrad from "../assets/MotionArtEffect-logo.png";

const LandingPage = () => {
  return (
    <div className=" my-8 mx-4 md:mx-32">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <img src={motiongrad} alt="" />
        <button className="md:text-black md:text-lg md:font-medium md:bg-[#FFF] md:px-8 md:py-4 md:rounded md:border-none lg:block hidden">
          Purchase Now{" "}
        </button>
      </div>
      <div className="md:mt-24 mt-10 flex md:flex-row flex-col gap-10 md:gap-[10rem] leading-5">
        {" "}
        <div className=" text-xl md:text-start text-center">
          <p className="bg-gradient-to-r from-[#F87516] via-[#5E11FF] to-[#5E11FF] inline-block text-transparent bg-clip-text">
            Transform
          </p>{" "}
          <br />
          <p className="bg-gradient-to-r from-[#F87516] via-[#5E11FF] to-[#5E11FF] inline-block text-transparent bg-clip-text">
            Your Website
          </p>
          <p className="text-xl mt-2 text-white">
            With Motion Art <br />
            Effect
          </p>
        </div>
        <div className="lg:w-[600px] w-full">
          <h2 className="text-white text-4xl md:text-7xl  md:leading-tight  tracking-wide">
            Attract Your Visitors Attention With Colorful
            <span className="bg-gradient-to-r from-[#F87516] via-[#5E11FF] to-[#5E11FF] inline-block text-transparent bg-clip-text">
              Motion Art Effect
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-5">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
