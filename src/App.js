import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Slider from "./components/Slider/slider";
import Ticker from "./components/Ticker/ticker";
import BurgerMenu from "./components/BurgerMenu/Burger";

import Header from "./components/Header/header";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App bg-gray-100 h-screen">
        {windowWidth > 768 ? <Header /> : <BurgerMenu />}
        <Ticker />
        <Slider />
      </div>
    </Router>
  );
}

export default App;
