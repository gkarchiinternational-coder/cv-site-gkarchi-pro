"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function ProjectGallery({ images, title, role }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-12">
      {/* Main Interactive Showcase with Smooth Slider */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-creme border border-ligne shadow-subtle group">
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].caption}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        {/* Navigation arrows (revealed on hover or on mobile) */}
        <button
          onClick={prevImage}
          aria-label="Image précédente"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-fond/90 backdrop-blur-md border border-ligne flex items-center justify-center text-gris-fonce hover:bg-gris-fonce hover:text-fond transition-all duration-300 shadow-subtle"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextImage}
          aria-label="Image suivante"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-fond/90 backdrop-blur-md border border-ligne flex items-center justify-center text-gris-fonce hover:bg-gris-fonce hover:text-fond transition-all duration-300 shadow-subtle"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Top Floating Counter */}
        <div className="absolute top-4 right-4 bg-fond/90 backdrop-blur-md px-3.5 py-1.5 border border-ligne text-xs font-mono text-gris-fonce">
          <span>0{selectedIndex + 1}</span>
          <span className="text-gris-clair mx-1.5">/</span>
          <span className="text-gris-moyen">0{images.length}</span>
        </div>

        {/* Bottom Inset Caption Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-fond/95 backdrop-blur-md p-4 sm:p-5 border-t border-ligne flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
          <p className="text-gris-fonce font-light leading-relaxed max-w-3xl">
            <strong className="font-futura uppercase tracking-wider text-[11px] text-gris-clair mr-2">
              PERSPECTIVE 0{selectedIndex + 1} :
            </strong>
            {images[selectedIndex].caption}
          </p>

          <span className="font-mono text-[11px] text-gris-moyen flex-shrink-0">
            3D Client GK ARCHI
          </span>
        </div>
      </div>

      {/* Horizontal Thumbnail Strip to quickly click and scroll through any render */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 scrollbar-none">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative flex-shrink-0 w-24 sm:w-36 aspect-[16/10] overflow-hidden border transition-all duration-400 ${
              selectedIndex === idx
                ? "border-gris-fonce ring-2 ring-gris-fonce/20 scale-[1.02]"
                : "border-ligne opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img.url}
              alt={img.caption}
              fill
              sizes="150px"
              className="object-cover"
            />
            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/60 text-white text-[9px] font-mono">
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
