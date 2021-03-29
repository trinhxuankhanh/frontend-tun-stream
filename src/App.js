import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/game";
import GameDetail from "./pages/gamedetail";
import Home from "./pages/home";
import Live from "./pages/live";
import Login from "./pages/login";
import Register from "./pages/register";
import Stream from "./pages/stream";
import UpdateUser from "./pages/updateuser";
import User from "./pages/user";
import "./reset.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route
          path="/stream/:id"
          render={(props) => <Stream {...props} />}
        ></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
        <Route path="/game/:id" exact>
          <GameDetail />
        </Route>
        <Route path="/updateuser/:id" exact>
          <UpdateUser />
        </Route>
        <Route path="/live">
          <Live />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
