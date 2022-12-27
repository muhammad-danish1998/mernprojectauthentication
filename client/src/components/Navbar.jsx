import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log("state------->", state);
  const RenderElement = () => {
    console.log("abc");
    if (state) {
      return (
        <>
          <NavLink to={"/"} className="mr-4 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to={"/about"} className="mr-4 hover:text-gray-900">
            About
          </NavLink>
          <NavLink to={"/contact"} className="mr-4 hover:text-gray-900">
            Contact
          </NavLink>

          <NavLink to={"/logout"} className="mr-4 hover:text-gray-900">
            Logout
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to={"/"} className="mr-4 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to={"/about"} className="mr-4 hover:text-gray-900">
            About
          </NavLink>
          <NavLink to={"/contact"} className="mr-4 hover:text-gray-900">
            Contact
          </NavLink>
          <NavLink to={"/signin"} className="mr-4 hover:text-gray-900">
            Login
          </NavLink>
          <NavLink to={"/signup"} className="mr-4 hover:text-gray-900">
            Register
          </NavLink>
        </>
      );
    }
  };
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <RenderElement />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
