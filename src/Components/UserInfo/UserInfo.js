import React from "react";

const UserInfo = () => {
  return (
    <div>
      <div className="flex gap-3">
        <img
          className="w-12 rounded-full"
          src="./images/Saifullah_300.jpg"
          alt="profile"
        />
        <div>
          <h5 className="text-lg">S. M. Saifullah</h5>
          <div className="flex gap-1 items-center">
            <img className="w-4" src="./images/location-pin.png" alt="" />
            <p className="text-xs text-zinc-400">Chattogram, Bangladesh </p>
          </div>
        </div>
      </div>
      <div className="bg-teal-50 py-3 px-5 my-5 rounded-xl flex justify-between">
        <div>
          <h4 className="text-2xl font-bold">
            90<span className="text-zinc-400 text-sm font-normal">kg</span>
          </h4>
          <p>Weight</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">6.0</h4>
          <p>Height</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">
            30<span className="text-zinc-400 text-sm font-normal">yrs</span>
          </h4>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
