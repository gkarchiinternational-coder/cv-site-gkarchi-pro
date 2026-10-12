"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const containerRef = useRef(null);

  const experiences = [
    {
      period: "2020 — PRÉSENT",
      role: "Fondateur & Directeur Général",
      company: "Cabinet GK ARCHI — Architecture, Design & Build",
      location: "Dakar, Sénégal",
      desc: "Direction générale et créative de l'agence. Conception de programmes architecturaux résidentiels, tertiaires et sportifs de prestige en Afrique de l'Ouest.",
      points: [
        "Développement de la signature contemporaine et bioclimatique de l'agence",
        "Conception de projets d'envergure (Harmony of the Sea, Eric Favre Gym)",
        "Pilotage stratégique et relation étroite avec les maîtres d'ouvrage",
      ],
    },
    {
      period: "2022 — PRÉSENT",
      role: "Direction du Pôle Construction 'Build'",
      company: "GK ARCHI — Session Construction Intégrée",
      location: "Sénégal (Dakar & Régions)",
      desc: "Mise en place de la division Build dédiée à l'éradication du gap 3D/chantier. Pilotage direct des corps d'état, contrôle des tolérances et exécution conforme à 100%.",
      points: [
        "Zéro écart entre les rendus de modélisation 3D et le bâti livré",
        "Maîtrise rigoureuse des délais, des approvisionnements et des coûts",
        "Coordination technique de pointe (béton architectonique, résilles métalliques)",
      ],
    },
    {
      period: "2018 — 2022",
      role: "Lead Architecte & Projets d'Exception",
      company: "Projets Résidentiels Privés & Espaces Corporate",
      location: "Dakar & Petite-Côte",
      desc: "Conception architecturale de villas contemporaines de grand standing (S House, T House) et d'aménagements intérieurs sur-mesure d'inspiration minimaliste.",
      points: [
        "Volumétries épurées et intégration d'ombres portées bioclimatiques",
        "Dessin de mobilier intégré et calepinage précis des matériaux nobles",
        "Supervision technique de phases constructives complexes",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".exp-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.16,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-28 md:py-36 px-6 sm:px-10 bg-fond text-gris-fonce border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-ligne gap-4 mb-16">
          <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
            03 / PARCOURS OPÉRATIONNEL
          </span>
          <span className="text-xs font-mono text-gris-moyen">
            Expérience &amp; Conduite
          </span>
        </div>

        {/* Minimal Japanese Timeline List */}
        <div className="divide-y divide-ligne">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="exp-row py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Period & Index */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-2">
                <span className="font-mono text-xs text-gris-clair">
                  0{index + 1}
                </span>
                <span className="font-futura text-xs uppercase tracking-widest text-gris-moyen font-medium">
                  {exp.period}
                </span>
                <span className="text-xs text-gris-clair font-sans">
                  {exp.location}
                </span>
              </div>

              {/* Title & Company */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-gris-fonce">
                  {exp.role}
                </h3>
                <p className="font-futura text-xs uppercase tracking-wider text-gris-moyen mt-2">
                  {exp.company}
                </p>
              </div>

              {/* Description & Key Points */}
              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm sm:text-base font-sans font-light text-gris-moyen leading-relaxed">
                  {exp.desc}
                </p>

                <ul className="space-y-2 pt-2">
                  {exp.points.map((p, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs font-sans text-gris-moyen flex items-start gap-2.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-gris-clair mt-1.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
