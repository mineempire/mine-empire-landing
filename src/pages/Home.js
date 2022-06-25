import React from "react";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { heroTwo, heroThree, heroFour } from "../data/HeroData";
import Navbar from "../components/LandingNavbar/Navbar";
import { ResourcesContent } from "../components/Content/ResourcesContent";

// Hero Feature Content Carousel

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Content {...heroTwo} />
      <ResourcesContent {...heroFour} />
      <Content {...heroThree} />
    </>
  );
};

export default Home;
