import React from "react";
import "./MethodSteps.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MethodSteps({ color1, color2, color3, current = "planning" }) {
  const handleScrollButton = (e, link) => {
    e.preventDefault();
    window.location.replace(link);
  };

  return (
    <>
      <p className="method-steps-p">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <FontAwesomeIcon icon={faAngleRight} fontSize={"var(--body-text)"} />
        <Link className="link" to={"/service"}>
          Mijn Dienst
        </Link>
        <FontAwesomeIcon icon={faAngleRight} fontSize={"var(--body-text)"} />
        <span style={{ color: "var(--color-white)" }}>{current}</span>
      </p>
      <div className="method-steps-container">
        <Link
          className="method-steps-element"
          style={{ backgroundColor: color1 }}
          to={"/service/planning"}
        >
          <div className="number header-2 text-white font-poppins-200">1</div>
          <h4 className="header-2 text-white font-goldplay-300">Planning</h4>
        </Link>
        <Link
          className="method-steps-element"
          style={{ backgroundColor: color2 }}
          to={"/service/design"}
        >
          <div className="number header-2 text-white font-poppins-200">2</div>
          <h4 className="header-2 text-white font-goldplay-300">Design</h4>
        </Link>
        <Link
          className="method-steps-element"
          style={{ backgroundColor: color3 }}
          to={"/service/development"}
        >
          <div className="number header-2 text-white font-poppins-200">3</div>
          <h4 className="header-2 text-white font-goldplay-300">
            Ontwikkeling
          </h4>
        </Link>
      </div>
    </>
  );
}

export default MethodSteps;
