import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import Formacion from "./components/formacion";
import Habilidades from "./components/habilidades";
import Media from "./components/media";
import "./css/app.css";

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app_container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/formacion" component={Formacion} />
        <Route exact path="/habilidades" component={Habilidades} />
        <Route exact path="/media" component={Media} />
      </div>
    </BrowserRouter>
  );
}

export default App;
