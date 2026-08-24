import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Policy from "../components/Policy";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Policy />
      <Footer />
    </>
  );
}

export default MainLayout;
