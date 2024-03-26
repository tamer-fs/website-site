import React from "react";
import MainLayout from "../layouts/MainLayout";
import StartContent from "../contents/StartContent/StartContent";
import ServiceContent from "../contents/ServiceContent/ServiceContent";

function Home() {
  return (
    <MainLayout>
      <StartContent />
      <ServiceContent />
    </MainLayout>
  );
}

export default Home;
