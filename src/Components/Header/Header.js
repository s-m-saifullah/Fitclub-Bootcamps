import logo from "../../logo.svg";
import React from "react";

const Header = () => {
  return (
    <div className="lg:w-10/12 mx-auto pt-20 pb-5 lg:col-span-3 row-span-full order-1">
      <div className="flex items-center gap-3">
        <img className="w-10" src={logo} alt="" />
        <h2 className="text-4xl">FITCLUB BOOTCAMPS</h2>
      </div>
    </div>
  );
};

export default Header;
