import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Activities from "./Components/Activities/Activities";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="bg-teal-50 grid grid-cols-1 lg:grid-cols-4 grid-rows-5">
      <Header />
      <SideBar />
      <Activities activities={activities} />
    </div>
  );
}

export default App;
