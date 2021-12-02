import React from "react";
import "../App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../page/homePage/home";
import Announcement from "../page/announcement/announcement";
import Menu from "../page/homePage/menu/menu";
import HomePage from "../page/filtHome/home/home";
import FiltPage from "../page/homePage/filtHome/filtHome";
import About from "../page/about/about";
import LogIn from "../page/register/logIn";

export const useRoutes = (props) => {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home state={props.state} />
      </Route>
      <Route path="/add/:id">
        <Announcement state={props.state} />
      </Route>
      <Route path="/my-home/:id">
        <Menu />
        <HomePage />
      </Route>
      <Route path="/filtPage/:id">
        <FiltPage state={props.state} />
      </Route>
      <Route path="/about">
        <About state={props.state} />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
