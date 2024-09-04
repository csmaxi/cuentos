"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { quicksand, gochi } from "./fonts";
import { Cuentos } from "../../data/datos";
import { motion } from "framer-motion";
import Image from "next/image";

function Cards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:m-4 lg:w-2/3 lg:mx-auto">
      {Cuentos.map((cuento) => (
        <Card
          key={cuento.id}
          className="flex flex-col justify-between border border-gray-300 shadow-lg rounded-xl transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center gap-4 p-4">
            <div>
              <CardTitle
                className={`${quicksand.className} text-3xl md:text-4xl font-extrabold text-gray-900 text-center`}
              >
                {cuento.title}
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-center p-4">
            <Image
              src={`/image/${cuento.id}.jpg`}
              alt={cuento.title}
              width={250}
              height={250}
              className="rounded-full border-4 border-blue-400 mb-4"
            />
          </CardContent>

          <CardFooter className="flex justify-center gap-4 p-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href={cuento.cuentoen}>
                <Button
                  variant="outline"
                  className="text-xl border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Inglés
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href={cuento.cuentoes}>
                <Button
                  variant="outline"
                  className="text-xl border-red-600 text-red-600 hover:bg-red-50"
                >
                  Español
                </Button>
              </Link>
            </motion.div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
