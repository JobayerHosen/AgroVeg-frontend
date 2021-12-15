import React from "react";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Features></Features>
      <Services></Services>
      <Benefits></Benefits>
      <Footer></Footer>
    </div>
  );
};

export default Home;
