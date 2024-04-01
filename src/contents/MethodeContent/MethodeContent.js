import React from "react";
import "./MethodeContent.css";
import TitleLayout from "../../layouts/TitleLayout";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

/*
children,
  titleColor,
  titleName,
  bgColor,
  quote,
  quoteColor,
  buttonText,
  buttonScrollTo,
  buttonType = "secondary-btn",
*/

function MethodeContent() {
  return (
    <>
      <h4
        className="header-2 font-goldplay-400 text-black hidden header-margin"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Werkwijze
      </h4>
      <div className="method-container">
        <div className="info-wrapper">
          <InfoBlock
            titleColor="var(--color-blue)"
            title={"Planning"}
            number="01"
            animateDelay="100"
            width={"100%"}
            to="/service/planning"
          >
            Ik bespreek samen met u wat uw wensen zijn en zorgen we er samen
            voor dat we een goed plant hebben voor de site.
          </InfoBlock>
        </div>

        <div className="info-wrapper">
          <InfoBlock
            titleColor="var(--color-blue)"
            title={"Design"}
            number="02"
            animateDelay="300"
            width={"100%"}
            to="/service/design"
          >
            Ik bespreek samen met u wat uw wensen zijn en zorgen we er samen
            voor dat we een goed plant hebben voor de site.
          </InfoBlock>
        </div>
        <div className="info-wrapper">
          <InfoBlock
            titleColor="var(--color-blue)"
            title={"Ontwikkeling"}
            number="03"
            width={"100%"}
            animateDelay="500"
            to="/service/development"
          >
            Ik bespreek samen met u wat uw wensen zijn en zorgen we er samen
            voor dat we een goed plant hebben voor de site.
          </InfoBlock>
        </div>
      </div>
    </>
  );
}

export default MethodeContent;
