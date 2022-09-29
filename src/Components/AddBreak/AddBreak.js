import React from "react";

const AddBreak = ({ setBonusTimeOnClick }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Add A Break</h2>
      <div className="bg-teal-50 py-3 px-5 my-5 rounded-xl flex justify-between">
        <button className="text-lg py-1 px-3 bg-white rounded-lg border-2 border-green-400">
          <span onClick={(e) => setBonusTimeOnClick(e)}>10</span>s
        </button>

        <button className="text-lg py-1 px-3 bg-white rounded-lg border-2 border-green-400">
          <span onClick={(e) => setBonusTimeOnClick(e)}>20</span>s
        </button>

        <button className="text-lg py-1 px-3 bg-white rounded-lg border-2 border-green-400">
          <span onClick={(e) => setBonusTimeOnClick(e)}>30</span>s
        </button>

        <button className="text-lg py-1 px-3 bg-white rounded-lg border-2 border-green-400">
          <span onClick={(e) => setBonusTimeOnClick(e)}>40</span>s
        </button>
      </div>
    </div>
  );
};

export default AddBreak;
