"use client";
import Image from "next/image";
import "./about_style.css";
import React from "react";
import me from "../../../../assets/img/bojan.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

const index = () => {
  return (
    <div id="about" className="container mx-auto">
      <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap items-center gap-0 md:gap-28">
        <div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
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
        </div>
        <div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:text-left"
        >
          <h3>About Me</h3>
          <h4 className="text-3xl text-white">
            I'm Freelance Front-end Developer
          </h4>
          <p className="max-w-2xl mt-0">
            Hello! My name is Bojan who loves to work with JavaScript
            technologies. Right now my mind is focused on learning everything
            that is related to Web Development. I'm also passionate about
            exploring new technologies which I can leverage to solve real-life
            problems.
          </p>
          <button className="btn w-full lg:w-4/12">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default index;
