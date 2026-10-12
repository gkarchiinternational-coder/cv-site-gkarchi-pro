"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const containerRef = useRef(null);

  const skills = [
    {
      name: "Conception Architecturale & Design Spatial",
      level: 96,
      category: "MORPHOLOGIE & VOLUMES",
      desc: "Création de concepts d'exception, articulation spatiale contemporaine et intégration bioclimatique côtière.",
    },
    {
      name: "Modélisation 3D & Détails d'Exécution",
      level: 94,
      category: "PRÉCISION NUMÉRIQUE",
      desc: "Maquettes BIM avancées, perspectives photo-réalistes et calepinages techniques exhaustifs pour le chantier.",
    },
    {
      name: "Pôle Construction & Build Intégré",
      level: 92,
      category: "CHANTIER & DIRECTION",
      desc: "Prise en charge directe de la réalisation, fabrication sur-mesure et matérialisation physique 1:1.",
    },
    {
      name: "Suivi de Chantier & Contrôle Qualité 1:1",
      level: 95,
      category: "EXCELLENCE DU BÂTI",
      desc: "Zéro gap toléré, contrôle laser des tolérances et respect absolu des finitions d'architecture.",
    },
    {
      name: "Management de Projets Clé en Main",
      level: 90,
      category: "GOUVERNANCE TECHNIQUE",
      desc: "Coordination tous corps d'état, respect des plannings contractuels et relation maîtres d'ouvrage.",
    },
  ];

  const expertises = [
    "Architecture Bioclimatique Côtière",
    "Résilles Paramétriques 3D",
    "Béton Architectonique Blanc",
    "Design d'Intérieur Minimaliste",
    "Patios & Miroirs d'Eau",
    "BIM & Modélisation Avancée",
    "Menuiseries Aluminium Encastrées",
    "Éclairage Architectural Intégré",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".skill-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.14,
        ease: "power3.out",
      });

      // Animate progress lines
      skills.forEach((skill, idx) => {
        const line = document.querySelector(`#skill-line-${idx}`);
        if (line) {
          gsap.fromTo(
            line,
            { width: "0%" },
            {
              width: `${skill.level}%`,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: line,
                start: "top 85%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [skills]);

  return (
    <section
      id="competences"
      ref={containerRef}
      className="py-28 md:py-36 px-6 sm:px-10 bg-fond text-gris-fonce border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-ligne gap-4 mb-16">
          <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
            04 / MAÎTRISE &amp; COMPÉTENCES
          </span>
          <span className="text-xs font-mono text-gris-moyen">
            Rigueur &amp; Savoir-Faire
          </span>
        </div>

        {/* 5 Architectural Skills in Clean Minimalist Grid */}
        <div className="space-y-10 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-row grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline pb-8 border-b border-ligne/70"
            >
              <div className="lg:col-span-3">
                <span className="font-futura text-[11px] uppercase tracking-widest text-gris-clair block mb-1">
                  {skill.category}
                </span>
                <span className="font-mono text-xs text-gris-clair">
                  0{index + 1}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gris-fonce mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-light text-gris-moyen leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Minimal Line Gauge */}
              <div className="lg:col-span-4 flex items-center gap-4 pt-2 lg:pt-0">
                <div className="flex-grow h-[2px] bg-ligne relative overflow-hidden">
                  <div
                    id={`skill-line-${index}`}
                    className="h-full bg-gris-fonce transition-all"
                    style={{ width: "0%" }}
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-gris-fonce w-10 text-right">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Tags Strip */}
        <div className="pt-8">
          <span className="font-futura text-xs uppercase tracking-[0.2em] text-gris-clair block mb-6">
            DOMAINES D&apos;APPLICATION SPÉCIFIQUES
          </span>
          <div className="flex flex-wrap gap-3">
            {expertises.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-ligne text-xs font-sans font-light text-gris-moyen hover:border-gris-fonce hover:text-gris-fonce transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
