import Tag from "./tag";
import { groups } from "./categories";
import { UseDisplay } from "./DisplayContext";

import "./styles.css";

export const Avatar = ({ available, name }) => {
  const availabilityClass = `avatar-user-status ${
    available ? "status-available" : "status-busy"
  }`;

  const nameArray = name.split(" ");
  const initials = nameArray[0][0] + nameArray[nameArray.length - 1][0];

  const colorArr = [225, 225, 225];

  for (let i = 0; i < 3; i++) {
    colorArr[i] = Math.floor(Math.random() * 225 + 150);
  }

  const color = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;

  return (
    <div className="avatar-box">
      <div className="avatar-dp" style={{ backgroundColor: color }}>
        {initials}
      </div>
      <div className={availabilityClass}></div>
    </div>
  );
};

export const Card = ({ cardDetails, users }) => {
  const categories = groups();
  const { grouping, ordering } = UseDisplay();
  const { id, userId, title, tag, status } = cardDetails;

  const findUserName = (userId, users) => {
    const user = users.find((ele) => ele.id === userId);
    return user.name;
  };

  const userName = findUserName(userId, users);

  const icon = categories[0].find((ele) => {
    return ele.trayGroup === status;
  });

  return (
    <div className="card-box">
      <div className="card-head">
        <span id="card-id">{id}</span>
        <div className="card-user">
          <Avatar available={true} name={userName} />
        </div>
      </div>
      <div className="card-body">
        <div className="card-title">
          {grouping === 2 ? <img className="svgImg" src={icon.trayIcon} alt="" /> : ""}
          <span>{title}</span>
        </div>
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
