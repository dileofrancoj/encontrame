import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import People from "./Pages/People";
const App: React.SFC = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/personas" exact render={People} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
