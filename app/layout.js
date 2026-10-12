import "./globals.css";

export const metadata = {
  title: "Georges Kfoury | Architecte & Designer — GK ARCHI Dakar",
  description:
    "Portfolio de Georges Kfoury, Architecte, Designer & Constructeur. Cabinet GK ARCHI à Dakar, Sénégal. Architecture, Design et Build avec zéro gap entre la conception et l'ouvrage réalisé.",
  keywords: [
    "Georges Kfoury",
    "GK ARCHI",
    "Architecte Dakar",
    "Architecture Sénégal",
    "Design and Build",
    "Harmony of the Sea",
    "Eric Favre Gym",
    "S House",
    "Minimalist Architecture",
  ],
  authors: [{ name: "Georges Kfoury" }],
  openGraph: {
    title: "Georges Kfoury | Architecte & Designer — GK ARCHI",
    description:
      "Architecture, Design & Build au Sénégal. Un minimalisme rigoureux où la forme suit les perfections.",
    url: "https://gkarchi.sn",
    siteName: "GK ARCHI",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F6F5F2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Only Sans-Serif fonts: Plus Jakarta Sans (Google Sans geometry), Inter, Jost (Futura style), IBM Plex Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-fond text-gris-fonce antialiased relative min-h-screen selection:bg-gris-fonce selection:text-fond">
        {/* Discrète texture de bruit */}
        <div className="noise-overlay" aria-hidden="true">
          <svg className="w-full h-full opacity-40">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.03 0"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {children}
      </body>
    </html>
  );
}
