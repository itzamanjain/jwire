import React from "react";
import { AnimatedPinDemo } from "./AnimatedPinDemo";

const OurPartners = () => {
  return (
    <div className="mb-20 flex flex-col w-full ">
      <div className="flex flex-col items-center">
        <h1 className="bg-gray-100 text-center text-5xl mt-10 font-bold text-blue-800 hover:text-purple-600 transition-colors duration-300 py-2">
          Our Partners
        </h1>
        <p className="text-center mt-5 text-wrap w-1/2 font-bold text-gray-700 leading-relaxed">
          J-WiRES is partnered with various institutions such as TERI, IITB,
          EESL, CEEW, Villgro, and many more. These partnerships contribute to
          their mission by providing support in research, training, and other
          areas related to solar energy and community development.
        </p>
      </div>

      <AnimatedPinDemo />
    </div>
  );
};

export default OurPartners;
