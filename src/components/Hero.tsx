'use client';

import { gochi } from "@/components/fonts";
import { annie } from "@/components/fonts";

const Hero = () => {
  return (
    <section className="flex justify-center md:h-64 pt-6 xl:pt-2 rounded-xl ">
      <div className=" text-black flex h-50 flex-col text-center md:flex-row rounded-lg">
        <div className="flex flex-col justify-center p-4">
          <h2 className={`${gochi.className} text-8xl`}>
            MINI <br />CUENTOS
            </h2>
          <span className={`${annie.className} text-4xl  text-purple-700`}>Cuentos en Inglés y Español</span>
        </div>
       
      </div>
    </section>
  );
}

export default Hero;
