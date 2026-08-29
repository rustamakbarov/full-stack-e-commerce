import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Policy from "../components/Policy";
import Search from "../components/Modals/Search";
import Dialog from "../components/Modals/Dialog";

function MainLayout({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(
    function () {
      const dialogStatus = localStorage.getItem("dialog")
        ? JSON.parse(localStorage.getItem("dialog"))
        : localStorage.setItem("dialog", JSON.stringify(true));

      setIsDialogShow(dialogStatus);
    },
    [3000],
  );

  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Policy />
      <Footer />
    </div>
  );
}

export default MainLayout;
