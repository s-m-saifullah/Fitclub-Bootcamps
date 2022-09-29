import React from "react";

const Activity = ({ activity, chooseActivity }) => {
  const { activityName, duration, img, areaFocused } = activity;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={activityName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{activityName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>
          Duration: <span className="font-semibold">{duration}sec</span>
        </p>
        <p>
          Focused Area: <span className="font-semibold">{areaFocused}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => chooseActivity(activity)}
            className="btn w-full btn-primary"
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
