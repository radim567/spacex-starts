import React, { useEffect, useState } from "react";
import LaunchesDetail from "./LaunchesDetail";
import axios from "axios";

const launchesURL = "https://api.spacexdata.com/v5/launches/past";

function LaunchesList() {
  const [allLaunches, setAllLaunches] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(launchesURL);
      setAllLaunches(response?.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <LaunchesDetail allLaunches={allLaunches} />;
}

export default LaunchesList;
