import React from "react";

import Tag from "./tag";
import "./styles.css";

export const Avatar = ({ available, name }) => {
  const availabilityClass = `avatar-user-status ${
    available ? "status-available" : "status-busy"
  }`;

  const nameArray = name.split(" ");
  const initials = nameArray[0][0] + nameArray[nameArray.length - 1][0];

  return (
    <div className="avatar-box">
      <div className="avatar-dp">{initials}</div>
      <div className={availabilityClass}></div>
    </div>
  );
};

export const Card = ({ cardDetails, users }) => {
  const { id, userId, title, tag } = cardDetails;
  // console.log(userName);

  const findUserName = (userId, users) => {
    const user = users.find((ele) => ele.id === userId);
    return user.name;
  };

  const userName = findUserName(userId, users);

  return (
    <div className="card-box">
      <div className="card-head">
        <span id="card-id">{id}</span>
        <div className="card-user">
          <Avatar available={true} name={userName} />
        </div>
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-details">
          <div className="card-tags">
            {tag.map((ele) => {
              return <Tag text={ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};