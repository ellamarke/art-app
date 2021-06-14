import React from "react";
import "./App.css";
import Nav from "./shared/Nav";
import HomePage from "./home/HomePage";
import Profile from "./profile/Profile";
import Explore from "./explore/Explore";
import Gallery from "./gallery/Gallery";
import ArtistPage from "./explore/ArtistPage";
import GalleryPage from "./explore/GalleryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import state from "./store/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ParallaxProvider } from "react-scroll-parallax";
import ArtworkPage from "./explore/ArtworkPage";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/sagas";

/* 

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application */

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, state);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
let persistor = persistStore(store as any);

sagaMiddleware.run(mySaga);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ParallaxProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Nav />
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/explore" component={Explore} />
              <Route path="/profile" component={Profile} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/artist-page" component={ArtistPage} />
              <Route path="/artwork-page" component={ArtworkPage} />
              <Route path="/gallery-page" component={GalleryPage} />
            </Switch>
          </PersistGate>
        </ParallaxProvider>
      </Provider>
    </Router>
  );
}

export default App;
