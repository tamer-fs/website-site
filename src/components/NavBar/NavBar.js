import React, { useEffect, useState } from "react";
import "./NavBarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuPos, setMenuPos] = useState("-150vh");

  const location = useLocation();
  console.log(location.pathname);

  const textColors = {
    "/": [
      ["var(--color-blue)", 600],
      ["var(--color-white)", 400],
      ["var(--color-white)", 400],
      ["var(--color-white)", 400],
    ],
    "/service": [
      ["var(--color-white)", 400],
      ["var(--color-blue)", 600],
      ["var(--color-white)", 400],
      ["var(--color-white)", 400],
    ],
    "/about": [
      ["var(--color-white)", 400],
      ["var(--color-white)", 400],
      ["var(--color-blue)", 600],
      ["var(--color-white)", 400],
    ],
    "/pricing": [
      ["var(--color-white)", 400],
      ["var(--color-white)", 400],
      ["var(--color-white)", 400],
      ["var(--color-blue)", 600],
    ],
  };

  const handleMenuOpen = (e) => {
    setMenuPos("0px");
  };

  const handleMenuClose = (e) => {
    setMenuPos("-150vh");
  };

  return (
    <nav>
      <div className="logo-section">
        <h1 className="text-white font-poppins-600">Tamer Sparreboom</h1>
      </div>
      <ul className="menu-section-ls">
        <li className="li-nav hover-underline-animation">
          <Link
            to="/"
            style={{
              color: textColors[location.pathname][0][0],
              fontWeight: textColors[location.pathname][0][1],
            }}
          >
            Home
          </Link>
        </li>
        <li className="li-nav hover-underline-animation">
          <Link
            to="service"
            style={{
              color: textColors[location.pathname][1][0],
              fontWeight: textColors[location.pathname][1][1],
            }}
          >
            Service
          </Link>
        </li>
        <li className="li-nav hover-underline-animation">
          <Link
            to="about"
            style={{
              color: textColors[location.pathname][2][0],
              fontWeight: textColors[location.pathname][2][1],
            }}
          >
            Over mij
          </Link>
        </li>
        <li className="li-nav hover-underline-animation">
          <Link
            to="pricing"
            style={{
              color: textColors[location.pathname][3][0],
              fontWeight: textColors[location.pathname][3][1],
            }}
          >
            Tarieven
          </Link>
        </li>
      </ul>
      <div className="menu-section-ss">
        <button className="fill-btn off-btn">Offerte aanvragen</button>
        <button
          className="icon-btn text-white menu-btn"
          onClick={() => handleMenuOpen()}
        >
          <p className="font-poppins-400">menu</p>
          <FontAwesomeIcon icon={faBars} fontSize={25} />
        </button>
        <div className="scroll-down-menu" style={{ top: menuPos }}>
          <div className="link-container">
            <button
              className="icon-btn text-white close-btn"
              onClick={() => handleMenuClose()}
            >
              <p className="font-poppins-400">afsluiten</p>
              <FontAwesomeIcon icon={faClose} fontSize={25} />
            </button>
            <li className="li-nav hover-underline-animation">
              <Link
                to="/"
                style={{
                  color: textColors[location.pathname][0][0],
                  fontWeight: textColors[location.pathname][0][1],
                }}
              >
                Home
              </Link>
            </li>
            <li className="li-nav hover-underline-animation">
              <Link
                to="service"
                style={{
                  color: textColors[location.pathname][1][0],
                  fontWeight: textColors[location.pathname][1][1],
                }}
              >
                Service
              </Link>
            </li>
            <li className="li-nav hover-underline-animation">
              <Link
                to="about"
                style={{
                  color: textColors[location.pathname][2][0],
                  fontWeight: textColors[location.pathname][2][1],
                }}
              >
                Over mij
              </Link>
            </li>
            <li className="li-nav hover-underline-animation">
              <Link
                to="pricing"
                style={{
                  color: textColors[location.pathname][3][0],
                  fontWeight: textColors[location.pathname][3][1],
                }}
              >
                Tarieven
              </Link>
            </li>
          </div>
          <div className="button-container">
            <button className="fill-btn">Offerte aanvragen</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
