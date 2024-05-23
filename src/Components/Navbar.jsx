import React from "react";
import logo from "../assets/motionarteffect-img2.png";

function Navbar() {
  return (
    <div className=" bg-[#2E2E2E] p-2 md:pr-5 flex justify-between">
      <div className="flex items-center">
        <img className="w-10 h-10" src={logo} alt="" />
        <p className="text-white font-bold text-lg md:text-2xl">
          envato<span className="text-[#9AC501] font-normal">market</span>
        </p>
      </div>
      <button className="text-white text-sm bg-[#9AC501] px-5 py-0 rounded border-none">
        Buy now
      </button>
    </div>
  );
}

export default Navbar;
