import { Button } from "./ui/button";
import Link from "next/link";
import { GiCoffeeCup } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

function Top() {
    return (
        <div className="flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg">
            <div>
                <Link href="/">
                    <h2 className="text-5xl">MC</h2>
                </Link>
            </div>
            <div className="flex gap-2">
                <Link href="https://cafecito.app/csmaxi" target="_blank" className="border-2 p-2 rounded-full hover:text-green-400">
                    <GiCoffeeCup style={{  fontSize: '28px' }}/>
                </Link>
                <Link href="https://www.youtube.com/@minicuentosapp" target="_blank" className="border-2 p-2 rounded-full hover:text-red-500">
                    <FaYoutube style={{  fontSize: '28px' }} />
                </Link>
            </div>
        </div>
    );
}

export default Top;