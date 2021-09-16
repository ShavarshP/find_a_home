import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useRoutes } from "./routes";

// <Customers />
const App = (props) => {
  return (
    <Router>
      <img
        style={{ opacity: "0.09 " }}
        className="background_picture"
        src="https://www.ubackground.com/_ph/7/619555920.jpg"
      ></img>
      <div className="App">{useRoutes(props)}</div>
    </Router>
  );
};

export default App;
