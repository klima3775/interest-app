import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/svg/logo_and_text.svg";

// импорт стилей
import "./reset.scss";
import "./header.css";

// Импорт изображений
import sushi from "../../assets/svg/foods/sushi.svg";
import coffee from "../../assets/svg/foods/coffee.svg";
import shake from "../../assets/svg/foods/shake.svg";
import juice from "../../assets/svg/foods/juice.svg";
import burger from "../../assets/svg/foods/burger.svg";

const Header = () => {
  return (
    <div className="main-section">
      <div className="container">
        <header className="header flex a-itm--center gap32 f-wrp--wrap j-cnt--between">
          {/* Добавил див для флекса слева  menu-nav*/}
          <div className="menu-nav flex  a-itm--center gap32">
            <img src={Logo} alt="logo" />
            <nav>
              <ul className="nav-list flex gap32 f-wrp--wrap">
                <li className="nav-item hug">
                  <span className="nav-link f-w--700 clr-font--black">
                    Menu
                  </span>
                  <ul className="multilevel-menu gap32">
                    <li className="ml-item">
                      <Link
                        to="/sushi"
                        className="brd-top--primary ml-link f-w--700 clr-font--black"
                      >
                        <div className="flex a-itm--center">
                          <img src={sushi} alt="sushi" />
                          <span className="f-w--700 clr-font--black">
                            Sushi
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="ml-item position--relt">
                      <span className="sublevel-hover ml-link f-w--700 clr-font--black">
                        <div className="flex a-itm--center">
                          <img src={coffee} alt="coffee" />
                          <div className="flex a-itm--center gap16">
                            <span className="f-w--700 clr-font--black">
                              Drinks
                            </span>
                          </div>
                        </div>
                      </span>
                      <ul className="sublevel">
                        <li className="ml-item">
                          <Link
                            to="/coffee"
                            className="brd-top--primary ml-link f-w--700 clr-font--black"
                          >
                            <div className="flex a-itm--center">
                              <img src={coffee} alt="coffee" />
                              <span className="f-w--700 clr-font--black">
                                Coffee
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li className="ml-item">
                          <Link
                            to="/shake"
                            className="ml-link f-w--700 clr-font--black"
                          >
                            <div className="flex a-itm--center">
                              <img src={shake} alt="shake" />
                              <span className="f-w--700 clr-font--black">
                                Shake
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li className="ml-item">
                          <Link
                            to="/juice"
                            className="bottom-br--10 ml-link f-w--700 clr-font--black"
                          >
                            <div className="flex a-itm--center">
                              <img src={juice} alt="juice" />
                              <span className="f-w--700 clr-font--black">
                                Juice
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="ml-item">
                      <Link
                        to="/burger"
                        className="bottom-br--10 ml-link f-w--700 clr-font--black"
                      >
                        <div className="flex a-itm--center">
                          <img src={burger} alt="burger" />
                          <span className="f-w--700 clr-font--black">
                            Burger
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link f-w--700 clr-font--black"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link f-w--700 clr-font--black"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/analysis"
                    className="nav-link f-w--700 clr-font--black"
                  >
                    Analysis
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Добавил див для флекса справа language*/}
          <div className="language flex  a-itm--center">
            <span className="f-w--700 clr-font--black">EN</span>
            <span className="f-w--700 clr-font--black">|</span>
            <span className="f-w--700 clr-font--black">UA</span>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
