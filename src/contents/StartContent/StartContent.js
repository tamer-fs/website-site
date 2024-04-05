import React, { useEffect, useState } from "react";
import "./StartContentStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import db from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";

function StartContent() {
  useEffect(() => {
    const inputsRef = ref(db, "TamerWebsite/Inputs");
    onValue(inputsRef, (snapshot) => {
      snapshot.val().forEach((input) => {
        const textElement = document.getElementById(input.for);
        if (textElement != null) {
          textElement.innerText = input.content;
        }
      });
    });
  }, []);

  return (
    <header>
      <div className="elements-container">
        <div className="title-container">
          <h1
            id="Titel Tekst"
            className="font-goldplay-400 text-white large-title-text"
          >
            Website laten maken?
          </h1>
        </div>
        <div className="subtext-container">
          <h2 id="Sub Titel" className="font-goldplay-200 text-white header-2">
            Hoi
          </h2>
        </div>
        <div className="buttons-container">
          <button className="secondary-btn">
            Lees meer{" "}
            <FontAwesomeIcon icon={faAngleRight} style={{ paddingLeft: 10 }} />
          </button>
          <p>of</p>
          <button className="fill-btn">Offerte aanvragen</button>
        </div>
      </div>
    </header>
  );
}

export default StartContent;
