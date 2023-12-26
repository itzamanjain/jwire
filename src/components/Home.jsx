import React from "react";
import hero from "../assets/hero.svg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 py-16 lg:py-0 px-4 lg:px-8" id="home">
      <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left text-gray-800 mb-4 lg:ml-8">
          Embrace Sustainability <br />
          <span className="lg:pl-12 pl-1">
            with{" "}
            <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
              <Typewriter
                words={[" J-WIRES"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </span>
        </h1>
        <p className="text-center lg:text-left text-gray-600 lg:ml-8 leading-relaxed">
          Join us on a journey to a greener future. At J-WIRES, we're dedicated to pioneering <span className="text-green-600">sustainable solutions</span> and environmental initiatives. From cutting-edge technologies to community-driven projects, our mission is to create a positive impact on the planet. Let's work together to build a <span className="text-green-600">sustainable</span> and healthier world for generations to come.
        </p>
        <div className="text-center lg:text-left lg:ml-8">
          <iframe
            className="w-full h-64 lg:h-80 xl:h-[400px] lg:w-[560px] mx-auto lg:mx-0"
            src="https://www.youtube.com/embed/mJlYyI9Umao?si=-91mtiXnkRtuddlQ"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img className="w-full rounded-lg" src={hero} alt="Green Hero" />
      </div>
    </div>
  );
};

export default Home;
