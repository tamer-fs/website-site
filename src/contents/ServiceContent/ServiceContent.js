import React from "react";
import "./ServiceContent.css";
import TwoColLayout from "../../layouts/TwoColLayout";
import CheckMark from "../../components/CheckMark/CheckMark";

function ServiceContent() {
  return (
    <>
      <TwoColLayout bgColor={"transparent"} title={"Service"} showTitle={true}>
        <div className="left-content">
          <h3 className="header-2 font-goldplay-400 text-black hidden header-margin">
            Mijn Service
          </h3>
          <p className="hidden animate-delay-200 standard-text font-goldplay-200">
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
      <div className="know-more-section">
        <h3 className="header-2 font-goldplay-400 text-black hidden">
          Meer weten?
        </h3>
        <div className="v-sep hidden animate-delay-200"></div>
        <button className="fill-btn hidden animate-delay-400">
          Lees hier over de werkwijze
        </button>
      </div>
    </>
  );
}

export default ServiceContent;
