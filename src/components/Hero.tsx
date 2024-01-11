import { gochi } from "@/components/fonts";
import { annie } from "@/components/fonts";
import Link from "next/link";
import { AiOutlineCoffee } from "react-icons/ai";
const Hero = () => {
  return (


    <div className="flex text-center justify-between p-4 m-6 border-2 rounded-lg items-center">
      <h2 className={`${gochi.className} text-3xl border-2 p-2 rounded-lg`}>
        MINI <br />CUENTOS
      </h2>
      <span className={`${annie.className} text-xl lg:text-3xl  text-purple-700`}>Cuentos en Inglés<br /> y Español</span>
      <div className="flex flex-col items-center">

        <Link href="https:cafecito.app/csmaxi" className="hover:scale-105 " target="_blank">
          <AiOutlineCoffee style={{ fontSize: "2em", color: "#000" }} />
        </Link>
        <small>Cafecito</small>
      </div>
    </div>
     


  );
}

export default Hero;
