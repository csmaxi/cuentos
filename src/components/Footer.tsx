"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold mb-2">Suscríbete a Nuestro Boletín</h2>
          <p className="text-gray-300 mb-4">Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada.</p>
          <Button
            variant="outline"
            className="text-lg border-white text-black hover:text-gray-900 transition-colors"
          >
            Suscribirse
          </Button>
        </div>
        
        <div className="text-center">
          <ul className="flex space-x-4 mb-4">
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
