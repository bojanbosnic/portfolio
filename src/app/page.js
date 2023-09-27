"use client";
import Image from "next/image";
import About from "./components/about/index";
import Projects from "./components/projects/index";
import Contact from "./components/contact/index";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "./animations";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="my-44">
        <main className="">
          <TypeAnimation
            sequence={[
              "Hello", // Types 'One'
              1000, // Waits 1s
              "Bello", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
          <div className="">
            {/* <span className="my-20">-Hello</span> */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-bold leading-[0.8]"
            >
              I'm <span className="text-accent">Ben</span> Aiden
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-2xl	text-[#bfbfc0]"
            >
              This is Bojan Bosnic , Web Developer who lives in Gradiska, Bosnia
              and Herzegovina. I'm creative and diligent, looking for working
              around globe.
            </motion.p>
            <motion.button
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              type="button"
              class="btn btn-lg"
            >
              Work With Me{" "}
            </motion.button>
          </div>
        </main>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
