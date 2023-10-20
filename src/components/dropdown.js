import React, { useState } from "react";

import "./styles.css";
import DownArrow from "../assets/arrow_down.svg";
import { UpdateDisplay } from "./DisplayContext";

const DropdownMenu = ({ list, visible, type }) => {
  const classFordropdown = `dropdownMenu ${visible ? "visible" : ""}`;

  const toggleDisplay = UpdateDisplay();

  return (
    <div className={classFordropdown}>
      {list.map((ele, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              toggleDisplay(i, type);
            }}
            className="dropdownMenuItem"
          >
            <span>{ele}</span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

const Dropdown = ({ name, list }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // const something = UseDisplay();
  // console.log(something);

  // const list = ["Status", "User", "Priority"];

  const toggleDropdownMenu = () => {
    setMenuVisible((prevMenuVisible) => (prevMenuVisible = !menuVisible));
  };

  return (
    <div className="dropdown-box" onClick={toggleDropdownMenu}>
      {name}
      <img src={DownArrow} alt="" />
      <DropdownMenu type={name} list={list} visible={menuVisible} />
    </div>
  );
};

export default Dropdown;
