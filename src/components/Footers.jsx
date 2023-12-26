import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import jwire from '../assets/jwire.svg';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:flex-shrink-0 lg:w-1/4">
          <img src={jwire} alt="JWire Logo" className="h-5 mb-4" />
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-xl lg:text-2xl" />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaFacebook className="text-xl lg:text-2xl" />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaInstagram className="text-xl lg:text-2xl" />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaEnvelope className="text-xl lg:text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center  mb-8 lg:mb-0 lg:w-1/2 lg:max-w-md">
          <h1 className="mb-2 text-xl lg:text-2xl font-semibold">Subscribe to Our Newsletter</h1>
          <form className="flex items-center justify-center rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-white mr-2 w-32 lg:rounded-lg  lg:w-52"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
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
      
      </div>

      {/* Copyright */}
      <div className="text-base lg:text-lg opacity-75 text-center lg:text-center mt-8">
        &copy; 2023 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
