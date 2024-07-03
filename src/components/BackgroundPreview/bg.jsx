//

import React from "react";
import "./bg.scss";
import InfoBlock from "../Dialog/dialog";
import { useState, useEffect } from "react";
import Header from "../Header/header";
import BurgerMenu from "../BurgerMenu/Burger";

const ParentComponent = () => {
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
    <div className="background">
      {windowWidth > 768 ? <Header /> : <BurgerMenu />}
      <InfoBlock />
    </div>
  );
};

export default ParentComponent;
