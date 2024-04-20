import React from "react";
import ScrollToTop from "../components/scrollToTop";
import FooterContent from "../contents/FooterContent/FooterContent";
import TitleLayout from "../layouts/TitleLayout";
import QuoteContent from "../contents/QuoteContent/QuoteContent";

function Quote() {
  return (
    <>
      <ScrollToTop />
      <div className="bg"></div>
      <TitleLayout
        titleColor={"var(--color-white)"}
        bgColor={"var(--color-black)"}
        titleName={"Offerte aanvragen"}
        quoteColor={"var(--color-white)"}
        quote={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mi eget arcu viverra pharetra a ac metus. Donec ullamcorper ipsum nec justo tristique, nec dapibus metus ultrices"
        }
        buttonText={"Leer mij kennen"}
        buttonScrollTo={"#about-top"}
        buttonType={"fill-btn"}
      >
        <QuoteContent showTitle={false} />
        <FooterContent showQuote={false} />
      </TitleLayout>
    </>
  );
}

export default Quote;
