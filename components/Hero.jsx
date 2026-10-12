"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flow silky reveal animation inspired by 3XN
      gsap.from(".hero-flow-item", {
        y: 45,
        opacity: 0,
        duration: 1.3,
        stagger: 0.14,
        ease: "power3.out",
      });

      gsap.from(".hero-image-reveal", {
        scale: 1.08,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full bg-fond text-gris-fonce pt-32 pb-20 px-6 sm:px-10 flex flex-col justify-between border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-between">
        {/* Top Minimal Meta Grid */}
        <div className="hero-flow-item flex flex-col sm:flex-row sm:items-center justify-between pb-6 sm:pb-8 border-b border-ligne/70 gap-2 sm:gap-4 text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gris-fonce" />
            <span className="font-futura uppercase tracking-widest text-gris-moyen text-[11px] sm:text-xs">
              GK ARCHI • Dakar, Sénégal
            </span>
          </div>

          <div className="font-futura uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-[11px] text-gris-clair">
            ° FORM FOLLOWS PERFECTIONS °
          </div>

          <div className="text-gris-moyen font-mono text-[10px] sm:text-[11px]">
            14°41&apos;34&quot;N 17°26&apos;48&quot;W
          </div>
        </div>

        {/* Central Asymmetrical Composition (Balance between Void and Solid - Japanese Ma) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center my-8 sm:my-12 lg:my-16">
          {/* Left Column: Pure Typography */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="hero-flow-item text-[11px] sm:text-xs font-futura uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gris-clair mb-3 sm:mb-4 block">
              Cabinet d&apos;Architecture, Design & Build
            </span>

            {/* Pure Sans-Serif Name - Google Sans style with responsive scale */}
            <h1 className="hero-flow-item text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase text-gris-fonce leading-[0.95] sm:leading-[0.92]">
              Georges
              <br />
              <span className="font-light text-gris-moyen">Kfoury</span>
            </h1>

            {/* Professional Title in Sans-Serif / Futura */}
            <p className="hero-flow-item font-futura text-base sm:text-xl lg:text-2xl text-gris-fonce/85 mt-4 sm:mt-6 lg:mt-8 tracking-wide font-normal max-w-xl">
              Architecte, Designer &amp; Constructeur
            </p>

            <p className="hero-flow-item text-xs sm:text-sm lg:text-base text-gris-moyen mt-3 sm:mt-4 font-sans font-light leading-relaxed max-w-lg">
              Une pratique sculpturale guidée par l&apos;épure japonaise et la rigueur constructive. Concevoir le détail en 3D et le matérialiser sur le chantier sans le moindre écart.
            </p>

            {/* Action Bar */}
            <div className="hero-flow-item flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-ligne/70">
              <a
                href="#projets"
                className="btn-minimal inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gris-fonce text-[11px] sm:text-xs font-sans uppercase tracking-widest text-gris-fonce hover:bg-gris-fonce hover:text-fond transition-all"
              >
                <span>Explorer les œuvres</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="/cv-georges-kfoury.pdf"
                download="CV-Georges-Kfoury-GKARCHI.pdf"
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-gris-moyen hover:text-gris-fonce transition-colors px-3 sm:px-4 py-2.5 sm:py-3"
              >
                <Download className="w-3.5 h-3.5 text-gris-clair" />
                <span>Télécharger le CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Image in Japanese Frame */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-none sm:rounded-2xl overflow-hidden border border-ligne shadow-subtle bg-creme">
              <div className="hero-image-reveal relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Architecture contemporaine GK ARCHI"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.05] grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fond/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom Inset Caption */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-fond/90 backdrop-blur-sm p-3 sm:p-3.5 border border-ligne/80 flex items-center justify-between text-[10px] sm:text-[11px] font-sans">
                <span className="font-futura uppercase tracking-wider text-gris-fonce">
                  Précision 1:1
                </span>
                <span className="text-gris-moyen font-mono">Dakar • Saly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hero-flow-item grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-ligne text-xs font-sans">
          <div>
            <span className="text-gris-clair block font-futura uppercase tracking-widest text-[9px] sm:text-[10px] mb-1">
              EXPÉRIENCE
            </span>
            <strong className="text-sm sm:text-base lg:text-lg font-bold text-gris-fonce">
              12+ Années
            </strong>
          </div>
          <div>
            <span className="text-gris-clair block font-futura uppercase tracking-widest text-[9px] sm:text-[10px] mb-1">
              PROJETS LIVRÉS
            </span>
            <strong className="text-sm sm:text-base lg:text-lg font-bold text-gris-fonce">
              45+ Réalisations
            </strong>
          </div>
          <div>
            <span className="text-gris-clair block font-futura uppercase tracking-widest text-[9px] sm:text-[10px] mb-1">
              DISCIPLINE
            </span>
            <strong className="text-sm sm:text-base lg:text-lg font-bold text-gris-fonce">
              Design &amp; Build
            </strong>
          </div>
          <div>
            <span className="text-gris-clair block font-futura uppercase tracking-widest text-[9px] sm:text-[10px] mb-1">
              MÉTHODE
            </span>
            <strong className="text-sm sm:text-base lg:text-lg font-bold text-gris-fonce">
              Zéro Gap 3D / Chantier
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
