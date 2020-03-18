import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { PrivatePage } from "./pages/Private.page";
import { FrasePage } from "./pages/Frase.page";
import { withAuthentication } from "../lib/withAuthentication";

export const App = withAuthentication(() => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/signup" component={SignUpPage} />
        <Route path="/private" component={PrivatePage} />
        <Route
          path="/frase/:id"
          component={props => <FrasePage taID={props.match.params.id} />}
        />
      </Switch>
    </Layout>
  </Router>
));
