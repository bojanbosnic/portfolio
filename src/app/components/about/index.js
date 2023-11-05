"use client";
import Image from "next/image";
import "./about_style.css";
import React from "react";
import me from "../../../../assets/img/bojan.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

const index = () => {
  return (
    <div id="about" className="container mx-auto overflow-x-hidden">
      <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap items-center gap-0 md:gap-28">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden" // Promenite "hidden" u "hidden"
          whileInView={"show"}
          viewport={{ once: true, threshold: 0.3 }}
          className="w-1/2"
        >
          <div className="flex items-center justify-center  my-7 md:my-14">
            <Image
              class=""
              width={1000}
              height={1000}
              src={me.src}
              alt="Bojan's image"
            />
          </div>
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden" // Promenite "hidden" u "hidden"
            whileInView={"show"}
            viewport={{ once: true, threshold: 0.3 }}
          >
            About Me
          </motion.h3>
          <motion.h4
            variants={fadeIn("left", 0.3)}
            initial="hidden" // Promenite "hidden" u "hidden"
            whileInView={"show"}
            viewport={{ once: true, threshold: 0.3 }}
            className="text-3xl text-white"
          >
            I'm Freelance Front-end Developer
          </motion.h4>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden" // Promenite "hidden" u "hidden"
            whileInView={"show"}
            viewport={{ once: true, threshold: 0.3 }}
            className="max-w-2xl mt-0"
          >
            Hello! My name is Bojan who loves to work with JavaScript
            technologies. Right now my mind is focused on learning everything
            that is related to Web Development. I'm also passionate about
            exploring new technologies which I can leverage to solve real-life
            problems.
          </motion.p>
          <motion.button
            variants={fadeIn("left", 0.5)}
            initial="hidden" // Promenite "hidden" u "hidden"
            whileInView={"show"}
            viewport={{ once: true, threshold: 0.3 }}
            className="btn w-full lg:w-4/12"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default index;
