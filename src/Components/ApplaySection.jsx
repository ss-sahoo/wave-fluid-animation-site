import React from "react";
import page from "../assets/motionarteffect-img10.png";
import section from "../assets/motionarteffect-img11.png";

const ApplaySection = () => {
  return (
    <div className="my-24 mx-4 md:mx-32">
      <h2 className="text-white text-4xl  leading-tight font-medium  tracking-wide text-center">
        Apply On Any Section Or Enable For <br /> Whole Page
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-5 mt-10  md:mt-24 ">
        <div className="flex md:text-start text-center flex-col gap-4 bg-[#101027] p-7 rounded-lg shadow-3xl  shadow-indigo-950">
          <h5 className="text-white text-2xl">Apply On Section</h5>{" "}
          <p className="text-gray-400">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={section} alt="" />
        </div>
        <div className=" bg-[#101027] md:text-start text-center flex flex-col gap-4 md:mt-28 p-7 rounded-lg shadow-inner shadow-3xl  shadow-indigo-950">
          <h5 className="text-white text-2xl">Apply On Pagen</h5>{" "}
          <p className="text-gray-400">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={page} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ApplaySection;
