import React, { useState } from "react";
import orderCover from "../../assets/shop/Orders.jpg";
import Covered from "../shared/Covered/Covered";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Covered img={orderCover} title={"Order Foods"}></Covered>

      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <h2>Salads 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Pizzas content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Soups content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Desserts content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Drinks content 5</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
