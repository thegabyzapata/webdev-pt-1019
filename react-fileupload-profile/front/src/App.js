import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { UserContext, whoami } from "../lib/auth.api";
import { PrivatePage } from "./pages/Private.page";
import styled from "styled-components";
import { ProfilePage } from "./pages/Profile.page";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 50px;
  }
`;

export const App = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the app starts this runs only once
    console.log("Welcome to app! 👨🏼‍💻");

    // Try to get the current logged in user from our backend
    whoami()
      .then((user) => {
        console.error(`Welcome again user ${user.username}`);
        setUser(user);
      })
      .catch((e) => {
        console.error("No user logged in ");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {loading && (
        <Loading>
          <img src="https://i.pinimg.com/originals/2b/7c/f2/2b7cf21b42bccf075a5dbe1b9586d477.gif" />
        </Loading>
      )}
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/auth/login" component={LoginPage} />
            <Route path="/auth/signup" component={SignUpPage} />
            <Route path="/auth/profile" component={ProfilePage} />
            <Route path="/private" component={PrivatePage} />
          </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
};
