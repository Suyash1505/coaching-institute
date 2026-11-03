import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CourseSection";
import FacultySection from "@/components/home/FacultySection";
import Testimonials from "@/components/home/Testimonials";
import ResultsSection from "@/components/home/ResultsSection";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export default function Home() {
  return (
    <main>

      {/* ------ NAVBAR ------- */}
      <Navbar />

      {/* ------ HOME PAGE ------- */}
      <Hero />
      <AboutSection />
      <CoursesSection />
      <FacultySection />
      <Testimonials />
      <ResultsSection />
      <AdmissionCTA />

      {/* ------ FOOTER ------- */}
      <Footer />
    </main>
  );
}