import Link from "next/link";
import { Button } from "./ui/button";
import { FaHome } from "react-icons/fa";




const Buttons = () => {
    return (
        <div className="flex p-6">

            <Link href="/">
                <Button className="gap-2">Inicio <FaHome /></Button>
            </Link>

            <Link href="/cuentos/blancanieves/en">
                <Button>Inglés</Button>
            </Link>
            <Link href="/cuentos/blancanieves/es">
                <Button>Español</Button>
            </Link>

        </div>
    );
}



export default Buttons;





