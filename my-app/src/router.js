import React from "react";
import Login from "./pages/Login";
import Index from "./pages/Index";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
