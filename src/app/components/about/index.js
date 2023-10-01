"use client";
import Image from "next/image";
import "./about_style.css";
import React from "react";
import me from "../../../../assets/img/bojan.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

const index = () => {
  return (
    <>
      <div className="container flex justify-center items-center flex-col">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          About Me
        </motion.h3>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex items-center justify-center mt-14"
        >
          <div className="relative overflow-hidden border-2 rounded-full border-accent w-48 h-48 ">
            <Image
              class="w-full absolute h-full object-cover overflow-hidden"
              layout="fill"
              src={me.src}
              alt="Bojan's image"
            />
          </div>
          <div className="w-52 h-52 absolute border-2 border-x-transparent border-accent rotate-45 rounded-full circle-animation"></div>
        </motion.div>
        <motion.h4
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-semibold mt-6"
        >
          Frontend Developer!
        </motion.h4>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="max-w-2xl text-center"
        >
          My job is to take care not to be penalized by the Google algorithm and
          by users too. I fix the broken UX/UI principles, semantic HTML,
          headings hierarchy, web responsiveness, web accessibility, code W3C
          validation, and optimization.
        </motion.p>
      </div>
    </>
  );
};

export default index;
