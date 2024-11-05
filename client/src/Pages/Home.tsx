import React from "react";
import Layout from "../Layout/Layout";
import HeroSection from "../Components/UI/HeroSection";
import Mission from "../Components/UI/Mission";
import { AboutUs } from "../Components/UI/AboutUs";
import Team from "../Components/UI/Team";
import Community from "../Components/UI/Community";
import { Work } from "../Components/UI/Work";
import { ContactUs } from "../Components/UI/ContactUs";


const Home: React.FC = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Mission />
        <AboutUs />
        <Team />
        <Community />
        <Work />
        <ContactUs />
      </Layout>
    </div>
  );
};

export default Home;
