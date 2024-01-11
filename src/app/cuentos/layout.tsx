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
    <div className="container flex flex-col items-center text-center  lg:w-1/3 bg-white rounded-xl">

      <motion.div whileHover={{ scale:1.2 }}>
        <Link href="/">
          <Button variant={'secondary'} className=" text-2xl gap-2 mt-2 border-2">Inicio <FaHome /></Button>
        </Link>
        
      </motion.div>
      <div className={`${fredoca.className} antialiased `}>
        {children}
      </div>
    </div>
  );
}

