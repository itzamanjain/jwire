import React from "react";
import women from "../assets/women.svg";
import idea from "../assets/idea.svg";
import com from "../assets/com.svg";
import energy from "../assets/energy.svg";

const Goal = () => {
  return (
    <section id="goal" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">What Motivates Us?</h1>
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
    </section>
  );
};

export default Goal;
