"use client";
import Header from "@/app/components/header/index";
import About from "./components/about/index";
import Skills from "@/app/components/skills/index";
import Projects from "./components/projects/index";
import Contact from "./components/contact/index";
import Footer from "@/app/components/footer/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
