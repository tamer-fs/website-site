import React, { useEffect } from "react";
import TitleLayout from "../layouts/TitleLayout";
import AboutContent from "../contents/AboutContent/AboutContent";
import TwoColLayout from "../layouts/TwoColLayout";
import FooterContent from "../contents/FooterContent/FooterContent";
import CheckMark from "../components/CheckMark/CheckMark";
import MethodSteps from "../components/MethodSteps/MethodSteps";

function Development() {
  return (
    <>
      <div className="bg"></div>
      <TitleLayout
        titleColor={"var(--color-black)"}
        quoteColor={"var(--color-black)"}
        bgColor={"transparent"}
        extraContent={
          <MethodSteps color3={"var(--color-black)"} current="ontwikkeling" />
        }
        quote={
          "Denken, dan doen en vervolgens verbeteren. Jouw ideeën vertaald naar een online concept."
        }
        buttonText={"Lees verder"}
        buttonScrollTo={"#development-top"}
        showBtn={false}
        bg={"linear-gradient(var(--color-blue), #a791e5)"}
      >
        <TwoColLayout
          showNavBar={false}
          bgColor={"var(--color-black)"}
          showTitle={true}
          title={"Ontwikkeling"}
          showNumber={true}
          titleColor={"var(--color-white)"}
          number={"03"}
          id={"development-content"}
        >
          <div className="left-content">
            <h3 className="header-2 font-goldplay-400 text-white hidden header-margin">
              Mijn Dienst
            </h3>
            <p className="hidden animate-delay-200 standard-text text-white font-goldplay-200">
              Ik maak moderne websites voor bedrijven die graag meer aandacht
              online willen. <br />
              <br />
              Tegenwoordig is een website een essentieel deel van een bedrijf om
              te zorgen dat meer potentiële klanten bij uw bedrijf kunnen komen.
              De website is namelijk het eerste deel waar klanten in aanraking
              komen met uw bedrijf. Ik zal er voor zorgen dat de website een
              goede indruk op uw klanten zal achterlaten.
            </p>
          </div>
          <div className="right-content">
            <h3 className="header-2 text-white font-goldplay-400 hidden header-margin">
              Wat kunt u verwachten?
            </h3>
            <div className="service-checkmarks">
              <CheckMark
                color={"var(--color-blue)"}
                checkSize={"var(--body-text)"}
                trans={true}
                transDelay={100}
                textColor={"var(--color-white)"}
              >
                Een prachtige website die past bij uw merk
              </CheckMark>

              <CheckMark
                color={"var(--color-blue)"}
                checkSize={"var(--body-text)"}
                trans={true}
                transDelay={200}
                textColor={"var(--color-white)"}
              >
                Een responsive webdesign die er op elk platform prachtig uitziet
              </CheckMark>
              <CheckMark
                color={"var(--color-blue)"}
                checkSize={"var(--body-text)"}
                trans={true}
                transDelay={300}
                textColor={"var(--color-white)"}
              >
                Na het lanceren van de site een aantal gratis aanpassingen
                aanvragen van het design.
              </CheckMark>
            </div>
          </div>
        </TwoColLayout>
      </TitleLayout>

      <FooterContent />
    </>
  );
}

export default Development;
