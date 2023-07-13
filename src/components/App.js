import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import GameBuilder from "../components/GameBuilder";
import Rules from "../components/Rules";

function App() {
  return (
    <Router>
      <NavBar/>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={GameBuilder} />
        <Route path="/rules" component={Rules} />
      </div>
    </Router>
  );
}

export default App;

