import React from "react";
import Feature from "./Feature";
import img1 from "../assets/motionarteffect-img6.png";
import img2 from "../assets/motionarteffect-img7.png";
import img3 from "../assets/motionarteffect-img9.png";

const FeatureSection = () => {
  return (
    <div className="mt-24 mx-4 md:mx-32 flex flex-col items-center justify-center gap-5">
      <h2 className="text-white text-4xl  leading-tight font-semibold  tracking-wider leading-snug text-center">
        An All-Round Plugin With <br /> Powerful Features
      </h2>
      <p className="text-gray-400 md:text-xl w-[60%]  text-base text-center">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </p>
      <div className="flex md:flex-row flex-col my-16 gap-5 items-center justify-center">
        <Feature
          img={img3}
          title="Light Weight"
          text="Motion Art for Elementor is designed to be lightweight."
        />
        <Feature
          img={img1}
          title="100% Responsive"
          text="Create a consistent visual experience across all devices."
        />
        <Feature
          img={img2}
          title="User Friendly Interface
          "
          text="Ensure a smooth experience for both applicants and administrators."
        />
      </div>
    </div>
  );
};

export default FeatureSection;
