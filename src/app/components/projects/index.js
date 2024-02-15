"use client";
import React from "react";
import Image from "next/image";
import "./projects_style.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";
import img from "../../../../assets/img/portfolio-img1.png";
import seasonal from "../../../../assets/img/seasonal.jpg";
import skondra from "../../../../assets/img/skondra-rad.jpg";
import gis from "../../../../assets/img/gis.jpg";

const index = () => {
  return (
    <div
      id="projects"
      className="container mx-auto flex flex-col my-24 gap-8 md:my-44 md:gap-16 overflow-x-hidden"
    >
      <div className="flex flex-wrap items-center md:flex-nowrap gap-8 md:gap-16">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full text-center md:text-left md:w-1/2"
        >
          <h3>My latest work</h3>
          <p className="w-full md:max-w-xs">
            I specialize in React and Next.js, crafting dynamic and responsive
            web applications. With a focus on seamless user interfaces and
            optimal performance, I'm ready to bring your projects to life using
            these cutting-edge technologies."
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-contain bg-no-repeat"
        >
          <div className="relative rounded-xl h-80 overflow-hidden bg-contain bg-no-repeat">
            <Image
              src={seasonal.src} // Zamijenjte sa stvarnom putanjom do slike
              alt="Opis slike"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -bottom-full left-16 group-hover:bottom-20 transition-all duration-500 z-40">
              <span className="text-gradient">Frontend Development</span>
            </div>
            <div className="absolute -bottom-full left-16 group-hover:bottom-10 transition-all duration-700 z-40">
              <span className="font-medium">Seasonal App</span>
            </div>
            <a href="https://seasonal-peach.vercel.app/" target="_blank">
              <div className="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-8 md:gap-16">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-cover bg-no-repeat"
        >
          <div className="relative rounded-xl h-80 overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={skondra.src}
              alt="Opis slike"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -bottom-full left-16 group-hover:bottom-20 transition-all duration-500 z-40">
              <span className="text-gradient">Frontend Development</span>
            </div>
            <div className="absolute -bottom-full left-16 group-hover:bottom-10 transition-all duration-700 z-40">
              <span className="font-medium">Skondra Portfolio</span>
            </div>
            <a
              href="https://dejan-skondric-portfolio-k0gu2ypzg-bojanbosnic.vercel.app/"
              target="_blank"
            >
              <div className="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full group relative border-2 rounded-xl border-white/50 md:w-1/2 overflow-hidden bg-cover bg-no-repeat"
        >
          <div className="relative rounded-xl h-80 overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={gis.src}
              alt="Opis slike"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -bottom-full left-16 group-hover:bottom-20 transition-all duration-500 z-40">
              <span className="text-gradient">Frontend Development</span>
            </div>
            <div className="absolute -bottom-full left-16 group-hover:bottom-10 transition-all duration-700 z-40">
              <span className="font-medium">GIS App</span>
            </div>
            <a href="https://gis-app-alpha.vercel.app/" target="_blank">
              <div className="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default index;
