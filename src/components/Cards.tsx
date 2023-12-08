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
import { quicksand,fredoca } from "./fonts"
import Main from "@/components/Main"
import { Cuentos } from "../../data/datos"
import { motion } from "framer-motion"

function Cards() {

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-3">
            <Main />
            {Cuentos.map((cuento) => (
                <Card key={cuento.id} className="flex flex-col justify-between border-2">
                    <CardHeader className="flex-row gap-4 items-center justify-around">
                        <Avatar className="ring ring-offset-2 ring-purple-500" >
                            <AvatarImage
                                src={`/image/${cuento.id}.png`}
                                alt={cuento.title}
                            />
                            <AvatarFallback>
                                {cuento.title.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                        <CardTitle className={`${quicksand.className}  antialiased text-center`}>{cuento.title}</CardTitle>
                        <CardDescription>3'</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className={`${fredoca.className} antialiased text-center`}>{cuento.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <motion.div 
                        whileHover={{ scale:1.2 }}
                        className={`${fredoca.className} antialiased text-center `}>
                            <Link href={cuento.cuentoen}>
                                <Button className=" rounded-full">Inglés</Button>
                            </Link>

                        </motion.div>
                            <motion.div whileHover={{ scale:1.2 }}>
                                <Link href={cuento.cuentoes}>
                                    <Button className="rounded-full">Español</Button>
                                </Link>
                            </motion.div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default Cards;