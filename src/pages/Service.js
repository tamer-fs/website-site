import React, { useEffect } from "react";
import ServiceContent from "../contents/ServiceContent/ServiceContent";
import TitleLayout from "../layouts/TitleLayout";

function Service() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
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
        <ServiceContent showTitle={false}></ServiceContent>
      </TitleLayout>
    </>
  );
}

export default Service;
