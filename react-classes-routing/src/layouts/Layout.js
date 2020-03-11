import React from "react";
import { Header } from "../components/Header";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section style={{ border: "1px solid red" }}>{children}</section>
      <footer>
        &copy; 2020 Webdev Part time - Gio, Diego, Simon, Alex, Marc
      </footer>
    </>
  );
};
