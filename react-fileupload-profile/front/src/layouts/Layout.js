import React from "react";
import { Header } from "../components/Header";
import { useUser } from "../../lib/auth.api";

export const Layout = ({ children }) => {
  const user = useUser();
  return (
    <>
      {user && <h1>Welcome {user.username}</h1>}
      <Header />
      <section className="container">{children}</section>
      <footer className="container" style={{ marginTop: 20 }}>
        &copy; 2020 Webdev Part time - Gio, Diego, Simon, Alex, Marc
      </footer>
    </>
  );
};
