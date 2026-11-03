import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CourseSection";
import FacultySection from "@/components/home/FacultySection";

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

      {/* ------ FOOTER ------- */}
      <Footer />
    </main>
  );
}