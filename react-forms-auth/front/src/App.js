import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { UserContext } from "../lib/auth.api";
import { PrivatePage } from "./pages/Private.page";

export const App = () => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/auth/login" component={LoginPage} />
            <Route path="/auth/signup" component={SignUpPage} />

            <Route path="/private" component={PrivatePage} />
          </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
};
