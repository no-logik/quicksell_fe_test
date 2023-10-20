import Tag from "./tag";
import { groups } from "./categories";

import "./styles.css";

const CardUser = ({ cardDetails }) => {
  const { id, title, tag, status } = cardDetails;

  const categories = groups();

  const icon = categories[0].find((ele) => {
    return ele.trayGroup === status;
  });

  return (
    <div className="card-box">
      <div className="card-head">
        <span id="card-id">{id}</span>
      </div>
      <div className="card-body">
        <div className="card-title">
          <img className="svgImg" src={icon.trayIcon} alt="" />
          <span>{title} </span>
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

export default CardUser;
