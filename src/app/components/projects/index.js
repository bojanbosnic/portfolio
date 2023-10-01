"use client";
import Image from "next/image";
import React from "react";
import slika1 from "../../../../assets/img/portfolio-img1.png";
import slika2 from "../../../../assets/img/portfolio-img2.png";
import slika3 from "../../../../assets/img/portfolio-img3.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

const index = () => {
  return (
    <div className="container flex flex-col my-44 gap-16">
      <div className="flex flex-wrap md:flex-nowrap gap-16">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <h3>My latest work</h3>
          <p className="max-w-xs font-drugi">
            {" "}
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
          viewport={{ once: true, amount: 0.7 }}
          class="w-full group relative border-2 rounded-xl h-full border-white/50 overflow-hidden bg-cover bg-no-repeat  md:w-1/2"
        >
          <div class="relative border rounded-xl h-80 border-cyan-50 overflow-hidden bg-cover bg-no-repeat">
            <Image
              className="group-hover:scale-125 transition-all duration-500 cover"
              src={slika1.src}
              layout="fill"
              alt="gis project"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-40">
              <span className="text-gradient">Project Title</span>
            </div>
            <a href="#!">
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
          viewport={{ once: true, amount: 0.7 }}
          className="w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-cover bg-no-repeat"
        >
          <div class="relative w-full border rounded-xl h-80 border-cyan-50 overflow-hidden bg-cover bg-no-repeat">
            <Image
              className="group-hover:scale-125 transition-all duration-500"
              src={slika2.src}
              layout="fill"
              alt="skondra portfolio"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-40">
              <span className="text-gradient">Project Title</span>
            </div>
            <a href="#!">
              <div class="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-fixed opacity transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>{" "}
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-cover bg-no-repeat"
        >
          <div class="relative w-full border rounded-xl h-80 border-cyan-50 overflow-hidden bg-cover bg-no-repeat">
            <Image
              className="group-hover:scale-125 transition-all duration-500"
              src={slika2.src}
              layout="fill"
              alt="sezonac project"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-40">
              <span className="text-gradient">Project Title</span>
            </div>
            <a href="#!">
              <div class="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-fixed opacity transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default index;
