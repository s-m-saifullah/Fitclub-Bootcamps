import logo from "../../logo.svg";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pt-20 pb-5 lg:col-span-3 order-1">
      <div className="flex items-center justify-center lg:justify-start gap-3">
        <img className="w-10" src={logo} alt="logo" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl">FITCLUB BOOTCAMPS</h2>
      </div>
    </div>
  );
};

export default Header;
