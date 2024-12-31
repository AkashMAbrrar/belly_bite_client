import React, { useState } from "react";
import orderCover from "../../assets/shop/Orders.jpg";
import Covered from "../shared/Covered/Covered";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "salad",
    "pizza",
    "soup",
    "desserts",
    "offered",
    "drinks",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Belly BiteB | Order Food</title>
      </Helmet>
      <Covered img={orderCover} title={"Order Foods"}></Covered>
      <div className=" mt-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>offered</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={offered}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
