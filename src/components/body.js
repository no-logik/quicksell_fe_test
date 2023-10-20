import Tray from "./tray";
import TrayUser from "./tray-user";
import { groups } from "../components/categories";
import { UseDisplay } from "./DisplayContext";

import "./styles.css";

const Body = ({ data }) => {
  const { grouping, ordering } = UseDisplay();
  const categories = groups();

  if (grouping !== 1) {
    return (
      <div className="body-container">
        {categories[grouping].map((ele, i) => {
          return (
            <Tray
              key={i}
              trayIcon={ele.trayIcon}
              trayIconText={ele.trayGroup}
              sort={ordering}
              users={data.users}
              cards={data.tickets.filter((e) => {
                if (grouping === 0) return e.status === ele.trayGroup;
                else if (grouping === 2) return e.priority === ele.priority;
              })}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="body-container">
        {data.users.map((ele, i) => (
          <TrayUser
            key={i}
            trayIconText={ele.name}
            sort={ordering}
            cards={data.tickets.filter((e) => e.userId === ele.id)}
            users={data.users}
          />
        ))}
      </div>
    );
  }
};

export default Body;
