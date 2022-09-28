import React from "react";
import Activity from "../Activity/Activity";

const Activities = ({ activities }) => {
  return (
    <div className="lg:w-10/12 mx-auto lg:col-span-3 row-span-4 order-2 lg:order-3">
      <h5 className="text-xl mb-5">Choose Today's Exercise</h5>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
