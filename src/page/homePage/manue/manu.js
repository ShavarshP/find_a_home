import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./manue.css";

const Manue = () => {
  const manueHome = useRef();
  const manueAbout = useRef();
  const manueContact = useRef();
  const changeClaseName = (item) => {
    manueHome.current.className = "navItems";
    manueAbout.current.className = "navItems";
    manueContact.current.className = "navItems";
    item.current.className = "navItems navItemActive";
  };
  return (
    <div className="home2 home3-home">
      <header>
        <div className="container headerContainer">
          <div className="headerContent">
            <NavLink to={"/home"} className="logo" href="">
              DivineBroker<span>.</span>
            </NavLink>
          </div>
          <nav className="nav headerNav">
            <NavLink
              to={"/home"}
              className="navItems navItemActive"
              href="#home"
              ref={manueHome}
              onClick={() => changeClaseName(manueHome)}
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to={"/about"}
              className="navItems"
              ref={manueAbout}
              onClick={() => changeClaseName(manueAbout)}
            >
              <span>About</span>
            </NavLink>
            <a
              className="navItems"
              ref={manueContact}
              onClick={() => changeClaseName(manueContact)}
            >
              <span>Contact</span>
            </a>
            <NavLink to={"/add/step1"} className="navItems button7">
              + Add new ads
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Manue;
