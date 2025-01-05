import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Home/menu/Menu";
import Order from "../pages/Orders/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Cart from "../pages/Home/Dashboard/Cart/Cart";
import AllUsers from "../pages/allUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/orders/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "cart",
        element: (
          <PrivetRoute>
            <Cart></Cart>
          </PrivetRoute>
        ),
      },

      // admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
