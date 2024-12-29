import React from "react";
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import MidSection from "../../components/MidSection/MidSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MidSection></MidSection>
    </div>
  );
};

export default Home;
