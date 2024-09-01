"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Pulpo() {
  const [hovered, setHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1200) {
        // Breakpoint `lg` and smaller
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Comprobación inicial
    checkScreenSize();

    // Añadir un event listener para verificar cuando cambie el tamaño de la pantalla
    window.addEventListener("resize", checkScreenSize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setHovered(true);
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-white mb-40 lg:flex-row lg:my-10 lg:min-h-full">
      <div className="relative w-full max-w-4xl">
        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } inset-0 flex items-center justify-center`}
        >
          <Image
            src="/Imagenes Pulpo/Logo.jpeg"
            alt="Travel Agency Logo"
            width={300}
            height={300}
            className="lg:hidden block w-80 h-80"
          />
        </div>

        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[60%] left-[72%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 lg:mb-6">
            <Image
              src="/Imagenes Pulpo/Pesca.jpg"
              alt="Pesca Deportiva"
              width={1200}
              height={800}
              className="lg:w-14 lg:h-14 w-24 h-24 rounded-full object-cover mr-2"
            />
            <span className="text-lg font-semibold lg:w-72 w-full h-full">
              Pesca deportiva
            </span>
          </div>
        </div>

        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } transition-all duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[30%] left-[70%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 lg:mb-6">
            <Image
              src="/Imagenes Pulpo/Aves.jpg"
              alt="Avistamiento de Aves"
              width={1200}
              height={800}
              className="lg:w-14 lg:h-14 w-24 h-24 rounded-full object-cover mr-2"
            />
            <span className="text-lg font-semibold lg:w-72 w-full h-full">
              Avistamiento de aves
            </span>
          </div>
        </div>

        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } transition-all duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[7%] left-[40%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <Link href="/paquetes">
            <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 lg:mb-6">
              <Image
                src="/Imagenes Pulpo/Vuelo.jpg"
                alt="Vuelos"
                width={1200}
                height={800}
                className="lg:w-14 lg:h-14 w-24 h-24 rounded-full object-cover mr-2"
              />
              <span className="text-lg font-semibold lg:w-48 w-full h-full">
                Vuelos
              </span>
            </div>
          </Link>
        </div>

        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } transition-all duration-600 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[85%] left-[38%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full hover:scale-110 duration-300 hover:bg-orange-400 lg:mb-6">
            <Image
              src="/Imagenes Pulpo/Alojamiento.jpg"
              alt="Alojamientos"
              width={1200}
              height={800}
              className="lg:w-14 lg:h-14 w-24 h-24 rounded-full object-cover mr-2"
            />
            <span className="text-lg font-semibold lg:w-48 w-full h-full">
              Alojamientos
            </span>
          </div>
        </div>

        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } transition-all duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[60%] left-[3%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full -ml-10 hover:scale-110 duration-300 hover:bg-orange-400 lg:mb-6 lg:ml-0">
            <Image
              src="/Imagenes Pulpo/Diseño2.jpg"
              alt="Diseño Sonrisa"
              width={1200}
              height={800}
              className="lg:w-14 lg:h-14 w-24 h-24 rounded-full object-cover mr-2"
            />
            <span className="text-lg font-semibold lg:w-40 w-full h-full">
              Diseño de Sonrisa
            </span>
          </div>
        </div>

        <div
          className={`${
            isSmallScreen ? "" : "absolute"
          } transition-all duration-800 ${
            hovered ? "opacity-100" : "opacity-0"
          } top-[30%] left-[3%] transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full -ml-10 hover:scale-110 duration-300 hover:bg-orange-400 lg:mb-6 lg:ml-0">
            <Image
              src="/Imagenes Pulpo/Renta.jpg"
              alt="Renta de Carros"
              width={1200}
              height={800}
              className="lg:w-14 lg:h-14 w-24 h-24 rounded-full object-cover mr-2"
            />
            <span className="text-lg font-semibold lg:w-40 w-full h-full">
              Renta de carros
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pulpo;
