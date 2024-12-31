import React from "react";
import { Helmet } from "react-helmet-async";
import Covered from "../../shared/Covered/Covered";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinksImg from "../../../assets/menu/drinks1.jpeg";
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
  const drinks = menu.filter((item) => item.category === "drinks");

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
        title={"desserts"}
        Img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} Img={PizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} Img={SaladImg}></MenuCategory>
      <MenuCategory title={"soup"} items={soup} Img={soupImg}></MenuCategory>
      <MenuCategory
        title={"drinks"}
        items={drinks}
        Img={drinksImg}></MenuCategory>
      <MenuCategory
        title={"offered"}
        items={offered}
        Img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
