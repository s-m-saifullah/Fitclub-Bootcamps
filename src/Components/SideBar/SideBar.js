import React from "react";
import AddBreak from "../AddBreak/AddBreak";
import UserInfo from "../UserInfo/UserInfo";

const SideBar = () => {
  return (
    <div className="bg-white px-5 py-7 col-span-1 row-span-5 order-3 lg:order-2 lg:sticky lg:top-0">
      <UserInfo />
      <AddBreak />
    </div>
  );
};

export default SideBar;
