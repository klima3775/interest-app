import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Slider from "./components/Slider/slider";
import Ticker from "./components/Ticker/ticker";
import BurgerMenu from "./components/BurgerMenu/Burger";

import Header from "./components/Header/header";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <BurgerMenu /> */}
        {/* Пока что не трогать */}
        <Ticker />
        <Slider />
      </div>
    </Router>
  );
}

export default App;
