import React from "react";

export default function Info(props) {
  return (
    <div className="radio-info">
      <h3 className="btm-txt">CURRENTLY PLAYING</h3>
      <p className="radio-info-msg">{props.radioName}</p>
    </div>
  );
}
