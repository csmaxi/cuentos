import Link from "next/link";

function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] my-12 p-10  shadow-2xl border border-gray-200 rounded-3xl container max-w-6xl mx-auto mb-24">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 text-center">
        Clásicos Bilingües
      </h1>
      <p className="text-2xl md:text-4xl text-gray-700 font-medium mb-8 text-center">
        Explora una colección de cuentos infantiles en inglés y español.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link href="#ir" className="scroll-smooth">
          <button className="px-6 py-3 bg-blue-700 text-white text-lg md:text-xl font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Comenzar a leer
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Component;
