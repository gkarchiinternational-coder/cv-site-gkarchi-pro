/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette 3XN & Minimalisme Japonais
        fond: "#F6F5F2", // Blanc cassé architectural
        surface: "#FFFFFF", // Blanc pur pour respiration
        creme: "#F0EFEB", // Blanc cassé subtil
        "gris-fonce": "#1C1C1E", // Écritures principales
        "gris-moyen": "#6E6E73", // Écritures secondaires
        "gris-clair": "#9E9EA4", // Métadonnées / légendes
        "gris-perle": "#D1D0CA", // Lignes de séparation discrètes
        ligne: "#E5E3DC", // Lignes fines hairlines
        encre: "#1C1C1E",
      },
      fontFamily: {
        // Uniquement des Sans-Serif : Google Sans / Plus Jakarta Sans / Inter / Futura (Jost)
        sans: [
          '"Google Sans"',
          '"Plus Jakarta Sans"',
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        futura: [
          "Futura",
          "Jost",
          '"Trebuchet MS"',
          "sans-serif",
        ],
        mono: [
          '"IBM Plex Mono"',
          '"Space Mono"',
          "monospace",
        ],
      },
      borderRadius: {
        none: "0px",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
        ultra: "0.3em",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(28, 28, 30, 0.03)",
        card: "0 10px 30px -4px rgba(28, 28, 30, 0.04)",
        hover: "0 20px 40px -6px rgba(28, 28, 30, 0.06)",
      },
      transitionTimingFunction: {
        flow: "cubic-bezier(0.16, 1, 0.3, 1)", // Courbe soyeuse inspirée 3XN
        zen: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
