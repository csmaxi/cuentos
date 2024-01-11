import { FaYoutube } from "react-icons/fa";
import {
    Card,
    CardFooter,
} from "@/components/ui/card"

import Link from "next/link";

const Footer = () => {
    return (

        <Card>
            <CardFooter>
                <div className="flex flex-col items-center">

                    <Link href="https://www.youtube.com/channel/UCa3zIsJPWJHbAm9vGoOVnvQ" className="hover:scale-105 " target="_blank">
                        <FaYoutube style={{ fontSize: "2em", color: "#FF0000" }} />
                    </Link>
                    <small>YouTube</small>
                </div>
            </CardFooter>
        </Card>


    );
}

export default Footer;