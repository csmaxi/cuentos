"use client";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo o Título */}
        <div className="text-2xl font-semibold tracking-tight">
          <Link href="/">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">MiniCuentos</span>
          </Link>
        </div>

        {/* Enlaces de Navegación */}
        {/* <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span className="text-lg font-medium hover:text-gray-300 transition-colors cursor-pointer">Inicio</span>
          </Link>
          <Link href="/">
            <span className="text-lg font-medium hover:text-gray-300 transition-colors cursor-pointer">Blog</span>
          </Link>
          <Link href="/">
            <span className="text-lg font-medium hover:text-gray-300 transition-colors cursor-pointer">Recursos</span>
          </Link>
          <Link href="/">
            <span className="text-lg font-medium hover:text-gray-300 transition-colors cursor-pointer">FAQ</span>
          </Link>
        </div> */}

        {/* Botón de Llamada a la Acción */}
        {/* <div>
          <Link href="">
            <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
              Contáctanos
            </span>
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
