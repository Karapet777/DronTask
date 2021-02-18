import React from "react";

import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import HomeSection from "containers/homeSection/HomeSection";
import Features from "containers/featuresSection/Features";
import Slider from "containers/sliderSection/Slider";
import AccessoriesSection from "containers/accessories/AccessoriesSection";
import FollowSection from "containers/followSection/FollowSection";
import Gallery from "containers/gallery/Gallery";
import Clients from "containers/clientsSection/Clients";
import Footer from "containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <HomeSection />
        <Features />
        <Slider />
        <AccessoriesSection />
        <FollowSection />
        <Gallery />
        <Clients />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
