import React from "react";
import LogoImage from "./ImageSlider";

export default function Homepage() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-normal md:items-center sm:h-[80dvh] transition-all translate-x-12">
      <div className=" md:flex-1 md:text-start flex justify-center gap-5 flex-col  ">
        <h1 className="text-blue-700 font-bold text-3xl ">DE CONSULT</h1>
        <h2 className="w-[70%]">
          DE Consult is an engineering consulting firm founded and established
          in 2020. It provides architecture, structure, interior, map design and
          quantity surveying, supervision, building information modeling and
          third party review of structural design.
        </h2>
      </div>
      <LogoImage />
    </div>
  );
}
