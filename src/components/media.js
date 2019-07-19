import React, { Component } from "react";
// import Social from "./social";
import "../css/media.css";
import Formulario from "./formulario";

class Media extends Component {
  state = {
    email: false
  };
  handleEmail = () => {
    this.setState({
      email: true
    });
    const ancla1 = document.getElementById("ancla1");
    const ancla2 = document.getElementById("ancla2");
    ancla1.classList.add("disappear");
    ancla2.classList.add("disappear");
    console.log(this.state);
  };
  ponerSocial = () => {
    if (this.state.email === false) {
      return (
        <div className="social_caja">
          <a
            id="ancla1"
            className="ancla"
            href="https://github.com/jottache"
            target="_blank"
          >
            <span className="icon-github" />
          </a>
          <a
            id="ancla2"
            className="ancla"
            href="https://www.instagram.com/jotta.che/?hl=es-la"
            target="_blank"
          >
            <span className="icon-instagram" />
          </a>
          <div className="whatsapp_container">
            <span className="icon-envelope-o" onClick={this.handleEmail} />
          </div>
        </div>
      );
    }
    if (this.state.email) {
      return <Formulario />;
    }
  };

  render() {
    return (
      <div className="media_container">
        <div>
          <h2 className="contacto_title">contactame</h2>
          {this.ponerSocial()}
        </div>
      </div>
    );
  }
}
export default Media;
