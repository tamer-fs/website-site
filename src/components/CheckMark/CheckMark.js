import React from "react";
import "./CheckMark.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCheck } from "@fortawesome/free-solid-svg-icons";

function CheckMark({ children, color, checkSize, trans, transDelay }) {
  let className = "";
  if (trans) {
    className = `checkmark-container hidden animate-delay-${transDelay}`;
  } else {
    className = `checkmark-container`;
  }

  return (
    <div className={className}>
      <FontAwesomeIcon icon={faCheck} color={color} fontSize={checkSize} />
      <p className="standard-text font-goldplay-200">{children}</p>
    </div>
  );
}

export default CheckMark;
