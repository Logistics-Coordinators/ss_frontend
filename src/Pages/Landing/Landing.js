import React from "react";

import HeroSection from "../../Sections/HeroSection/HeroSection";
import Description from "../../Sections/DescriptionSection/Description";
import Carousel from "../../Sections/Carousel/Carousel";
import Banner from "../../Sections/Banner/Banner";
import Explore from "../../Sections/Explore/Explore";
import Services from "../../Sections/Services/Services";
import Footer from "../../Sections/Footer/Footer";

function Landing() {
  return (
    <div>
      <HeroSection />
      <Description />
      <Carousel />
      <Explore />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default Landing;
