import React, { useEffect } from "react";
import TitleLayout from "../layouts/TitleLayout";
import AboutContent from "../contents/AboutContent/AboutContent";
import FooterContent from "../contents/FooterContent/FooterContent";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <div className="bg"></div>
      <TitleLayout
        titleColor={"var(--color-black)"}
        bgColor={"transparent"}
        titleName={"Over Mij"}
        quoteColor={"var(--color-black)"}
        quote={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mi eget arcu viverra pharetra a ac metus. Donec ullamcorper ipsum nec justo tristique, nec dapibus metus ultrices"
        }
        buttonText={"Leer mij kennen"}
        buttonScrollTo={"#about-top"}
        buttonType={"fill-btn"}
      >
        <AboutContent showTitle={false}></AboutContent>
        <FooterContent />
      </TitleLayout>
    </>
  );
}

export default About;
