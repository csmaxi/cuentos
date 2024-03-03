'use client';
import { fredoca } from "@/components/fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";
import {motion} from "framer-motion"

export default function CuentosLayout({

  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex flex-col items-center text-center  lg:w-1/3 bg-gray-50 rounded-xl border-2">

      <motion.div whileHover={{ scale:1.1 }}>
        <Link href="/">
          <Button variant={'outline'} className=" text-2xl  gap-2 mt-2 border">Inicio <FaHome /></Button>
        </Link>
        
      </motion.div>
      <div className={`${fredoca.className} antialiased `}>
        {children}
      </div>
    </div>
  );
}

