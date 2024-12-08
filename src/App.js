import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Slider from "./components/Slider/slider";
import Ticker from "./components/Ticker/ticker";
import ParentComponent from "./components/BackgroundPreview/bg";

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 h-screen  ">
        <ParentComponent />
        <Ticker />
        <Slider />
      </div>
    </Router>
  );
}

export default App;
