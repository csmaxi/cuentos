'use client';
import { FaYoutube } from "react-icons/fa";
import { gochi } from "@/components/fonts";
import { annie } from "@/components/fonts";
import Link from "next/link";



const Hero = () => {
  return (
    <section className=" w-11/12 md:h-64 m-auto pt-6 xl:pt-2 rounded-xl ">
      <div className=" text-black flex justify-between h-60 p-2 flex-col text-center md:flex-row rounded-lg bg-[#f8f8f8]">
        <div className="flex flex-col justify-center">
          <h2 className={`${gochi.className} text-6xl`}>
            MINI CUENTOS
            </h2>
          <span className={`${annie.className} text-3xl  text-purple-700`}>Cuentos en Inglés y Español</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          
          <Link href="https://www.youtube.com/channel/UCa3zIsJPWJHbAm9vGoOVnvQ" className="hover:scale-105 " target="_blank">
            <FaYoutube style={{fontSize: "4em", color: "#FF0000"}} />
          </Link>
          <small>Mira todos los videos en YouTube</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;
