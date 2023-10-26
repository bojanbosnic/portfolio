"use client";
import React from "react";
import "./projects_style.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

const index = () => {
  return (
    <div
      id="projects"
      className="container mx-auto flex flex-col my-24 gap-8 md:my-44 md:gap-16"
    >
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <h3>My latest work</h3>
          <p className="max-w-xs">
            My job is to take care not to be penalized by the Google algorithm
            and by users too. I fix the broken UX/UI principles, semantic HTML,
            headings hierarchy, web responsiveness, web accessibility, code W3C
            validation, and optimization.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          class="w-full group relative border-2 rounded-xl h-full border-white/50 overflow-hidden bg-cover bg-no-repeat  md:w-1/2"
        >
          <div class="relative bg_img  rounded-xl h-80  overflow-hidden bg-cover bg-no-repeat">
            <div className="absolute -bottom-full left-24 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-24 group-hover:bottom-16 transition-all duration-700 z-40">
              <span className="font-medium">Sezonac</span>
            </div>
            <a href="https://sezonac-web.vercel.app/" target="_blank">
              <div class="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>{" "}
        </motion.div>{" "}
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-16">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-cover bg-no-repeat"
        >
          <div class="relative bg_img  rounded-xl h-80  overflow-hidden bg-cover bg-no-repeat">
            <div className="absolute -bottom-full left-24 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-24 group-hover:bottom-16 transition-all duration-700 z-40">
              <span className="font-medium">Skondra Portfolio</span>
            </div>
            <a
              href="https://dejan-skondric-portfolio-k0gu2ypzg-bojanbosnic.vercel.app/"
              target="_blank"
            >
              <div class="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>{" "}
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-cover bg-no-repeat"
        >
          <div class="relative bg_img  rounded-xl h-80  overflow-hidden bg-cover bg-no-repeat">
            <div className="absolute -bottom-full left-24 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-24 group-hover:bottom-16 transition-all duration-700 z-40">
              <span className="font-medium">GIS App</span>
            </div>
            <a href="https://gis-app-alpha.vercel.app/" target="_blank">
              <div class="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default index;
