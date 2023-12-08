import Link from "next/link";
import { Button } from "./ui/button";
import { quicksand } from "./fonts";

const Main = () => {
    return (
        <div className="flex flex-col  justify-around text-center border-2 rounded-lg p-6 bg-[#f8f8f8]">
            <div className={`${quicksand.className} antialiased`} >
                <p className="text-lg font-bold">
                    Sumérgete en pequeñas grandes historias. Nuestra página de cuentos cortos te invita a disfrutar de emocionantes narrativas en dos idiomas.
                </p>
            </div>
            <div className="p-4">
                <Link href="https://cafecito.app/csmaxi" target="_blank">
                    <Button  className={`${quicksand.className} text-2xl font-bold `} >
                        Invitame un Cafecito
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Main;