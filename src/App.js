import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Slider from "./components/Slider/slider";

import Header from "./components/Header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
      </div>
    </Router>
  );
}

export default App;
