import React from "react";

import "./styles.css";

const Tag = ({ text }) => {
  return <div className="tag">&#9210; {text}</div>;
};

export default Tag;
