"use client";

import React, { useState } from "react";

const MasVisitados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/Mas visitados/Francia.png", alt: "París" },
    { src: "/Mas visitados/Argentina.png", alt: "Argentina" },
    { src: "/Mas visitados/Italia.png", alt: "Roma" },
    { src: "/Mas visitados/Sudafrica.png", alt: "Sudáfrica" },
    { src: "/Mas visitados/Japon.png", alt: "Japón" },
    { src: "/Mas visitados/España.png", alt: "España" },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-stone-200 w-full py-8">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center mb-4 mt-4">
          <h2 className="text-xl font-bold font-inter text-[#05073C] ">
            Destinos más visitados
          </h2>
        </div>

        {/* Grid for desktop */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 max-h-[310px] mt-11">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover rounded-lg shadow-lg ${
                index === 1 ? "row-span-2" : ""
              } ${index === 2 ? "col-span-2" : ""}`}
            />
          ))}
        </div>

        {/* Carousel for mobile */}
        <div className="md:hidden mt-11 relative w-full">
          <div className="overflow-hidden">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={handlePrevClick}
              className="bg-gray-700 text-white rounded-full p-2"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextClick}
              className="bg-gray-700 text-white rounded-full p-2"
            >
              &#8594;
            </button>
          </div>
        </div>

        <h3 className="text-blue-500 cursor-pointer text-right mt-4">
          Ver todos
        </h3>
      </div>
    </div>
  );
};

export default MasVisitados;
