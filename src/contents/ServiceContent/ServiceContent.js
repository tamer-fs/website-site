import React from "react";
import "./ServiceContent.css";
import TwoColLayout from "../../layouts/TwoColLayout";

function ServiceContent() {
  return (
    <TwoColLayout
      bgColor={"transparent"}
      title={"Service"}
      showNumber={true}
      number={"01"}
    >
      <div className="right-content">
        <p>right</p>
      </div>
      <div className="left-content">
        <p>
          leftffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffff
          ffffffffffffffffffffffffffffffffffffffff
        </p>
      </div>
    </TwoColLayout>
  );
}

export default ServiceContent;
