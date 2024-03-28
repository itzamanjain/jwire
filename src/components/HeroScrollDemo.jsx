"use client";

import { ContainerScroll } from "../components/ui/container-scroll-animation";

import m2 from "../assets/model marts/m2.jpg"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl  font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mb-20">
              J-WiRES  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Model Mart
              </span>
            </h1>
          </>
        }
      >
        <img
          src={m2}
          alt="modelmart"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}


