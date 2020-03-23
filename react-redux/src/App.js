import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AlbertoContador } from "./components/AlbertoContador";
import { Leaders } from "./components/Leaders";

export const App = () => (
  <Provider store={store}>
    <Leaders />
    <AlbertoContador equipo="Movistar" />
    <AlbertoContador equipo="RaboBANK" />
  </Provider>
);
