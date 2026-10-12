"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
  const containerRef = useRef(null);

  const educations = [
    {
      year: "2014 — 2018",
      degree: "Diplôme Supérieur d'Architecture & Conception Urbaine",
      school: "École Nationale Supérieure d'Architecture & du Paysage",
      note: "Spécialisation en architectures contemporaines & bioclimatiques adaptées aux climats sahéliens et côtiers.",
    },
    {
      year: "2019",
      degree: "Conduite de Travaux & Maîtrise d'Œuvre (Build)",
      school: "Institut Supérieur d'Ingénierie du Bâtiment",
      note: "Calculs structurels béton armé & acier, planification opérationnelle et gestion des tolérances de chantier.",
    },
    {
      year: "2021",
      degree: "Modélisation Paramétrique & BIM Intégré",
      school: "Académie Internationale des Technologies Numériques",
      note: "Algorithmes de géométrie complexe pour résilles de façades et coordination sous maquette numérique.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".edu-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 35,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-36 px-6 sm:px-10 bg-fond text-gris-fonce border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-ligne gap-4 mb-16">
          <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
            05 / FONDATIONS ACADÉMIQUES
          </span>
          <span className="text-xs font-mono text-gris-moyen">
            Diplômes &amp; Titres
          </span>
        </div>

        {/* Minimal Stack */}
        <div className="divide-y divide-ligne">
          {educations.map((edu, idx) => (
            <div
              key={edu.degree}
              className="edu-row py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline"
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-gris-clair block mb-1">
                  0{idx + 1}
                </span>
                <span className="font-futura text-xs uppercase tracking-widest text-gris-moyen font-medium">
                  {edu.year}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-gris-fonce">
                  {edu.degree}
                </h3>
                <p className="font-futura text-xs uppercase tracking-wider text-gris-moyen mt-1">
                  {edu.school}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm font-sans font-light text-gris-moyen leading-relaxed">
                  {edu.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
