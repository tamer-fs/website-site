import React from "react";
import MainLayout from "../layouts/MainLayout";
import StartContent from "../contents/StartContent/StartContent";
import ServiceContent from "../contents/ServiceContent/ServiceContent";
import AboutContent from "../contents/AboutContent/AboutContent";

function Home() {
  return (
    <>
      <div className="bg"></div>
      <MainLayout>
        <StartContent />
        <ServiceContent />
        <AboutContent />
      </MainLayout>
    </>
  );
}

export default Home;
