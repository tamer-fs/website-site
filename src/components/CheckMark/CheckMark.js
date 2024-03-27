import React from "react";
import "./CheckMark.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCheck } from "@fortawesome/free-solid-svg-icons";

function CheckMark({
  children,
  color,
  checkSize,
  trans,
  transDelay,
  textColor,
  icon = faCheck,
  gap = 20,
  verticalGap = 0,
}) {
  let className = "";
  if (trans) {
    className = `checkmark-container hidden animate-delay-${transDelay}`;
  } else {
    className = `checkmark-container`;
  }

  return (
    <div className={className} style={{ gap: gap }}>
      <FontAwesomeIcon icon={icon} color={color} fontSize={checkSize} />
      <p
        className="standard-text font-goldplay-200"
        style={{
          color: textColor,
          marginTop: verticalGap,
          marginBottom: verticalGap,
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default CheckMark;
