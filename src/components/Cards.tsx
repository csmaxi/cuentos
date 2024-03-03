'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { quicksand, fredoca, gochi } from "./fonts"
import { Cuentos } from "../../data/datos"
import { motion } from "framer-motion"

function Cards() {

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-2 p-2 ">
            {/* <Main /> */}
            {Cuentos.map((cuento) => (

                <Card key={cuento.id} className="flex flex-col justify-between border-2">
                    <CardHeader className="flex-row gap-4 items-center justify-around">
                        <Avatar className="ring ring-offset-2 ring-slate-800" >
                            <AvatarImage
                                src={`/image/${cuento.id}.jpg`}
                                alt={cuento.title}
                            />
                            <AvatarFallback>
                                {cuento.title.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                        <CardTitle className={`${quicksand.className} antialiased text-center`}>{cuento.title}</CardTitle>
                        <CardDescription>3'</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className={`${fredoca.className} antialiased text-center text-lg`}>{cuento.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center gap-2">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`${gochi.className} antialiased text-center `}>
                            <Link href={cuento.cuentoen}>
                                <Button variant={"outline"} className="hover:text-red-600 text-xl">Inglés</Button>
                            </Link>

                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href={cuento.cuentoes}>
                                <Button variant={"outline"} className="hover:text-blue-600 text-xl" >Español</Button>
                            </Link>
                        </motion.div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default Cards;