import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
