import Link from "next/link";
import { Button } from "./ui/button";
import { quicksand } from "./fonts";


const Main = () => {
    return (
        <div className="flex w-2/3 mx-auto border-2 rounded-lg p-6 bg-[#f8f8f8]">
            <div className={`${quicksand.className} antialiased`} >
                <p className="text-lg text-center font-bold">
                    Sumérgete en pequeñas grandes historias. Nuestra página de cuentos cortos te invita a disfrutar de emocionantes narrativas en dos idiomas.
                </p>
            </div>
            
        </div>
    );
}

export default Main;