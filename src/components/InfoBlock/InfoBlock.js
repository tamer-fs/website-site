import React from "react";
import "./InfoBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function InfoBlock({
  children,
  title = "no-title",
  number = "01",
  titleColor = "var(--color-white)",
  bgColor = "var(--color-black)",
  contentColor = "var(--color-white)",
  width = 500,
  height = "auto",
  animate = true,
  animateDelay = "100",
  to = "",
  cursor = "",
}) {
  let animateClass = "";
  if (animate) {
    animateClass = `hidden animate-delay-${animateDelay}`;
  }

  return (
    <section
      className={`info-block-container ${animateClass}`}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        cursor: cursor,
      }}
    >
      <div
        className="info-block-title-container"
        style={{ borderColor: titleColor }}
      >
        <h4
          className="info-block-number standard-text font-poppins-600"
          style={{
            color: titleColor,
          }}
        >
          {number}
        </h4>
        <h4
          className="info-block-title standard-text font-poppins-600"
          style={{
            color: titleColor,
          }}
        >
          {title}
        </h4>
      </div>
      <div className="info-block-content-container">
        <span
          className="font-poppins-400 small-text"
          style={{ color: contentColor }}
        >
          {children}
        </span>
        <Link to={to}>
          <button className="secondary-btn">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default InfoBlock;
