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
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-16">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h3>Skills</h3>
          <h4>Every Day is a New Challenge</h4>
          <p className="max-w-xl">
            I specialize in React and Next.js, crafting dynamic and responsive
            web applications. With a focus on seamless user interfaces and
            optimal performance, I'm ready to bring your projects to life using
            these cutting-edge technologies."
          </p>
        </motion.div>
        <div className="w-full md:w-1/2 h-full">
          <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <a href="#">
                <h5 className="mb-2 text-2xl uppercase font-primary tracking-tight text-gray-900 dark:text-white">
                  Next.js
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                When you learn React, it is impossible to code without it
                anymore. React is simple the gold.
              </p>
              <div className="my-4">
                <SiNextdotjs fontSize={50} />
              </div>
            </div>
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <a href="#">
                <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                  Next.js
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                When you learn React, it is impossible to code without it
                anymore. React is simple the gold.
              </p>
              <div className="my-4">
                <FaSass fontSize={50} className="" color="#CD6799" />
              </div>
            </div>
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <a href="#">
                <h5 class="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                  Next.js
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                When you learn React, it is impossible to code without it
                anymore. React is simple the gold.
              </p>
              <div className="my-4">
                <FaReact className="" fontSize={50} />
              </div>
            </div>
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <a href="#">
                <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                  Next.js
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                When you learn React, it is impossible to code without it
                anymore. React is simple the gold.
              </p>
              <div className="my-4">
                <SiTailwindcss className="" fontSize={60} />
              </div>
            </div>

            <div className="hidden md:block center">
              <div className="text-center">
                <h3 className="text-xl">current work in</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
