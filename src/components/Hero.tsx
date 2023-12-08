import { gochi } from "@/components/fonts";
import { annie } from "@/components/fonts";

const Hero = () => {
  return (
    
     
        <div className="flex flex-col text-center justify-center pt-4">
          <h2 className={`${gochi.className} text-6xl`}>
            MINI <br />CUENTOS
            </h2>
          <span className={`${annie.className} text-3xl  text-purple-700`}>Cuentos en Inglés y Español</span>
        </div>
       
     
    
  );
}

export default Hero;
