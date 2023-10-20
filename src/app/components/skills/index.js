"use client";
import React from "react";
import "./skills_style.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";
import { skills } from "../../../../skills_imgs";
import { others } from "../../../../skills_imgs";
import { AiFillAccountBook } from "react-icons/ai";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";

const index = () => {
  return (
    <div className="container mx-auto my-24 md:my-44">
      <div className="flex flex-wrap gap-10 justify-center md:flex-nowrap md:justify-between">
        <div>
          <h3>Skills</h3>
          <h4>Every Day is a New Challenge</h4>
          <p className="max-w-xl">
            I specialize in React and Next.js, crafting dynamic and responsive
            web applications. With a focus on seamless user interfaces and
            optimal performance, I'm ready to bring your projects to life using
            these cutting-edge technologies."
          </p>
        </div>
        <div class="wrap w-1/2">
          <div class="circle">
            <SiNextdotjs class="icon i1 icon-terminal" />
            <FaReact class="icon i2 icon-code-fork" />
            <SiTailwindcss class="icon i3 icon-keyboard" />
            <FaSass class="icon i4 icon-code" />
            <div class="line1"></div>
            <div class="line2"></div>
            <span class="text">hover on me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
