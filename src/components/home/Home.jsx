import React from "react";
// all imag 
import Banner from "../../assets/banner.jpg";
import BannerTwo from "../../assets/banner-five.jpg";
// all imag 
import BannerOne from "./BannerOne";
import Info from "./Info";
import Ads from "./Ads";
import NewArrivals from "./NewArrivals";
import SpecialOffers from "./SpecialOffers";
import OurBestSeller from "./OurBestSeller";

const Home = () => {
  return (
    <section id="home" className="pt-44 px-4">
      <BannerOne src={Banner} alt="Banner" />
      <Info />
      <Ads/>
      <NewArrivals/>
      <OurBestSeller/>
      <div className="container mx-auto">
      <BannerOne src={BannerTwo} alt="Banner" />
      </div>
      <SpecialOffers/>
    </section>
  );
};

export default Home;
