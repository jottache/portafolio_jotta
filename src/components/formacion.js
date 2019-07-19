import React from "react";
import "../css/formacion.css";
import animaciones from "../img/animaciones.jpg";
import bootstrap from "../img/bootstrap.jpg";
import interfaz from "../img/diseño-interfaz.jpg";
import git from "../img/git.jpg";
import grid from "../img/grid.jpg";
import htmlcss from "../img/htmlcss.jpg";
import javaScript from "../img/javaScript.jpg";
import jquery from "../img/jquery.jpg";
import next from "../img/next.jpg";
import progEstruct from "../img/prog-estruct.jpg";
import native from "../img/react-native.jpg";
import router from "../img/react-router.jpg";
import react from "../img/react.jpg";
import redux from "../img/redux.jpg";
import arquitecto from "../img/arquitecto.jpg";
import responsive from "../img/responsive.jpg";
import platzi from "../img/platzi.png";

function Formacion() {
  return (
    <div className="formacion_container">
      <div>
        <div className="titulo_centrado">
          <h2 className="formacion_title">Formacion en</h2>
          <img src={platzi} alt="" className="platzi" />
        </div>
        <div className="formacion_titulos">
          <img src={arquitecto} alt="" className="diploma_img" />
          <img src={animaciones} alt="" className="diploma_img" />
          <img src={bootstrap} alt="" className="diploma_img" />
          <img src={interfaz} alt="" className="diploma_img" />
          <img src={git} alt="" className="diploma_img" />
          <img src={grid} alt="" className="diploma_img" />
          <img src={htmlcss} alt="" className="diploma_img" />
          <img src={javaScript} alt="" className="diploma_img" />
          <img src={jquery} alt="" className="diploma_img" />
          <img src={next} alt="" className="diploma_img" />
          <img src={progEstruct} alt="" className="diploma_img" />
          <img src={native} alt="" className="diploma_img" />
          <img src={router} alt="" className="diploma_img" />
          <img src={react} alt="" className="diploma_img" />
          <img src={redux} alt="" className="diploma_img" />
          <img src={responsive} alt="" className="diploma_img" />
        </div>
      </div>
    </div>
  );
}
export default Formacion;
