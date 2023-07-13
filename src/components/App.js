import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import GameBuilder from "../components/GameBuilder";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={GameBuilder} />
      </div>
    </Router>
  );
}

export default App;

