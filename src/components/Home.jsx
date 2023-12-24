import React from "react";
import hero from "../assets/hero.svg";

import banner from "../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <>
      <div className="md:flex flex flex-col-reverse lg:flex lg:flex-row">
        <div className="md:px-32 px-10  ">
          {" "}
          <h1
            className="md:text-4xl pl-4 "
            style={{
              paddingTop: "5rem",
              margin: "auto 0",
              fontWeight: "bold",
            }}
          >
            Build Your Green Future <br />
            <span className="md:pl-12 pl-[3.75rem]"> With</span>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              <Typewriter
                words={[" J-WIRES"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="lg:mt-40 mt-8">
            <iframe
             className="md:w-[560px] md:h-[315px] "
              src="https://www.youtube.com/embed/mJlYyI9Umao?si=-91mtiXnkRtuddlQ"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
