import React from "react";

import Banner from "../../components/Hero/Banner.jsx";
import HeroImg from "../../components/Hero/HeroImg.jsx";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex justify-center items-center  bg-slate-400 bg-[url('./assets/bg-hero.jpg')] bg-cover bg-center relative"
    >
      <div className="w-full mt-16  mx-4 md:h-1/2 lg:pt-10 xl:pt-20  flex justify-center items-center flex-col md:flex-row">
        <div className="flex w-full h-full md:justify-center md:items-center pb-8  ">
          <Banner />
        </div>
        <div className="flex w-full h-full lg:p-20">
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
