import { useState } from "react";

import DownArrow from "../assets/arrow_down.svg";
import { UpdateDisplay } from "./DisplayContext";

import "./styles.css";

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
              localStorage.setItem(type === "group" ? "grouping" : "ordering", i);
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

const Dropdown = ({ current, name, list }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDropdownMenu = () => {
    setMenuVisible((prevMenuVisible) => (prevMenuVisible = !menuVisible));
  };

  return (
    <div className="dropdown-box" onClick={toggleDropdownMenu}>
      {current}
      <img src={DownArrow} alt="" />
      <DropdownMenu type={name} list={list} visible={menuVisible} />
    </div>
  );
};

export default Dropdown;
