import "./Priority.css";
import React, { useState } from "react";
import CustomTooltip from "../Tooltip/CustomTooltip";

const Priority = (props) => {
  const { flag } = props;
  const priorityFlag = process.env.PUBLIC_URL + `/images/priority/${flag}.png`;

  return (
    <div className="priority-container">
      <img className="priority" src={priorityFlag} alt="priority" />
    </div>
  );
};

export default Priority;
