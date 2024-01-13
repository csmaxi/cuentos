import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat bg-slate-800 mb-24"
      style={{
        backgroundImage: "\"url('/placeholder.svg')\"",
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4 md:px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">Mini Cuentos</h1>
        <p className="mt-4 text-xl md:text-2xl text-white">Cuentos en Inglés y Español</p>
        <div className="mt-8">
          <Link

            className="inline-flex h-12 items-center justify-center rounded-md bg-gray-700 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="https://cafecito.app/csmaxi" target="_blank"
          >
            <h2 className="text-xl">Invitame un Cafecito</h2>
          </Link>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
        
        <Link href="https://www.youtube.com/@minicuentosapp" target="_blank">
            <Button className=" border-white"  variant="outline">
              Youtube
            </Button>
        </Link>
      </div>
    </section>
  )
}

