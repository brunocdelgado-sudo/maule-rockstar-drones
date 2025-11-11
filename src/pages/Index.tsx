import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Curriculum } from "@/components/Curriculum";
import { Courses } from "@/components/Courses";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="metodologia">
        <About />
      </section>
      <Curriculum />
      <section id="cursos">
        <Courses />
      </section>
      <section id="contato">
        <CTA />
      </section>
      <Footer />
    </main>
  );
};

export default Index;