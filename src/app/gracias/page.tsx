import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias",
  description: "Gracias por tu mensaje",
};

export default function GraciasPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl text-center">
        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          ¡Gracias!
        </div>
        <h1 className="headline-font text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Hemos recibido tu solicitud
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-readable">
          Te contactaremos a la brevedad. Mientras tanto, puedes volver al inicio o seguir explorando.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-md text-white font-medium gradient-cta inline-flex items-center justify-center"
          >
            Volver al inicio
          </Link>
          <Link
            href="#"
            className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 inline-flex items-center justify-center"
          >
            Ver más servicios
          </Link>
        </div>
      </div>
    </main>
  );
}


