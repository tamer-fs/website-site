import React from "react";
import TwoColLayout from "../../layouts/TwoColLayout";
import CheckMark from "../../components/CheckMark/CheckMark";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/dummyimg.png";
import "./AboutContent.css";

function AboutContent({
  showTitle = true,
  bgColor = "var(--color-black)",
  titleColor = "var(--color-white)",
}) {
  return (
    <>
      <TwoColLayout
        bgColor={"var(--color-black)"}
        title={"over mij"}
        showTitle={showTitle}
        titleColor={"var(--color-white)"}
        id="about-top"
      >
        <div className="left-content about-image-container">
          <div className="image-wrapper hidden animate-delay-100">
            <img src={image} />
          </div>
        </div>
        <div className="right-content">
          <h3 className="header-2 font-goldplay-400 text-white hidden header-margin">
            Wie ben ik?
          </h3>
          <p className="hidden animate-delay-200 standard-text font-goldplay-200 text-white">
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
      </TwoColLayout>
      <TwoColLayout
        bgColor={"var(--color-black)"}
        titleColor={"var(--color-white)"}
      >
        <div className="left-content">
          <h3 className="header-2 font-goldplay-400 text-white hidden header-margin">
            Hoe werk ik?
          </h3>
          <p className="hidden animate-delay-200 standard-text font-goldplay-200 text-white">
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
          <div className="image-wrapper hidden animate-delay-100">
            <img src={image} />
          </div>
        </div>
      </TwoColLayout>
      <TwoColLayout
        bgColor={"var(--color-black)"}
        titleColor={"var(--color-white)"}
      >
        <div className="left-content" style={{ paddingBottom: 50 }}>
          <h3 className="header-2 font-goldplay-400 text-white hidden header-margin">
            Voordelen van websites zonder design software
          </h3>
          <CheckMark
            checkSize={"var(--body-text)"}
            color={"var(--color-white)"}
            textColor={"var(--color-white)"}
            trans={true}
            transDelay={100}
            icon={faStar}
            verticalGap={7}
          >
            Geen last van gelimiteerd design
          </CheckMark>
          <CheckMark
            checkSize={"var(--body-text)"}
            color={"var(--color-white)"}
            textColor={"var(--color-white)"}
            trans={true}
            icon={faStar}
            transDelay={200}
            verticalGap={7}
          >
            Prachtige custom animations
          </CheckMark>
          <CheckMark
            checkSize={"var(--body-text)"}
            color={"var(--color-white)"}
            textColor={"var(--color-white)"}
            icon={faStar}
            trans={true}
            transDelay={300}
            verticalGap={7}
          >
            Veel aandacht voor details
          </CheckMark>
        </div>
        <div className="right-content">
          <div className="image-wrapper hidden animate-delay-100">
            <img src={image} />
          </div>
        </div>
      </TwoColLayout>
    </>
  );
}

export default AboutContent;
