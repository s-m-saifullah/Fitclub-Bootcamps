import React from "react";

const AddBreak = ({ setBonusTimeInPage }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Add A Break</h2>
      <div className="bg-teal-50 py-3 px-5 my-5 rounded-xl flex justify-between">
        <div className="bg-white rounded-lg border-2 border-green-400">
          <button className="text-lg py-1 px-3 ">
            <span onClick={(e) => setBonusTimeInPage(e)}>10</span>s
          </button>
        </div>
        <div className="bg-white rounded-lg border-2 border-green-400">
          <button className="text-lg py-1 px-3">
            <span onClick={(e) => setBonusTimeInPage(e)}>20</span>s
          </button>
        </div>
        <div className="bg-white rounded-lg border-2 border-green-400">
          <button className="text-lg py-1 px-3">
            <span onClick={(e) => setBonusTimeInPage(e)}>30</span>s
          </button>
        </div>
        <div className="bg-white rounded-lg border-2 border-green-400">
          <button className="text-lg py-1 px-3">
            <span onClick={(e) => setBonusTimeInPage(e)}>40</span>s
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBreak;
