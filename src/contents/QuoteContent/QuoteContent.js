import React, { useState } from "react";
import "./QuoteContent.css";
import TwoColLayout from "../../layouts/TwoColLayout";
import CheckMark from "../../components/CheckMark/CheckMark";
import quoteDb from "../../firebaseWebQuote";
import { push, ref } from "firebase/database";

function QuoteContent({ showTitle = true }) {
  const [selectedBlock, setSelectedBlock] = useState("not-chosen");
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);

  console.log(quoteDb);

  const handleBlockClick = (e, blockNum, blockId) => {
    e.preventDefault();

    const container = document.getElementById("options-container");
    const allElements = Array.from(container.children);
    allElements.forEach((element) => {
      element.classList.remove("selected");
    });

    setSelectedBlock(blockNum);
    const element = document.getElementById(blockId);
    element.classList.add("selected");
  };

  const checkFields = () => {
    const inputs = inputValues;

    // check variables
    let fieldsFilledOut = true;

    // check if fields are filled out
    if (selectedBlock === "not-chosen") {
      fieldsFilledOut = false;
    }
    inputs.forEach((value, index) => {
      let element = document.getElementById(`${index}`);

      if (!value.length > 0) {
        fieldsFilledOut = false;
        element.style.border = "2px solid #FF4545";
      } else {
        element.style.border = "none";
      }
    });

    return fieldsFilledOut;
  };

  const emptyFields = () => {
    const inputs = inputValues;

    inputs.forEach((value, index) => {
      let element = document.getElementById(`${index}`);

      element.value = "";
    });
    setInputValues(["", "", "", "", "", ""]);

    const container = document.getElementById("options-container");
    const allElements = Array.from(container.children);
    allElements.forEach((element) => {
      element.classList.remove("selected");
    });
    setSelectedBlock("not-chosen");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputs = inputValues;

    if (checkFields()) {
      // add input to database

      const blockType = {
        0: "standard",
        1: "professional",
        2: "premium",
      };

      push(ref(quoteDb, "quotes"), {
        type: blockType[selectedBlock],
        firstName: inputs[0],
        lastName: inputs[1],
        company: inputs[2],
        email: inputs[3],
        phone: inputs[4],
        descr: inputs[5],
      });

      // empty all fields
      emptyFields();
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    let inputListCopy = inputValues;
    inputListCopy[e.target.id] = e.target.value;

    setInputValues(inputListCopy);
  };

  return (
    <>
      <TwoColLayout
        bgColor={"var(--color-black)"}
        title={"Offerte aanvragen"}
        titleColor={"var(--color-white)"}
        showTitle={showTitle}
        showNumber={false}
      >
        <div className="left-content options-container">
          <h3 className="options-title text-white font-goldplay-400 header-2 header-margin">
            Welk pakket past het beste bij u?
          </h3>
          <ul className="options-container-list" id="options-container">
            <li
              id="option-0"
              className="options-container-item hidden"
              onClick={(e) => handleBlockClick(e, 0, "option-0")}
            >
              <div className="options-container-item-title font-poppins-100 text-white header-2">
                <h3>Standaard</h3>
              </div>
              <div className="options-container-item-body">
                <CheckMark color={"var(--color-blue)"}>
                  Responsive webdesign
                </CheckMark>
                <CheckMark color={"var(--color-blue)"}>
                  3 gratis design aanpassingen
                </CheckMark>
                <CheckMark color={"var(--color-blue)"}>
                  Website beheer
                </CheckMark>
              </div>
            </li>

            <li
              id="option-1"
              className="options-container-item hidden animate-delay-200"
              onClick={(e) => handleBlockClick(e, 1, "option-1")}
            >
              <div className="options-container-item-title font-poppins-100 text-white header-2">
                <h3>Proffesioneel</h3>
              </div>
              <div className="options-container-item-body">
                <CheckMark color={"var(--color-blue)"}>
                  Responsive webdesign
                </CheckMark>
                <CheckMark color={"var(--color-blue)"}>
                  3 gratis design aanpassingen
                </CheckMark>
                <CheckMark color={"var(--color-blue)"}>
                  Website beheer
                </CheckMark>
              </div>
            </li>

            <li
              id="option-2"
              className="options-container-item hidden animate-delay-400"
              onClick={(e) => handleBlockClick(e, 2, "option-2")}
            >
              <div className="options-container-item-title font-poppins-100 text-white header-2">
                <h3>Premium</h3>
              </div>
              <div className="options-container-item-body">
                <CheckMark color={"var(--color-blue)"}>
                  Responsive webdesign
                </CheckMark>
                <CheckMark color={"var(--color-blue)"}>
                  3 gratis design aanpassingen
                </CheckMark>
                <CheckMark color={"var(--color-blue)"}>
                  Website beheer
                </CheckMark>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-content">
          <form className="form-container">
            <div
              className="input-container hidden"
              style={{ gridArea: "firstN" }}
            >
              <input
                id="0"
                className="input"
                placeholder="Voornaam"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="input-container hidden"
              style={{ gridArea: "lastN" }}
            >
              <input
                id="1"
                className="input"
                placeholder="Achternaam"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="input-container hidden"
              style={{ gridArea: "buissN" }}
            >
              <input
                id="2"
                className="input"
                placeholder="Bedrijfsnaam"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="input-container hidden"
              style={{ gridArea: "emailN" }}
            >
              <input
                id="3"
                className="input"
                placeholder="Email adress"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="input-container hidden"
              style={{ gridArea: "phoneN" }}
            >
              <input
                id="4"
                className="input"
                placeholder="Telefoonummer"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="input-container hidden"
              style={{ gridArea: "descr" }}
            >
              <textarea
                id="5"
                className="input"
                placeholder="Wat zijn uw ideën"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div
              className="input-container hidden"
              style={{ gridArea: "SendB" }}
            >
              <button
                type="submit"
                className="send-btn"
                onClick={(e) => handleFormSubmit(e)}
              >
                Verzenden
              </button>
            </div>
          </form>
        </div>
      </TwoColLayout>
    </>
  );
}

export default QuoteContent;
