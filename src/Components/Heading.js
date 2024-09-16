import React from "react";
import "../Styles/Heading.css";

const Heading = ({ Text }) => {
  return (
    <div className="Heading">
      <div></div>
      <p>{Text}</p>
      <div></div>
    </div>
  );
};

export default Heading;
