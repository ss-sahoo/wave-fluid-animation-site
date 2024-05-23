import React from "react";
import Review from "./Review";
import img1 from "../assets/motionarteffect-img1.png";
import img2 from "../assets/motionarteffect-img2.png";
import img3 from "../assets/motionarteffect-img3.png";

const ReviewSection = () => {
  return (
    <div className=" my-24 mx-4 md:mx-32">
      <h3 className="text-gray-300 text-center text-xl">
        Trusted by thousands of users around the world
      </h3>
      <div className="flex md:flex-row flex-col items-center gap-10 justify-between mt-24">
        <Review img={img2} />
        <Review img={img1} /> <Review img={img3} />
      </div>
    </div>
  );
};

export default ReviewSection;
