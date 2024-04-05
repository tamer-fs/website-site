import React, { useState, useEffect } from "react";
import "./ServiceContent.css";
import TwoColLayout from "../../layouts/TwoColLayout";
import CheckMark from "../../components/CheckMark/CheckMark";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import db from "../../firebaseConfig";

function ServiceContent({ children, showTitle = true, showMore = true }) {
  useEffect(() => {
    const inputsRef = ref(db, "TamerWebsite/Inputs");
    onValue(inputsRef, (snapshot) => {
      snapshot.val().forEach((input) => {
        const textElement = document.getElementById(input.for);
        if (textElement != null) {
          textElement.innerText = input.content;
        }
      });
    });
  }, []);

  return (
    <>
      <TwoColLayout
        bgColor={"transparent"}
        title={"Service"}
        showTitle={showTitle}
        id={"service-top"}
      >
        <div className="left-content">
          <h3
            id="Linker service titel"
            className="header-2 font-goldplay-400 text-black hidden header-margin"
          >
            Mijn Dienst
          </h3>
          <p
            id="Linker service paragraaf"
            className="hidden animate-delay-200 standard-text font-goldplay-200"
          >
            Ik maak moderne websites voor bedrijven die graag meer aandacht
            online willen. <br />
            <br />
            Tegenwoordig is een website een essentieel deel van een bedrijf om
            te zorgen dat meer potentiële klanten bij uw bedrijf kunnen komen.
            De website is namelijk het eerste deel waar klanten in aanraking
            komen met uw bedrijf. Ik zal er voor zorgen dat de website een goede
            indruk op uw klanten zal achterlaten.
          </p>
        </div>
        <div className="right-content">
          <h3 className="header-2 font-goldplay-400 text-black hidden header-margin">
            Wat kunt u verwachten?
          </h3>
          <div className="service-checkmarks">
            <CheckMark
              color={"var(--color-blue)"}
              checkSize={"var(--body-text)"}
              trans={true}
              transDelay={100}
            >
              Een prachtige website die past bij uw merk
            </CheckMark>

            <CheckMark
              color={"var(--color-blue)"}
              checkSize={"var(--body-text)"}
              trans={true}
              transDelay={200}
            >
              Een responsive webdesign die er op elk platform prachtig uitziet
            </CheckMark>
            <CheckMark
              color={"var(--color-blue)"}
              checkSize={"var(--body-text)"}
              trans={true}
              transDelay={300}
            >
              Na het lanceren van de site een aantal gratis aanpassingen
              aanvragen van het design.
            </CheckMark>
          </div>
        </div>
      </TwoColLayout>
      {children}
      {showMore && (
        <div className="know-more-section">
          <h3 className="header-2 font-goldplay-400 text-black">Meer weten?</h3>
          <div className="v-sep"></div>
          <Link to={"/service"}>
            <button className="fill-btn">Lees hier over de werkwijze</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ServiceContent;
