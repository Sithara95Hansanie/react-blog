import React from "react";
import { Route, Switch } from "react-router-dom";

import "./Style/main.scss";
import Transaction from "./Components/Transaction";
import Home from "./Components/Pages/Home";
import Flex from "./Components/Flex";
import Effect from "./Components/Effets";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

import Post from "./Components/Layout/Post";

function App() {
  return (
    <Route
      path={"(.+)"}
      render={() => (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/slider" component={Transaction} />
            <Route exact path="/flex" component={Flex} />
            <Route exact path="/use-effects" component={Effect} /> */}

            <Route path="/:id" component={Post} />
          </Switch>
          <Footer />
        </>
      )}
    />
  );
}

export default App;
