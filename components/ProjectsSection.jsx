"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".project-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projets"
      ref={containerRef}
      className="py-28 md:py-36 px-6 sm:px-10 bg-fond text-gris-fonce border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-ligne gap-4 mb-16 sm:mb-24">
          <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
            02 / PROJETS SÉLECTIONNÉS
          </span>
          <span className="text-xs font-mono text-gris-moyen">
            Architecture &amp; Build Intégré
          </span>
        </div>

        {/* 3 Projects Showcase (3XN Editorial Asymmetric Layout) */}
        <div className="space-y-24 sm:space-y-36">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.slug}
                className={`project-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projets/${project.slug}`}
                    className="group block relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-creme border border-ligne"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </div>

                {/* Content / Narrative */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-futura uppercase tracking-widest text-gris-clair mb-3">
                    <span>0{index + 1}</span>
                    <span className="text-gris-perle">—</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gris-fonce">
                    {project.title}
                  </h3>

                  <p className="font-futura text-sm uppercase tracking-wider text-gris-moyen mt-2">
                    {project.subtitle}
                  </p>

                  <p className="text-sm font-sans font-light text-gris-moyen leading-relaxed mt-4 mb-6">
                    {project.summary}
                  </p>

                  {/* Technical Specs Minimal Line */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-ligne text-xs font-mono mb-6">
                    <div>
                      <span className="text-gris-clair block text-[10px]">LIEU</span>
                      <span className="text-gris-fonce font-sans font-medium text-xs">
                        {project.location.split(",")[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-gris-clair block text-[10px]">SURFACE</span>
                      <span className="text-gris-fonce font-sans font-medium text-xs">
                        {project.area}
                      </span>
                    </div>
                    <div>
                      <span className="text-gris-clair block text-[10px]">LIVRAISON</span>
                      <span className="text-gris-fonce font-sans font-medium text-xs">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Link Button */}
                  <Link
                    href={`/projets/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-futura uppercase tracking-widest text-gris-fonce hover:text-black py-2 border-b border-gris-fonce w-fit transition-all duration-300 group"
                  >
                    <span>Voir l&apos;étude complète &amp; galerie</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
