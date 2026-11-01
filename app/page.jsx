import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-[70vh] items-center justify-center">
        <h1 className="font-heading text-4xl font-bold text-[#142B4A]">
          Welcome to Apex Academy
        </h1>
      </section>

      <Footer />
    </main>
  );
}