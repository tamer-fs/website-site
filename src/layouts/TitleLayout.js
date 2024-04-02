import NavBar from "../components/NavBar/NavBar";
import "./styles/TitleLayout.css";

import React from "react";

function TitleLayout({
  children,
  titleColor,
  titleName,
  bgColor,
  quote,
  quoteColor,
  buttonText,
  buttonScrollTo,
  buttonType = "secondary-btn",
  showNav = true,
  id = "",
  extraContent,
  showBtn,
  bg = "",
}) {
  const handleScrollButton = (e) => {
    e.preventDefault();
    window.location.replace(buttonScrollTo);
  };

  let style;
  if (bg != "") {
    style = { background: bg };
  } else {
    style = { backgroundColor: bgColor };
  }

  console.log(style);

  return (
    <>
      {showNav && <NavBar />}
      <div id={id} className="main-title-container" style={style}>
        <div className="title-content-container">
          <h1
            className="font-goldplay-400 large-title-text"
            style={{ color: titleColor }}
          >
            {titleName}
          </h1>
          {extraContent}
          <h2
            className="font-goldplay-200 header-2"
            style={{ color: quoteColor }}
          >
            {quote}
          </h2>
          {showBtn && (
            <button
              className={buttonType}
              onClick={(e) => handleScrollButton(e)}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
      {children}
    </>
  );
}

export default TitleLayout;
