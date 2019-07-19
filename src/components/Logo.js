import React from "react";
import "../css/logo.css";

function Logo() {
  return (
    <div className="logo">
      <div className="animation-container">
        <div className="border-logo">
          <div className="title-logo">Jotta</div>
          <div className="front-container">
            <p className="front-dev js">JavaScript</p>
            <p className="front-dev fd">front-end developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
