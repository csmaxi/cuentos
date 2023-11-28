import { BsTwitterX } from "react-icons/bs";
import {
    Card,
    CardFooter,
} from "@/components/ui/card"

import Link from "next/link";

const Footer = () => {
    return (

        <Card>
            <CardFooter>
                <div className="w-full flex flex-col items-center justify-center p-8 rounded-xl bg-[#f8f8f8]">
                    <p className="p-1 text-lg">by csmaxi</p>
                    <Link href="https://twitter.com/csmaxinro" className="hover:scale-105" target="_blank">
                        <BsTwitterX style={{ fontSize: "1em", color: "#000" }} />
                    </Link>
                </div>
            </CardFooter>
        </Card>


    );
}

export default Footer;