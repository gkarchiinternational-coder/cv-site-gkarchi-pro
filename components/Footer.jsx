import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fond text-gris-fonce pt-16 pb-12 px-6 sm:px-10 border-t border-ligne">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 border-b border-ligne gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/gkarchi-logo.png"
                alt="Logo GK ARCHI"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-gris-fonce block">
                Georges Kfoury
              </span>
              <span className="font-futura text-[10px] uppercase tracking-wider text-gris-moyen block">
                GK ARCHI • Architecture &amp; Build — Dakar
              </span>
            </div>
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-2.5 text-xs font-sans text-gris-moyen">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Disponible pour études &amp; réalisations d&apos;exception</span>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-ligne hover:border-gris-fonce flex items-center justify-center text-gris-moyen hover:text-gris-fonce transition-colors"
            aria-label="Haut de page"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-gris-clair gap-4">
          <p>© {new Date().getFullYear()} Georges Kfoury — GK ARCHI. Tous droits réservés.</p>
          <p className="font-futura uppercase tracking-widest text-gris-moyen">
            ° FORM FOLLOWS PERFECTIONS °
          </p>
        </div>
      </div>
    </footer>
  );
}
