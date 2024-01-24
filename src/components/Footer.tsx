
import {
    Card,
    CardFooter,
} from "@/components/ui/card"

import Link from "next/link";

const Footer = () => {
    return (

        <Card>
            <CardFooter className="bg-slate-800 p-8 text-white mt-24">
                <small>Mini cuentos 2024.</small>
            </CardFooter>
        </Card>


    );
}

export default Footer;