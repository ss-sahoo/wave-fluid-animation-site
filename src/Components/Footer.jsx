import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#F87516]  to-[#5E11FF] p-3">
      <div class="flex md:flex-row flex-col justify-between items-center mx-4 md:mx-32">
        <p class="text-white text-sm order-2 md:order-1">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
        <div class="flex gap-5 text-sm text-white order-1 md:order-2">
          <p>Documentation</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
