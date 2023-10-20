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
        <div className="w-full md:w-1/2">
          <h3>Skills</h3>
          <h4>Every Day is a New Challenge</h4>
          <p className="max-w-xl">
            I specialize in React and Next.js, crafting dynamic and responsive
            web applications. With a focus on seamless user interfaces and
            optimal performance, I'm ready to bring your projects to life using
            these cutting-edge technologies."
          </p>
        </div>

        <div className="w-full md:w-1/2 skills">
          <div class="each html">
            <div class="box">
              <div class="content">
                <SiNextdotjs class="" fontSize={50} />
                <p>Lorem, ipsum dolor elit. Sapiente, nemo.</p>
              </div>
            </div>
          </div>
          <div class="each css">
            <div class="box">
              <div class="content">
                <FaSass class="" fontSize={50} />
                <p>Lorem, ipsum dolor elit. Sapiente, nemo.</p>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="box">
              <h2>SKILLS</h2>
            </div>
          </div>
          <div class="each js">
            <div class="box">
              <div class="content">
                <FaReact class="" fontSize={50} />
                <p>Lorem, ipsum dolor elit. Sapiente, nemo.</p>
              </div>
            </div>
          </div>
          <div class="each ng">
            <div class="box">
              <div class="content">
                <SiTailwindcss class="" fontSize={50} />
                <p>Lorem, ipsum dolor elit. Sapiente, nemo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
