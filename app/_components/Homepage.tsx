import React from "react";
import LogoImage from "./ImageSlider";
import AdminProfiles from "./AdminProfiles";
import AnimateHeader from "./Animate";
import AnimateProfiles from "./AnimateProfiles";

export default function Homepage() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <AnimateHeader>
        <div className="flex flex-col md:flex-row justify-center md:justify-normal md:items-center sm:h-[90dvh] transition-all md:translate-x-12 md:-translate-y-9 w-full">
          <div className=" md:flex-1 md:text-start flex justify-center gap-5 flex-col  ">
            <h1 className="text-blue-700 font-bold text-3xl ">DE CONSULT</h1>
            <h2 className="w-[70%]">
              DE Consult is an engineering consulting firm founded and
              established in 2020. It provides architecture, structure,
              interior, map design and quantity surveying, supervision, building
              information modeling and third party review of structural design.
            </h2>
          </div>
          <LogoImage />
        </div>
      </AnimateHeader>

      <div>
        <h1 className="text-center text-3xl font-bold underline decoration-blue-700 font-mono ">
          The Admins
        </h1>
        <AdminProfiles />
      </div>
    </div>
  );
}
