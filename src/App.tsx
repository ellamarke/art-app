import React, { useEffect } from "react";
import "./App.css";
import Nav from "./shared/Nav";
import HomePage from "./home/HomePage";
import Profile from "./profile/Profile";
import Explore from "./explore/Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // Fetching my API on load
  useEffect(() => {
    fetch(`/api/users/ella`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/explore" component={Explore} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
