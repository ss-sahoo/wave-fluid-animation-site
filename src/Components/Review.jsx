import React from "react";
import star from "../assets/motionarteffect-img4.png";

const Review = ({ img }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={img} alt="" />
      <div className="flex flex-col gap-5">
        <img src={star} alt="" />
        <p className="text-gray-300">4.5 Score, 9 Reviews</p>
      </div>
    </div>
  );
};

export default Review;
