"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Download, Instagram, QrCode } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Résidence Privée / Villa",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".contact-flow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-28 md:py-36 px-6 sm:px-10 bg-fond text-gris-fonce border-b border-ligne"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-ligne gap-4 mb-16 sm:mb-20">
          <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
            06 / CONTACT &amp; DIALOGUE
          </span>
          <span className="text-xs font-mono text-gris-moyen">
            Bureau de Dakar
          </span>
        </div>

        {/* 2-Columns Japanese Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Contact Narrative & Clean Form */}
          <div className="contact-flow lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-gris-fonce leading-[1.05]">
                Concevons votre
                <br />
                <span className="font-light text-gris-moyen">prochain projet.</span>
              </h2>
              <p className="text-sm font-sans font-light text-gris-moyen leading-relaxed mt-4 max-w-lg">
                Que vous envisagiez une villa contemporaine, un ensemble immobilier ou un équipement à haute technicité au Sénégal, nous prenons en charge l&apos;intégralité de la conception et du chantier.
              </p>
            </div>

            {sent ? (
              <div className="p-8 border border-ligne bg-surface text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-gris-fonce mx-auto mb-2" />
                <h4 className="font-futura text-sm uppercase tracking-wider font-bold text-gris-fonce">
                  Demande Transmise
                </h4>
                <p className="text-xs font-sans text-gris-moyen">
                  Georges Kfoury et l&apos;équipe GK ARCHI reviendront vers vous sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-futura uppercase tracking-widest text-gris-clair block">
                    VOTRE NOM COMPLET *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Amadou Diallo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ligne focus:border-gris-fonce text-sm text-gris-fonce outline-none transition-colors placeholder:text-gris-clair/50 font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-futura uppercase tracking-widest text-gris-clair block">
                      EMAIL PROFESSIONNEL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="amadou@domaine.sn"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-ligne focus:border-gris-fonce text-sm text-gris-fonce outline-none transition-colors placeholder:text-gris-clair/50 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-futura uppercase tracking-widest text-gris-clair block">
                      TÉLÉPHONE / WHATSAPP
                    </label>
                    <input
                      type="tel"
                      placeholder="+221 ..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-ligne focus:border-gris-fonce text-sm text-gris-fonce outline-none transition-colors placeholder:text-gris-clair/50 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-futura uppercase tracking-widest text-gris-clair block">
                    TYPOLOGIE DE PROJET
                  </label>
                  <select
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ligne focus:border-gris-fonce text-sm text-gris-fonce outline-none transition-colors font-sans"
                  >
                    <option>Résidence Privée / Villa Contemporaine</option>
                    <option>Immeuble Résidentiel &amp; Rooftop</option>
                    <option>Équipement Sportif / ERP</option>
                    <option>Siège Corporate &amp; Tertiaire</option>
                    <option>Design &amp; Build Clé en Main</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-futura uppercase tracking-widest text-gris-clair block">
                    DESCRIPTION DU PROGRAMME *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Superficie souhaitée, localisation (Dakar, Almadies, Saly), échéance..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ligne focus:border-gris-fonce text-sm text-gris-fonce outline-none transition-colors placeholder:text-gris-clair/50 resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-minimal px-8 py-3.5 rounded-full border border-gris-fonce text-xs font-futura uppercase tracking-widest text-gris-fonce hover:bg-gris-fonce hover:text-fond transition-all"
                >
                  Envoyer la Demande
                </button>
              </form>
            )}
          </div>

          {/* Right: The Official Business Card & Studio Credentials */}
          <div className="contact-flow lg:col-span-6 space-y-8">
            {/* The Official Business Card Presentation in Japanese Serenity */}
            <div className="bg-surface p-6 sm:p-10 border border-ligne shadow-subtle flex flex-col justify-between">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-ligne">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/gkarchi-logo.png"
                      alt="Logo GK ARCHI"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm tracking-widest uppercase text-gris-fonce">
                      GK ARCHI
                    </h4>
                    <span className="font-futura text-[10px] uppercase tracking-wider text-gris-moyen block">
                      ARCHITECTURE • DESIGN
                    </span>
                  </div>
                </div>

                <span className="font-futura text-[10px] uppercase tracking-widest text-gris-clair">
                  DAKAR
                </span>
              </div>

              {/* QR Code & Scan Module */}
              <div className="my-6 sm:my-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-fond border border-ligne">
                <div className="relative w-28 h-28 flex-shrink-0 bg-white p-2 border border-ligne flex items-center justify-center">
                  <Image
                    src="/gkarchi-instagram-qr.png"
                    alt="QR Code Instagram @gkarchisn"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="font-futura text-[10px] uppercase tracking-widest text-gris-clair flex items-center justify-center sm:justify-start gap-1">
                    <QrCode className="w-3 h-3" />
                    Scan Instagram Direct
                  </span>
                  <h5 className="font-bold text-sm text-gris-fonce">
                    @gkarchisn
                  </h5>
                  <p className="text-xs text-gris-moyen font-sans font-light">
                    Suivez nos actualités chantiers et modélisations 3D en direct à Dakar.
                  </p>
                  <a
                    href="https://www.instagram.com/gkarchisn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-futura uppercase tracking-wider text-gris-fonce hover:underline pt-1"
                  >
                    <span>Ouvrir l&apos;application</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Contact Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-ligne text-xs font-sans">
                <div>
                  <span className="font-futura text-[10px] uppercase tracking-widest text-gris-clair block mb-1">
                    ADRESSE
                  </span>
                  <p className="text-gris-moyen font-light leading-relaxed">
                    12 Avenue Nelson Mandela,<br />
                    Immeuble Yero Basse, RDC<br />
                    BP 21198 — Dakar, Sénégal
                  </p>
                </div>

                <div>
                  <span className="font-futura text-[10px] uppercase tracking-widest text-gris-clair block mb-1">
                    CONTACT DIRECT
                  </span>
                  <p className="text-gris-moyen font-light leading-relaxed">
                    Pro : <a href="tel:+221773645746" className="text-gris-fonce hover:underline">+221 77 364 57 46</a><br />
                    Fixe : <a href="tel:+221338295656" className="text-gris-fonce hover:underline">+221 33 829 56 56</a><br />
                    Mail : <a href="mailto:gkarchisn@gmail.com" className="text-gris-fonce hover:underline">gkarchisn@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Card Footer Motto */}
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-ligne text-center">
                <span className="font-futura text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gris-clair">
                  ° FORM FOLLOWS PERFECTIONS °
                </span>
              </div>
            </div>

            {/* Direct CV Download Link */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
              <a
                href="/cv-georges-kfoury.pdf"
                download="CV-Georges-Kfoury-GKARCHI.pdf"
                className="inline-flex items-center gap-2 text-xs font-futura uppercase tracking-widest text-gris-fonce hover:underline"
              >
                <Download className="w-3.5 h-3.5 text-gris-moyen" />
                <span>Télécharger le CV au format PDF</span>
              </a>

              <a
                href="https://www.instagram.com/gkarchisn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-futura uppercase tracking-widest text-gris-moyen hover:text-gris-fonce"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
