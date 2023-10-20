import { Avatar } from "./card";
import CardUser from "./card-user";
import Options from "../assets/options.svg";
import Add from "../assets/add.svg";

const TrayUser = ({ trayIconText, cards, sort }) => {
  const newCardsTitle = [...cards].sort((a, b) => {
    return a.title < b.title ? -1 : 1;
  });

  const newCardsPriority = [...cards].sort((a, b) => b.priority - a.priority);

  return (
    <div className="tray">
      <div className="tray-head">
        <div className="tray-id">
          <span className="tray-icon">
            <Avatar available={true} name={trayIconText} />
          </span>
          <span className="tray-group">{trayIconText}</span>
          <span className="tray-card-count">
            {sort === 1 ? newCardsTitle.length : newCardsTitle.length}
          </span>
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
