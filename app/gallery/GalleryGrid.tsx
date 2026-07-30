"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "./gallery-data";

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = () => {
    if (selected === null) return;
    setSelected((selected + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selected === null) return;
    setSelected(
      (selected - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className="cursor-pointer overflow-hidden rounded-xl border border-yellow-500 bg-zinc-900 hover:scale-105 transition duration-300"
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={600}
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          <button
            className="absolute top-5 right-5 text-white text-4xl"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-5 text-5xl text-white"
            onClick={prevImage}
          >
            ❮
          </button>

          <Image
            src={galleryImages[selected]}
            alt="Preview"
            width={1200}
            height={900}
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />

          <button
            className="absolute right-5 text-5xl text-white"
            onClick={nextImage}
          >
            ❯
          </button>

        </div>
      )}
    </>
  );
}