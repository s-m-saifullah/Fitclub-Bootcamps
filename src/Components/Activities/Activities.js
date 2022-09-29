import React from "react";
import Activity from "../Activity/Activity";

const Activities = ({ activities, chooseActivity }) => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto lg:col-span-3 order-2 lg:order-3">
      <h5 className="text-xl mb-5">Choose Today's Exercise</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {activities.map((activity) => (
          <Activity
            activity={activity}
            key={activity.id}
            chooseActivity={chooseActivity}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
