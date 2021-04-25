import React from "react";
import "./App.css";
import Nav from "./shared/Nav";
import HomePage from "./home/HomePage";
import Profile from "./profile/Profile";
import Explore from "./explore/Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import { Provider } from 'react-redux'
import store from "../store"; */

function App() {
  return (
    /*     <Provider> */
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/explore" component={Explore} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
    /*     </Provider> */
  );
}

export default App;
