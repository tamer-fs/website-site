import React from "react";
import "./FooterContent.css";
import TwoColLayout from "../../layouts/TwoColLayout";
import CheckMark from "../../components/CheckMark/CheckMark";
import FooterItem from "../../components/FooterItem/FooterItem";

/*
children,
  showNavBar,
  bgColor,
  title,
  showNumber,
  number,
  showTitle,
  titleColor,
  id,
*/

function FooterContent() {
  return (
    <footer>
      <TwoColLayout
        showTitle={false}
        showNumber={false}
        id={"footer"}
        bgColor={"var(--color-black)"}
      >
        <div className="left-container footer-text">
          <h4 className="header-1 text-white font-poppins-700 hidden">
            Laten we uw project bespreken
          </h4>
          <p className="standard-text text-white font-goldplay-300 hidden animate-delay-100">
            Neem contact met mij op. Ik help ue graag verder.
          </p>
          <button className="fill-btn hidden animate-delay-200">
            Offerte aanvragen
          </button>
        </div>
        <div className="right-container"></div>
      </TwoColLayout>
      <div className="footer-links-container">
        <FooterItem
          title={"website"}
          links={[
            {
              to: "/service",
              text: "Planning",
            },
            {
              to: "/service",
              text: "Design",
            },
            {
              to: "/service",
              text: "Ontwikkeling",
            },
          ]}
        />
        <FooterItem
          title={"Contact"}
          links={[
            {
              to: "/service",
              text: "06 398 392 39",
            },
            {
              to: "/service",
              text: "info@bedrijf.com",
            },
            {
              to: "/service",
              text: "facebook link",
            },
          ]}
        />
      </div>
    </footer>
  );
}

export default FooterContent;
