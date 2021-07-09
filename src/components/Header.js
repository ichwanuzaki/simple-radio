import React, { useState } from "react";
import Menu from "./Menu";
import {faChevronCircleLeft,faPowerOff} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioHeader() {
  const [pauseStart, setPauseStart] = useState(true);

  return (
    <>
      <div className="title-section">
        <FontAwesomeIcon
          className="fa-stop fa-3x"
          onClick={() => setPauseStart(false)}
          icon={faChevronCircleLeft}
        />
        <h1>STATIONS</h1>
        <FontAwesomeIcon
          className="fa-play fa-3x"
          onClick={() => setPauseStart(true)}
          icon={faPowerOff}
        />
      </div>

      {pauseStart ? (
        <Menu />
      ) : (
        <div className="radio-info paused">
          <h3>Radio Off</h3>
        </div>
      )}
    </>
  );
}
