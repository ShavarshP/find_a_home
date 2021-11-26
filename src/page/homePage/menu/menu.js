import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const menuHome = useRef();
  const menuAbout = useRef();
  const menuContact = useRef();
  const changeClassName = (item) => {
    menuHome.current.className = "navItems";
    menuAbout.current.className = "navItems";
    menuContact.current.className = "navItems";
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
              ref={menuHome}
              onClick={() => changeClassName(menuHome)}
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to={"/about"}
              className="navItems"
              ref={menuAbout}
              onClick={() => changeClassName(menuAbout)}
            >
              <span>About</span>
            </NavLink>
            <a
              className="navItems"
              ref={menuContact}
              onClick={() => changeClassName(menuContact)}
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

export default Menu;
