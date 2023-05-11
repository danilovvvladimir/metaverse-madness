import React from "react";
import About from "../sections/About/About";
import Explore from "../sections/Explore/Explore";
import Header from "../sections/Header/Header";
import Hero from "../sections/Hero/Hero";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Explore />
    </>
  );
};

export default MainPage;
