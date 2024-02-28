import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import jwire from "../assets/jwire.svg";
import CareerPage from "./Career";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:flex-shrink-0 lg:w-1/4">
          <img src={jwire} alt="JWire Logo" className="h-5 mb-4" />
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/jeevikawires/"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-xl lg:text-2xl" />
            </a>

            <a
              href="mailto:jwires.mail@gmail.com"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaEnvelope className="text-xl lg:text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:flex-shrink-0 lg:w-1/4">
          <h1 className="mb-2 text-xl lg:text-2xl font-semibold">
            Quick Links
          </h1>
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Career
              </NavLink>
            </li>
            <li>
              <a
                href="#product"
                className="hover:text-gray-400 transition duration-300"
              >
                Product
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="text-center lg:text-left lg:w-1/4 lg:max-w-md mb-8 lg:mb-0">
          <h1 className="mb-2 text-xl lg:text-2xl font-semibold">Address</h1>
          <p className="opacity-75">
            Jeevika Women Initiative Renewable Energy and Solution Pvt. Ltd.
            <br />
            Dobhi, Gaya - 824220 Bihar, India
          </p>
        </div>

        {/* Subscribe Form */}
        {/* Add your subscribe form here */}
      </div>

      {/* Copyright */}
      <div className="text-base lg:text-lg opacity-75 text-center lg:text-center mt-8">
        &copy; 2024 J-WIRES PVT.LTD All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
