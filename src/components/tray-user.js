import React from "react";

import Options from "../assets/options.svg";
import Add from "../assets/add.svg";

import { Avatar } from "./card";
import CardUser from "./card-user";

const TrayUser = ({ trayIconText, cards, sort }) => {
  const newCardsTitle = [...cards].sort((a, b) => {
    return a.title < b.title ? -1 : 1;
  });

  const newCardsPriority = [...cards].sort((a, b) => b.priority - a.priority);
  // console.log(cards);

  return (
    <div className="tray">
      <div className="tray-head">
        <div className="tray-id">
          <span className="tray-icon">
            <Avatar available={true} name={trayIconText} />
          </span>
          <span className="tray-group">{trayIconText}</span>
          <span className="tray-card-count">0</span>
        </div>
        <div className="tray-control">
          <span className="tray-add">
            <img src={Add} alt="add" />
          </span>
          <span className="tray-options">
            <img src={Options} alt="Options" />
          </span>
        </div>
      </div>
      {sort === 1 ? (
        <div className="tray-body">
          {newCardsTitle.map((ele, idx) => {
            return <CardUser key={`${ele.id}${idx}`} cardDetails={ele} />;
          })}
        </div>
      ) : (
        <div className="tray-body">
          {newCardsPriority.map((ele, idx) => {
            return <CardUser key={`${ele.id}${idx}`} cardDetails={ele} />;
          })}
        </div>
      )}
    </div>
  );
};

export default TrayUser;
