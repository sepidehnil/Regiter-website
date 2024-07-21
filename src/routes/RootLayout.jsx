import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import VerticalLinearStepper from "../components/profile-stepper/VerticalLinearStepper";
import Dashboard from "../components/dashboard/Dashboard";

export default function RootLayout() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={VerticalLinearStepper} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/auth" />
      </Switch>
    </Router>
  );
}
