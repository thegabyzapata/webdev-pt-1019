import React from "react";
import { PokemonPage } from "./pages/Pokemon.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

export const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={() => <PokemonPage />} />
        <Route
          path="/siguiente"
          component={() => <PokemonPage pokemonInitialStart={4} />}
        />
      </Switch>
    </Layout>
  </Router>
);
