import React from "react";
import "../css/habilidades.css";

function Habilidades() {
  return (
    <div className="habilidades_container">
      <h2 className="habilidades_title">Habilidades</h2>
      <div className="habilidades_cards">
        <div className="card">
          <div className="card_css" />
          <p>
            habilidades con vanilla CSS, Responsive Design flex-box
            <br /> Grid layout, animaciones, bootstrap
          </p>
        </div>
        <div className="card">
          <div className="card_js" />
          <p>
            conocimientos de JavaScript del lado del Front-end
            <br />
            manejo de jquery, ajax y Ecma 6
          </p>
        </div>
        <div className="card">
          <div className="card_react" />
          <p>
            manejo de la libreria, aplicaciones con redux <br />
            react router, react native y frameworks como next.js
          </p>
        </div>
      </div>
    </div>
  );
}
export default Habilidades;
