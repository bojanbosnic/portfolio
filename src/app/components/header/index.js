import React from "react";
import Image from "next/image";
import myself from "../../../../assets/img/bojan.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

const Index = () => {
  return (
    <header id="home" className="overflow-x-hidden">
      <div className="container mx-auto my-24 md:my-24">
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-20 md:items-center">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <span className="block mb-2">Hello there!</span>
            <h1>
              I'm <span className="text-accent">Bojan</span> Bosnic
            </h1>
            <p className="max-w-xl	">
              I'm Bojan Bosnic, a Web Developer from Gradiska, Bosnia. I bring
              creativity and dedication to web development, aiming to make a
              global impact. Welcome to my digital space, where where code meets
              creativity!
            </p>
            <a
              href="/bojan.pdf"
              className="w-full btn lg:w-4/12"
              rel="noopener noreferrer"
              download="bojan"
            >
              Download CV
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-16 md:mt-0 hidden md:block"
          >
            <Image
              className="myself_animation"
              src={myself.src}
              width={400}
              height={400}
              alt="Bojan Img"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
export default Index;
