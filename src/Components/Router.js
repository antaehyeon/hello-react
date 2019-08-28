import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

/**
 * exact - 정확히 path 가 일치하는지
 */
export default () => (
  <Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" exact component={TV}></Route>
    <Route path="/search" exact component={Search}></Route>
  </Router>
);
