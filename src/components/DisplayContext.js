import React, { useContext, useState } from "react";

const DisplayContext = React.createContext();
const UpdateDisplayContext = React.createContext();

export const UseDisplay = () => {
  return useContext(DisplayContext);
};

export const UpdateDisplay = () => {
  return useContext(UpdateDisplayContext);
};

const DisplayProvider = ({ children }) => {
  const [filters, setFilters] = useState({ grouping: 0, ordering: 0 });

  const setFilter = (idx, cat) => {
    switch (cat) {
      case "group":
        setFilters((prevFilters) => ({ ...prevFilters, grouping: idx }));
        break;
      case "order":
        setFilters((prevFilters) => ({ ...prevFilters, ordering: idx }));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <DisplayContext.Provider value={filters}>
        <UpdateDisplayContext.Provider value={setFilter}>
          {children}
        </UpdateDisplayContext.Provider>
      </DisplayContext.Provider>
    </>
  );
};

export default DisplayProvider;
