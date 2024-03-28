"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gray-100 text-black  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "What is the mission of J-WiRES?",
    name: "The mission of J-WiRES is to create a sustainable solar ecosystem in Bihar that empowers community women and provides affordable and reliable solar solutions to public and private partners. They aim to promote energy efficiency, reduce carbon footprint, and contribute towards developing rural communities in Bihar while controlling climate change.",
    title: "",
  },
  {
    quote:
    "How does J-WiRES aim to achieve its mission?",
    name: "J-WiRES aims to achieve its mission by establishing individual solar shops (s-marts) run by community women (SHG Didis) in their own locations. Additionally, they form a group enterprise (J-WiRES) to procure solar projects from government and private partners, providing cost-effective solutions and assured service. They are also engaged in research projects, energy need assessment DPR, and providing solar advance training.",
    title: "",
  },
  {
    quote: "What is the vision of J-WiRES?",
    name: "The vision of J-WiRES is to become a leading solar enterprise in Bihar, known for its commitment to sustainability and social impact. They aim to expand their reach to more districts and communities, offer advanced solar training and research projects, and create a model that can be replicated in other parts of India to contribute towards India's goal of achieving a clean energy future.",
    title: "",
  },
  {
    quote:
      "How many solar shops does J-WiRES have and in how many districts are they located?",
    name: "J-WiRES has 341 solar shops located in 5 districts of Bihar, namely Gaya, Nawada, Aurangabad, West Champaran, and Bhojpur.",
    title: "",
  },
  {
    quote:
      "Can you name some of the institutions J-WiRES is partnered with?",
    name: "J-WiRES is partnered with various institutions such as TERI, IITB, EESL, CEEW, Villgro, and many more. These partnerships contribute to their mission by providing support in research, training, and other areas related to solar energy and community development.",
    title: "",
  },
];
