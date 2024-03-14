import React from "react";
import women from "../assets/women.svg";
import idea from "../assets/idea.svg";
import com from "../assets/com.svg";
import energy from "../assets/energy.svg";
import AnimatedNumbers from './AnimatedNumbers';
import { SparklesPreview } from "./Sparkles";

const Goal = () => {
  return (
    <section id="goal" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        
        <h2 className="text-center text-2xl font-bold mb-8">Goal</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: women, text: "Powering Women" },
            { icon: idea, text: "Innovative Ideas" },
            { icon: com, text: "Community Impact" },
            { icon: energy, text: "Sustainable Energy" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center shadow-md transition-transform transform hover:scale-105"
            >
              <img src={item.icon} alt="" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold text-center">{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-2xl lg:text-3xl  font-bold mb-8 text-center text-gray-800">
        What Impact Has J-wires Had?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AnimatedNumbers endValue={400} label="S-MART" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AnimatedNumbers endValue={1000} label="WOMEN ENGAGED" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AnimatedNumbers endValue={50000} label="CLEAN COOKING DISSEMINATED" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AnimatedNumbers endValue={30} label="LIVEHOOD Appliances Disseminated" />
        </div>
      </div>
    </div>

    </section>
  );
};

export default Goal;
