import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CampaignSingle from "../components/CampaignSingle";
import Policy from "../components/Policy";
import Footer from "../components/Footer";

function ShopPage() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Policy />
      <Footer />
    </>
  );
}

export default ShopPage;
