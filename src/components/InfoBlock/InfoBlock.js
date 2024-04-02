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
        <Link to={to} style={{ textDecoration: "none" }}>
          <button className="info-btn">
            <p className="small-text font-goldplay-500">Lees meer</p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 83 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_95_7)">
                <rect width="20" height="20" fill="transparent" />
                <path
                  id="visible1"
                  opacity="0.74"
                  d="M50.8638 29.7528C52.2326 30.5154 52.2326 32.4846 50.8638 33.2472L14.2233 53.6593C12.8902 54.4019 11.25 53.4381 11.25 51.9121L11.25 11.0879C11.25 9.56189 12.8902 8.59807 14.2233 9.34072L50.8638 29.7528Z"
                  fill="#79ADDC"
                />
                <path
                  id="invisible"
                  opacity="0.74"
                  d="M50.8638 29.7528C52.2326 30.5154 52.2326 32.4846 50.8638 33.2472L14.2233 53.6593C12.8902 54.4019 11.25 53.4381 11.25 51.9121L11.25 11.0879C11.25 9.56189 12.8902 8.59807 14.2233 9.34072L50.8638 29.7528Z"
                  fill="#6490B8"
                />
                <path
                  id="visible2"
                  opacity="0.74"
                  d="M73.8638 29.7528C75.2326 30.5154 75.2326 32.4846 73.8638 33.2472L37.2233 53.6593C35.8902 54.4019 34.25 53.4381 34.25 51.9121L34.25 11.0879C34.25 9.56189 35.8902 8.59807 37.2233 9.34072L73.8638 29.7528Z"
                  fill="#79ADDC"
                />
              </g>
              <defs>
                <clipPath id="clip0_95_7">
                  <rect width="83" height="63" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default InfoBlock;
