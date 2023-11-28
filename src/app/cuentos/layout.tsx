import Buttons from "@/components/Buttons";
import { fredoca } from "@/components/fonts";

export default function CuentosLayout({

  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex flex-col items-center text-center md:w-1/2 lg:w-1/3 ">
      
      <div className={`${fredoca.className} antialiased`}>{children}</div>
    </div>
  );
}