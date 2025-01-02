import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { authContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(authContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("User Logout successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/orders/salad">Order Foods</Link>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogout} className="btn btn-warning">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-2xl mx-auto  bg-black bg-opacity-40 fixed z-10">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 font-bold text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white font-bold">
            Belly
            <img className="w-8" src={logo} alt="" />
            BiteB
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
