import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projet non trouvé — GK ARCHI" };
  }

  return {
    title: `${project.title} | GK ARCHI — Georges Kfoury`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject =
    projectsData[(projectIndex + 1) % projectsData.length];
  const prevProject =
    projectsData[
      (projectIndex - 1 + projectsData.length) % projectsData.length
    ];

  return (
    <div className="bg-fond min-h-screen text-gris-fonce">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8 sm:mb-10">
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-xs font-futura uppercase tracking-wider sm:tracking-widest text-gris-moyen hover:text-gris-fonce transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour aux projets</span>
            </Link>
          </div>

          {/* Project Title Bar (3XN Minimal Layout) */}
          <div className="pb-8 sm:pb-10 border-b border-ligne mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
              <span className="font-futura text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.25em] text-gris-clair">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gris-moyen">
                {project.location} • {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-gris-fonce leading-[1.05]">
              {project.title}
            </h1>

            <p className="font-futura text-sm sm:text-lg lg:text-xl uppercase tracking-wider text-gris-moyen mt-2 sm:mt-3">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Showcase & Slider to browse all images */}
          <div className="mb-16">
            <ProjectGallery
              images={project.gallery}
              title={project.title}
              role={project.role}
            />
          </div>

          {/* Technical Specs 4-Columns Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-ligne mb-20 text-xs font-sans">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-gris-clair block font-futura uppercase tracking-widest text-[10px] mb-1">
                  {stat.label}
                </span>
                <strong className="text-base sm:text-lg font-bold text-gris-fonce">
                  {stat.value}
                </strong>
              </div>
            ))}
          </div>

          {/* Dual Narrative (Architectural Vision & Build Solution) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-futura text-xs uppercase tracking-widest text-gris-clair block">
                PARTI ARCHITECTURAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-gris-fonce">
                Vision &amp; Intention
              </h2>
              <p className="text-sm sm:text-base font-sans font-light text-gris-moyen leading-relaxed">
                {project.description}
              </p>
              <div className="pt-4 border-t border-ligne">
                <span className="font-futura text-[11px] uppercase tracking-wider text-gris-fonce font-bold block mb-1">
                  LE DÉFI AU SÉNÉGAL
                </span>
                <p className="text-xs font-sans text-gris-moyen leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-futura text-xs uppercase tracking-widest text-gris-clair block">
                PÔLE BUILD GK ARCHI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-gris-fonce">
                Matérialisation 1:1
              </h2>
              <p className="text-sm sm:text-base font-sans font-light text-gris-moyen leading-relaxed">
                {project.solution}
              </p>
              <div className="p-6 bg-surface border border-ligne">
                <span className="font-futura text-[10px] uppercase tracking-widest text-gris-clair block mb-1">
                  ENGAGEMENT CONSTRUCTIF
                </span>
                <p className="font-futura text-base text-gris-fonce uppercase tracking-wide">
                  ° FORM FOLLOWS PERFECTIONS °
                </p>
                <p className="text-xs font-sans text-gris-moyen mt-2">
                  Aucun intermédiaire n&apos;altère les détails techniques entre la modélisation et le bâtiment réel.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Perspectives Gallery (3XN Clean Asymmetric Grid) */}
          <div className="mb-24">
            <div className="flex items-baseline justify-between pb-6 border-b border-ligne mb-10">
              <span className="font-futura text-xs uppercase tracking-[0.25em] text-gris-clair">
                GALERIE DE RÉALISATION COMPLÈTE
              </span>
              <span className="text-xs font-mono text-gris-moyen">
                {project.gallery.length} Perspectives d&apos;Ambiance
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.gallery.map((img, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden bg-creme border border-ligne">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-103"
                    />
                  </div>
                  <div className="flex items-start gap-2.5 text-xs font-sans text-gris-moyen pt-1">
                    <span className="font-mono text-gris-clair flex-shrink-0">0{i + 1} —</span>
                    <span className="font-light leading-relaxed">{img.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Next/Previous Project Switcher */}
          <div className="py-12 border-t border-ligne flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/projets/${prevProject.slug}`}
              className="flex items-center gap-3 text-xs font-futura uppercase tracking-widest text-gris-moyen hover:text-gris-fonce transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Projet Précédent : {prevProject.title}</span>
            </Link>

            <Link
              href="/#contact"
              className="btn-minimal px-6 py-3 rounded-full border border-gris-fonce text-xs font-futura uppercase tracking-widest text-gris-fonce hover:bg-gris-fonce hover:text-fond transition-all"
            >
              Initier un projet similaire
            </Link>

            <Link
              href={`/projets/${nextProject.slug}`}
              className="flex items-center gap-3 text-xs font-futura uppercase tracking-widest text-gris-moyen hover:text-gris-fonce transition-colors"
            >
              <span>Projet Suivant : {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
