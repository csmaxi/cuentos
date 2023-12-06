import { fredoca } from "@/components/fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";


export default function CuentosLayout({

  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex flex-col items-center text-center md:w-1/2 lg:w-1/3 ">

      <Link href="/">
        <Button className="gap-4 w-40 text-xl mt-2">Inicio <FaHome /></Button>
      </Link>
      
      

      <div className={`${fredoca.className} antialiased`}>
        {children}
      </div>
    </div>
  );
}