import React from "react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
  const [cart] = useCart();

  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-[#e3b96a]">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <BsCreditCard2FrontFill /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart {cart ? cart.length : 0}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdOutlineRateReview />
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">My Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders/salad">
              <TiThMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard contents */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
