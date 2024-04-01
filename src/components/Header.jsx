"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ImagesSlider } from "../components/ui/images-slider";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import h6 from "../assets/h6.jpg";

export function ImagesSliderDemo() {
  const images = [h1, h2, h3, h4, h5, h6];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-3xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Embrace Sustainability <br /> with J-WiRES
        </motion.p>
        <p className="text-center text-md md:text-xl lg:text-left text-white lg:ml-8 leading-relaxed">
          At J-WiRES, we are dedicated to pioneering{" "}
          <span className="text-green-600">sustainable solutions</span> and
          environmental initiatives.
          <br />{" "}
          <span className="ml-10">
            Let's work together to build a{" "}
            <span className="text-green-600">sustainable</span> and{" "}
            <span className="text-green-600">healthier world</span> for
            generations to come.
          </span>
        </p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-10">
          <Link to="/about" className="block w-full h-full">
            <span>Learn More →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </Link>
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
