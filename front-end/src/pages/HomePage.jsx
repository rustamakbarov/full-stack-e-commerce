import Header from "../components/Header";
import Footer from "../components/Footer";
import Policy from "../components/Policy";
import Sliders from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Campaigns from "../components/Campaigns";
import Blogs from "../components/Blogs";
import Brands from "../components/Brands";
import CampaignSingle from "../components/CampaignSingle";

function HomePage() {
  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
    </>
  );
}

export default HomePage;
