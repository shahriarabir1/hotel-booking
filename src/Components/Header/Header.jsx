import React, { useState } from "react";
import Logo from "../../assets/Nav.png";

import { MdOutlineAccountCircle } from "react-icons/md";
import { logout } from "../Auth/auth";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toogeHandler = () => {
    setOpen(!open);
  };
  const [setings, setSettings] = useState(false);
  const token = localStorage.getItem("token");
  const openList = () => {
    setSettings(!setings);
  };
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed relative w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Prestige
            </span>
          </Link>

          <div className="flex md:order-2">
            {!token ? (
              <div>
                <Link to="/signup">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  className="text-sm px-4 py-2 text-center mr-3 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={openList}
                >
                  <MdOutlineAccountCircle className="text-black hover:text-blue-800 text-2xl" />
                </button>
                {!setings ? null : (
                  <div className="absolute top-17 bg-teal-50 p-2">
                    <ul>
                      <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">
                        My Profile
                      </li>
                      <li
                        className="hover:bg-blue-200 p-2 rounded cursor-pointer"
                        onClick={() => {
                          logout(navigate);
                        }}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            <button
              datacollapsetoggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toogeHandler}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {!token ? null : (
            <div
              className={`items-center justify-between   w-full md:flex md:w-auto md:order-1 ${
                open ? "flex" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-blue-500 md:hover:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/booking"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
