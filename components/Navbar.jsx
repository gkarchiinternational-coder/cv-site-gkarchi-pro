"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Manifeste", href: "#a-propos" },
    { label: "Projets", href: "#projets" },
    { label: "Parcours", href: "#experience" },
    { label: "Maîtrise", href: "#competences" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-fond/90 backdrop-blur-md border-b border-ligne py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between">
        {/* Brand / Logo GK ARCHI */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/gkarchi-logo.png"
              alt="Logo GK ARCHI"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-gris-fonce">
              GK ARCHI
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wide text-gris-moyen font-sans">
              Georges Kfoury
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links - 3XN Minimal Style */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-sans tracking-widest uppercase text-gris-moyen hover:text-gris-fonce transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gris-fonce hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="/cv-georges-kfoury.pdf"
            download="CV-Georges-Kfoury-GKARCHI.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ligne text-xs font-sans font-medium uppercase tracking-wider text-gris-fonce hover:border-gris-fonce hover:bg-gris-fonce hover:text-fond transition-all duration-400"
          >
            <Download className="w-3.5 h-3.5 text-gris-moyen" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gris-fonce text-fond text-xs font-sans font-medium uppercase tracking-wider hover:bg-black transition-colors duration-300"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gris-perle" />
          </a>

          {/* Mobile hamburger button - Touch optimized */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gris-fonce hover:bg-gris-perle/30 active:scale-95 transition-all"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-fond border-b border-ligne px-6 py-6 flex flex-col gap-4 animate-in fade-in duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans tracking-wider uppercase text-gris-moyen hover:text-gris-fonce py-1.5 border-b border-ligne/50"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <a
              href="/cv-georges-kfoury.pdf"
              download
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full border border-ligne text-xs uppercase tracking-wider text-gris-fonce"
            >
              Télécharger CV
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full bg-gris-fonce text-fond text-xs uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
