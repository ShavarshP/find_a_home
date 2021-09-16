import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <NavLink to={"/home"} className="navItems button7">
              Home
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
