import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ReasonsSection from "@/components/ReasonsSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="reasons">
        <ReasonsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact" className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Contáctanos
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Si tienes alguna consulta o necesitas un presupuesto, no dudes en
            escribirnos.
          </p>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
