import React from "react";
import NavBar from "../components/NavBar/NavBar";
import "./styles/TwoColLayoutStyles.css";

export default function TwoColLayout({
  children,
  showNavBar,
  bgColor,
  title,
  showNumber,
  number,
}) {
  const twoColLayoutStyles = {
    backgroundColor: bgColor,
  };

  return (
    <>
      {showNavBar && <NavBar />}
      <div className="content-container" style={twoColLayoutStyles}>
        <div className="title-container">
          <h1 className="header-1 font-poppins-700">{title}</h1>
        </div>
        <div className="num-container">
          {showNumber && (
            <h1 style={{ opacity: 0.5 }} className="header-1 font-poppins-700">
              {number}
            </h1>
          )}
        </div>
        {children}
      </div>
    </>
  );
}
