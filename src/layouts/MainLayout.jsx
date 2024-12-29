import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
