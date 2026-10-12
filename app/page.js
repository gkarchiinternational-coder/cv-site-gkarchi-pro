import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neige text-encre selection:bg-corail selection:text-white">
      {/* Floating Signature Pill Navbar */}
      <Navbar />

      <main>
        {/* Hero: The First Impression (100dvh) */}
        <Hero />

        {/* About: The Personal Manifesto (2 columns + accent line) */}
        <About />

        {/* Projects: The 3 Signature Masterpieces with sub-pages */}
        <ProjectsSection />

        {/* Experience: The Living Timeline */}
        <Experience />

        {/* Skills: The Dashboard with Animated Circular SVG Gauges */}
        <Skills />

        {/* Education: The Foundations (Dark theme) */}
        <Education />

        {/* Contact: The Bridge + Official Business Card & QR Code */}
        <Contact />
      </main>

      {/* Footer: Deep dark, rounded-t-6xl, online status */}
      <Footer />
    </div>
  );
}
