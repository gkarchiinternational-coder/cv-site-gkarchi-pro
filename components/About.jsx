"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-flow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      index: "01",
      title: "La Conception & Le Détail",
      desc: "Modélisation volumétrique millimétrée, étude des vents marins et de l'ensoleillement sénégalais, plans techniques d'exécution complets.",
    },
    {
      index: "02",
      title: "Le Pôle Build Intégré",
      desc: "Prise en charge directe de la construction par nos propres ingénieurs et conducteurs de travaux pour éviter toute déperdition d'intention.",
    },
    {
      index: "03",
      title: "Le Zéro Gap Absolu",
      desc: "Ce que le client découvre et valide en 3D est exactement ce qui est érigé sur le site. Aucune concession constructive.",
    },
  ];

  return (
    <section
      id="a-propos"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 sm:px-10 bg-fond text-gris-fonce border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="about-flow flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-ligne gap-4">
          <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
            01 / MANIFESTE ARCHITECTURAL
          </span>
          <span className="text-xs font-mono text-gris-moyen">
            Philosophie de Pratique
          </span>
        </div>

        {/* Japanese Asymmetrical Balance (Ma) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 my-16 lg:my-24 items-start">
          {/* Left: Statement */}
          <div className="about-flow lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-gris-fonce leading-[1.05]">
              De la maquette numérique
              <br />
              <span className="font-light text-gris-moyen">à la matière bâtie.</span>
            </h2>

            <div className="mt-8 pt-8 border-t border-ligne">
              <span className="font-futura text-[11px] uppercase tracking-widest text-gris-clair block mb-2">
                DEVISE DU CABINET
              </span>
              <p className="font-futura text-xl text-gris-fonce tracking-wide">
                ° FORM FOLLOWS PERFECTIONS °
              </p>
              <p className="text-xs text-gris-moyen mt-2 font-sans font-light leading-relaxed">
                Chaque ligne tracée dans nos logiciels 3D est un engagement d&apos;ingénierie tenu sur le terrain à Dakar et sur la Petite-Côte.
              </p>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="about-flow lg:col-span-7 space-y-6 text-base sm:text-lg font-sans font-light leading-relaxed text-gris-moyen">
            <p className="text-xl sm:text-2xl text-gris-fonce font-normal leading-snug">
              Je m&apos;appelle <strong>Georges Kfoury</strong>, architecte et designer, fondateur du cabinet d&apos;architecture <strong>GK ARCHI</strong> basé à Dakar.
            </p>

            <p>
              Vu le contexte particulier que l&apos;on rencontre au Sénégal et la complexité d&apos;exécuter de manière parfaite et identique ce qui est modélisé en 3D sur ordinateur, nous avons pris la décision de monter notre propre <strong>session construction (Build)</strong>.
            </p>

            <p>
              Pour tous les projets que nous concevons, nous réalisons dans un premier temps la partie architecturale et l&apos;intégralité des détails techniques. En même temps, notre pôle construction prend en main la matérialisation sur site <strong>afin qu&apos;il n&apos;y ait aucun gap entre ce que nous présentons à notre client et ce qui est réalisé</strong>.
            </p>

            <p className="text-gris-fonce font-normal">
              En résumé : un cabinet d&apos;architecture, design et build sans intermédiaire ni compromis.
            </p>
          </div>
        </div>

        {/* 3 Principles Horizontal Grid */}
        <div className="about-flow grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-ligne">
          {principles.map((item) => (
            <div key={item.index} className="flex flex-col space-y-3">
              <span className="font-mono text-xs text-gris-clair block">
                {item.index}
              </span>
              <h3 className="font-futura text-sm uppercase tracking-wider font-bold text-gris-fonce">
                {item.title}
              </h3>
              <p className="text-xs text-gris-moyen font-sans font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
