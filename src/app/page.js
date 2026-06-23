import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Language from "@/components/Language";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Language
  languages={[
    { name: "Tamil", level: "Native / Belonging" },
    { name: "English", level: "Professional" },
    { name: "Marathi", level: "Intermediate" },
    { name: "Hindi", level: "Intermediate" },
  ]}
/>
      <Contact />
      <Footer />
    </>
  );
}