import React, { useEffect, useState } from "react";
import Body from "./components/body.js";

import "./App.css";

import Filter from "./assets/filter.svg";
import DownArrow from "./assets/arrow_down.svg";
import Dropdown from "./components/dropdown.js";
import DisplayProvider from "./components/DisplayContext.js";
import { UseDisplay } from "./components/DisplayContext.js";

const Display = ({ visible }) => {
  const classForBox = `category-box ${visible ? "visible" : ""}`;
  const groups = ["status", "user", "priority"];
  const orders = ["priority", "title"];

  const { grouping, ordering } = UseDisplay();

  return (
    <div className={classForBox}>
      <div className="category grouping">
        <span>Grouping</span>
        <Dropdown current={groups[grouping]} name={"group"} list={groups} />
      </div>
      <div className="category ordering">
        <span> Ordering </span>
        <Dropdown current={orders[ordering]} name={"order"} list={orders} />
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [displayVisible, setDisplayVisible] = useState(false);

  useEffect(() => {
    const URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const toggleDisplayBox = () => {
    setDisplayVisible((prevDisplayVisible) => (prevDisplayVisible = !displayVisible));
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <DisplayProvider>
      <header className="header">
        <div className="display-button" onClick={toggleDisplayBox}>
          <span className="display-icons">
            <img src={Filter} alt="" />
          </span>
          <span className="text">Display</span>
          <span className="display-icons">
            <img src={DownArrow} alt="" />
          </span>
        </div>
        <Display visible={displayVisible} />
      </header>
      <Body data={data} />
    </DisplayProvider>
  );
};

export default App;
