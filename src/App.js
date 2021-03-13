import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/game";
import Home from "./pages/home";
import Live from "./pages/live";
import Login from "./pages/login";
import Register from "./pages/register";
import Stream from "./pages/stream";
import User from "./pages/user";
import "./reset.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id" exact>
          <User />
        </Route>
        <Route path="/stream">
          <Stream stream_key="yuhsEhLFD" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/live">
          <Live />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
