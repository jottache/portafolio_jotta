import React from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <header className="header_container">
      <div className="logo_jotta" src="" alt="">
        <NavLink to="/">
          <span className="icon-home" />
        </NavLink>
      </div>

      <ul className="links_container">
        <li>
          <NavLink to="/formacion">
            <span className="icon-formation" />
            <p className="header_text">Formacion</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/habilidades">
            <span className="icon-fire" />
            <p className="header_text">Habilidades</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/media">
            <span className="icon-redo" />
            <p className="header_text">Contacto</p>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
