import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import StartContent from "../contents/StartContent/StartContent";
import ServiceContent from "../contents/ServiceContent/ServiceContent";
import AboutContent from "../contents/AboutContent/AboutContent";
import FooterContent from "../contents/FooterContent/FooterContent";
import ScrollToTop from "../components/scrollToTop";

function Home() {
  return (
    <>
      <ScrollToTop />
      <div className="bg"></div>
      <MainLayout>
        <StartContent />
        <ServiceContent />
        <AboutContent />
        <FooterContent />
      </MainLayout>
    </>
  );
}

export default Home;
