import React from "react";
import "./App.css";
import Nav from "./shared/Nav";
import HomePage from "./home/HomePage";
import Profile from "./profile/Profile";
import Explore from "./explore/Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import state from "./store/reducer";
import { createStore } from "redux";

const store = createStore(
  state,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
