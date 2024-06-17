import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/header";
import Example from "./components/Card/card";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Example />
      </div>
    </Router>
  );
}

export default App;
