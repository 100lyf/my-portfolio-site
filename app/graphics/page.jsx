"use client";
import React from "react";

const GraphicsGallery = () => {
  const images = [
    
    "/graphics/jellyframed.jpg",
    "/graphics/jellystarframed.png",
    "/graphics/starframed.png",
    "/graphics/ice-creamopt.jpg",
    "/graphics/niceopt.jpg",
    "/graphics/breadopt.png",
    "/graphics/3-kidsframed.png",
    "/graphics/heartfinishframe.png",
    "/graphics/handframed.png",
    "/graphics/Inst-canceropt.jpg",
    "/graphics/NailMagazine_Finalopt.jpg",
    "/graphics/spiceFinishopt.jpg",
  ];

  return (
    <section className="min-h-screen bg-[#F5EFE6] text-black flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Graphic Design Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={src}
              alt={`graphic-${i}`}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GraphicsGallery;
