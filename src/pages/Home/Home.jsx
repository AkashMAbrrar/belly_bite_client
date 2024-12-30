import React from "react";
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import MidSection from "../../components/MidSection/MidSection";
import PopularMenu from "./PopularMenu/PopularMenu";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Belly BiteB | Home Page</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <MidSection></MidSection>
      <PopularMenu></PopularMenu>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
