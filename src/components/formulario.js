import React from "react";
import "../css/form.css";

function Formulario() {
  return (
    <div className="form_container">
      <form
        className="form"
        action="https://formspree.io/jottache20@gmail.com"
        method="POST"
        autoComplete="off"
      >
        <input
          className="form_name"
          name="name"
          type="text"
          placeholder="nombre"
        />
        <input
          className="form_email"
          name="_replyto"
          type="email"
          placeholder="email"
        />
        <textarea className="area" id="" name="message" cols="30" rows="10" />
        <input type="text" name="_gotcha" className="gotcha" />
        <button className="btn_submit" type="submit">
          enviar
        </button>
      </form>
    </div>
  );
}
export default Formulario;
