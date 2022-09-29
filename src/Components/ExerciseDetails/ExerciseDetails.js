import React, { useState } from "react";

const ExerciseDetails = ({ totalTime }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Exercise Details</h2>
      <div className="bg-teal-50 py-3 px-5 my-5 rounded-xl flex justify-between">
        <h5 className="font-semibold">Exercise Time</h5>
        <p className="text-zinc-400">{totalTime} second</p>
      </div>
      <div className="bg-teal-50 py-3 px-5 my-5 rounded-xl flex justify-between">
        <h5 className="font-semibold">Bonus Time</h5>
        <p className="text-zinc-400">20 second</p>
      </div>
      <button className="mt-10 btn w-full btn-primary">
        Activity Completed
      </button>
    </div>
  );
};

export default ExerciseDetails;
