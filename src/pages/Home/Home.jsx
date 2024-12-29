import React from "react";
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import MidSection from "../../components/MidSection/MidSection";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MidSection></MidSection>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
