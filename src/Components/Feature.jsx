import React from "react";

const Feature = ({ img, title, text }) => {
  return (
    <div className="flex flex-col  items-start bg-[#101027] p-7 gap-5  rounded-2xl shadow-3xl  shadow-indigo-950">
      <img src={img} alt="" />
      <h4 className="text-white text-2xl font-semibold  leading-tight  tracking-wider">
        {title}
      </h4>
      <p className="text-gray-400 text-base ">{text}</p>
    </div>
  );
};

export default Feature;
