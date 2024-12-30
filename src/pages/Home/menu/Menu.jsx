import React from "react";
import { Helmet } from "react-helmet-async";
import Covered from "../../shared/Covered/Covered";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Belly BiteB | Menu</title>
      </Helmet>
      <Covered img={menuImg} title={"Our Menu"}></Covered>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"Desserts"}
        Img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"Pizza"} Img={PizzaImg}></MenuCategory>
      <MenuCategory
        items={salad}
        title={"Greek Salad"}
        Img={SaladImg}></MenuCategory>
      <MenuCategory
        title={"Supper Soups"}
        items={soup}
        Img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
