import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const items = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Sarthi",
    link: "/sarthi",
  },
  {
    id: 2,
    title: "Jobs",
    link: "/jobs",
  },
  {
    id: 3,
    title: "Quick Search",
    link: "/quick-search",
  },
  {
    id: 4,
    title: "Catalogue",
    link: "/catalogue",
  },
  {
    id: 5,
    title: "Events",
    link: "/events",
  },
  {
    id: 6,
    title: "Why Us?",
    link: "/why-us",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="">
      <nav className="relative px-4 py-4 flex justify-between items-center dark:bg-gray-900 bg-slate-200">
        <Link className="text-3xl font-bold leading-none h-20 xl:h-20 lg:h-14" to="/">
          <img src={logo} alt="logo" className="h-20  px-10 lg:px-1 lg:h-16 xl:h-20" />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden lg:flex lg:items-center lg:justify-center xl:w-2/3 lg:w-3/5  xl:gap-6  lg:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {items.map((item) => (
            <li key={item.id}>
              <Link
                onClick={() => setSelected(item.title)}
                className={`xl:text-base lg:text-sm text-gray-700 dark:text-gray-100 hover:dark:text-gray-300 font-semibold hover:text-gray-500 ${
                  selected === item.title ? "text-gray-600 font-bold" : ""
                }`}
                to={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="hidden lg:inline-block   lg:py-2 lg:px-5 xl:ml-auto xl:mr-3 xl:py-2 xl:px-7 bg-gray-100 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-2xl transition duration-200"
          to="/login"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block   lg:py-2 lg:px-5 xl:ml-auto xl:mr-3 xl:py-2 xl:px-7 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-2xl transition duration-200"
          to="/signup"
        >
          Sign Up
        </Link>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-300 dark:bg-gray-900 border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link
                className="mr-auto text-3xl font-bold leading-none flex items-center justify-center"
                to="/"
              >
                <img src={logo} alt="logo" className="h-20 " />
              </Link>
              <button
                className="navbar-close"
                aria-label="Close Menu"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {items.map((item) => (
                  <li className="mb-1" key={item.id}>
                    <Link
                      className="block p-4 text-base font-semibold dark:text-gray-400 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="xl:pt-6 pt-6 lg:pt-">
                <Link
                  onClick={() => toggleMenu()}
                  className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  to="/login"
                >
                  Sign in
                </Link>
                <Link
                  onClick={() => toggleMenu()}
                  className="block px-4 py-3 mb-2 leading-none text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2024</span>
              </p>
            </div>
          </nav>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
