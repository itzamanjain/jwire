"use client";

import { PinContainer } from "../components/ui/3d-pin";
import EESL from "../assets/EESL.png";
import Villgro from "../assets/Villgro.png";
import teri from "../assets/teri.png";
import icic from "../assets/icic.png";
import ceew from "../assets/ceew.png";
import oxfam from "../assets/oxfam.png";

export function AnimatedPinDemo() {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[40rem] w-full flex flex-wrap  items-center   justify-center ">
        <PinContainer
          title="EESL"
          href="https://eeslindia.org/en/home/#"
        >
          <div className="flex basis-full flex-col  p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              EESL
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                We are partner ed wiht eesl and working onamazing project
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-xl mt-4 ">
              <img
                src={EESL}
                alt="aceternity-ui-logo"
                className="w-full h-3/4 rounded-l-lg"
              />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="villgro.org/"
          href="https://www.villgro.org/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Villgro
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                J-WiRES and Villgro working on  DRE LIVELIHOOD PROJECT
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-white from-violet-500 via-purple-500 to-blue-500">
              <img
                src={Villgro}
                alt="aceternity-ui-logo"
                className="w-full h-full rounded-l-lg"
              />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="www.teriin.org/"
          href="https://www.teriin.org/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              teri
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                we are partner with teri and working on Clean Energy Access programme.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-white from-violet-500 via-purple-500 to-blue-500">
              <img
                src={teri}
                alt="aceternity-ui-logo"
                className="w-full h-full rounded-l-lg"
              />
            </div>
          </div>
        </PinContainer>
       
        
      </div>
      {/* <div className=" flex  bg-red-700">

        <h1>nothigg</h1>
      </div> */}

      <div className="w-full flex flex-wrap  items-center   justify-center">
      <PinContainer
          title="icicifoundation.org/"
          href="https://icicifoundation.org/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              ICICI Foundation
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                J-WiRES and ICICI Foundation working on amazing project
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-white from-violet-500 via-purple-500 to-blue-500">
              <img
                src={icic}
                alt="aceternity-ui-logo"
                className="w-full h-full rounded-l-lg"
              />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="www.oxfamindia.org/"
          href="https://www.oxfamindia.org/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              OXFAM India
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                J-WiRES and OXFAM India working on amazing project
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-white from-violet-500 via-purple-500 to-blue-500">
              <img
                src={oxfam}
                alt="aceternity-ui-logo"
                className="w-full h-full rounded-l-lg"
              />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="www.ceew.in/"
          href="https://www.ceew.in/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              CEEW
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                J-WIRES is in collabration with CEEW and working on DRE LIVELIHOOD PROJECT
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-white from-violet-500 via-purple-500 to-blue-500">
              <img
                src={ceew}
                alt="aceternity-ui-logo"
                className="w-full h-full rounded-l-lg"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}


