'use client';

import { gochi } from "@/components/fonts";
import { annie } from "@/components/fonts";




const Hero = () => {
  return (
    <section className=" flex justify-center md:h-64 m-auto pt-6 xl:pt-2 rounded-xl ">
      <div className=" text-black flex h-50  p-2 flex-col text-center md:flex-row rounded-lg bg-[#f8f8f8]">
        <div className="flex flex-col justify-center">
          <h2 className={`${gochi.className} text-6xl`}>
            MINI CUENTOS
            </h2>
          <span className={`${annie.className} text-3xl  text-purple-700`}>Cuentos en Inglés y Español</span>
        </div>
       
      </div>
    </section>
  );
}

export default Hero;
