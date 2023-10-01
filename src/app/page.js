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
      <div className="container my-44">
        <main className="flex flex-wrap justify-center md:flex-nowrap md:justify-between md:items-center">
          <div className="">
            <motion.h1
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              I'm <span className="text-accent">Bojan</span> Bosnic
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="max-w-2xl	text-[#bfbfc0]"
            >
              Lorem ipsum is Bojan Bosnic , Web Developer who lives in Gradiska,
              Bosnia and Herzegovina. I'm creative and diligent, looking for
              working around globe.
            </motion.p>
            <motion.button
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              type="button"
              class="btn btn-lg"
            >
              Work With Me{" "}
            </motion.button>
          </div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="mt-16 md:mt-0"
          >
            <Image
              className="myself_animation"
              src={myself.src}
              width={400}
              height={400}
            />
          </motion.div>
        </main>
      </div>
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </>
  );
}
