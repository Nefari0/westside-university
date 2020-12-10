import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Classlist from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

// import { router } from "json-server";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} exact path="/about" />
    <Route component={Classlist} exact path="/classlist/:class" />
    <Route component={Student} exact path="/student/:id" />
  </Switch>
);
