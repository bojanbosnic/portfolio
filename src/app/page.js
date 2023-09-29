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
      <div className="my-44">
        <main className="flex justify-between items-center">
          <div className="">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="font-bold leading-[0.8]"
            >
              I'm <span className="text-accent">Bojan</span> Bosnic
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
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
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              type="button"
              class="btn btn-lg"
            >
              Work With Me{" "}
            </motion.button>
          </div>
          <div>
            <Image
              className="myself_animation"
              src={myself.src}
              width={400}
              height={400}
            />
          </div>
        </main>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
