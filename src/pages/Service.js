import React, { useEffect } from "react";
import ServiceContent from "../contents/ServiceContent/ServiceContent";
import TitleLayout from "../layouts/TitleLayout";
import FooterContent from "../contents/FooterContent/FooterContent";
import MethodeContent from "../contents/MethodeContent/MethodeContent";
import ScrollToTop from "../components/scrollToTop";

function Service() {
  return (
    <>
      <ScrollToTop />
      <div className="bg"></div>
      <TitleLayout
        titleColor={"var(--color-white)"}
        titleName={"Mijn Dienst"}
        quoteColor={"var(--color-white)"}
        quote={
          "Ik maak moderne websites voor kleine bedrijven die een online boost nodig hebben voor een voordelige prijs"
        }
        buttonText={"Lees verder"}
        buttonScrollTo={"#service-top"}
      >
        <ServiceContent showTitle={false} showMore={false}>
          <MethodeContent />
        </ServiceContent>
        <FooterContent />
      </TitleLayout>
    </>
  );
}

export default Service;
