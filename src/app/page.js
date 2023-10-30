"use client";
import Image from "next/image";
import About from "./components/about/index";
import Skills from "@/app/components/skills/index";
import Projects from "./components/projects/index";
import Contact from "./components/contact/page";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "./animations";
import { motion } from "framer-motion";
import myself from "../../assets/img/bojan.png";

export default function Home() {
  return (
    <>
      <div id="home" className="container mx-auto my-24 md:my-44">
        <header className="flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-20 md:items-center">
          <div className="">
            <span
              className="block"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Hello there!
            </span>
            <h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I'm <span className="text-accent">Bojan</span> Bosnic
            </h1>
            <p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-xl	text-[#bfbfc0]"
            >
              "Hello! I'm Bojan Bosnic, a Web Developer from Gradiska, Bosnia. I
              bring creativity and dedication to web development, aiming to make
              a global impact. Welcome to my digital space, where where code
              meets creativity!"
            </p>
            <a href="../../assets/cv/Bojan-CV.pdf" download target="_blank">
              <button
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                type="button"
                class="w-full btn  lg:w-4/12"
              >
                Download Cv{" "}
              </button>
            </a>
          </div>
          <div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-16 md:mt-0"
          >
            <Image
              className="myself_animation"
              src={myself.src}
              width={400}
              height={400}
            />
          </div>
        </header>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
