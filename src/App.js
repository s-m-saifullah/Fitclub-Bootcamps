import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Activities from "./Components/Activities/Activities";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  const [chosenActivity, setChosenActivity] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [bonusTime, setBonusTime] = useState(localStorage.getItem("bonusTime"));

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const chooseActivity = (selectedActivity) => {
    const addedActivity = chosenActivity;
    addedActivity.push(selectedActivity);
    setChosenActivity(addedActivity);
    const timeTaken = chosenActivity.reduce(
      (prevTime, currentActivity) => prevTime + currentActivity.duration,
      0
    );

    setTotalTime(timeTaken);
  };

  const setBonusTimeOnClick = (elem) => {
    const selectedBonusTime = elem.target.innerText;
    localStorage.setItem("bonusTime", selectedBonusTime);
    setBonusTime(localStorage.getItem("bonusTime"));
  };

  return (
    <div className="bg-teal-50 grid grid-cols-1 lg:grid-cols-4">
      <Header />
      <SideBar
        totalTime={totalTime}
        setBonusTimeOnClick={setBonusTimeOnClick}
        bonusTime={bonusTime}
      />
      <Activities activities={activities} chooseActivity={chooseActivity} />
    </div>
  );
}

export default App;
