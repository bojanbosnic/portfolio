"use client";
import React from "react";
import "./skills_style.scss";
import { fadeIn } from "@/app/animations";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";

const index = () => {
  return (
    <div id="skills" className="container mx-auto my-24 md:my-44">
      <div className="flex flex-wrap justify-center items-center md:flex-nowrap md:justify-between gap-16">
        <div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h3>Skills</h3>
          <h4 className="text-3xl text-white">Every Day is a New Challenge</h4>
          <p className="max-w-xl">
            ""I have a variety of skills, with a main focus on web application
            development." My core technology set includes Next.js, React,
            Tailwind CSS and Sass. I have a solid understanding of these tools,
            which allows me to efficiently create modern and responsive web
            applications. I also excel in project coordination and effective
            teamwork."
          </p>
        </div>
        <div className="w-full xl:w-1/2 h-full">
          <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <div className="flex justify-start">
                <h5 className="mr-8 ">Next.js</h5>
                <SiNextdotjs fontSize={30} />
              </div>

              <p className="mb-3 text-left font-normal">
                React made simple and fast. Build fast and scalable React
                applications with ease.
              </p>
            </div>
            <div className="w-full flex flex-col md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <div className="flex justify-start flex-row md:justify-end md:flex-row-reverse">
                <h5 className="mr-8 md:ml-8 ">Sass</h5>
                <FaSass fontSize={30} className="" color="#CD6799" />
              </div>
              <p className="mb-3 text-left font-normal">
                A CSS preprocessor that provides a CSS more efficient,
                maintainable, and scalable.
              </p>
            </div>
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <div className="flex justify-start">
                <h5 class="mr-8 ">React </h5>
                <FaReact className="" color="#61DBFB" fontSize={30} />
              </div>

              <p className="mb-3 text-left font-normal">
                The best JavaScript library. Create dynamic and interactive UIs
              </p>
            </div>
            <div className="w-full md:max-w-sm p-6 border-opacity-50 border-white rounded-xl shadow border-2">
              <div className="flex justify-start flex-row md:flex-row-reverse md:justify-end">
                <h5 className="mr-8 md:ml-8 ">Tailwind </h5>
                <SiTailwindcss className="" fontSize={30} color="#38bdf8" />
              </div>
              <p className="mb-3 text-left font-normal">
                A utility-first CSS framework for rapidly building custom
                designs.
              </p>
            </div>
            <div className="hidden md:flex justify-center items-center center">
              <div className="text-center">
                <h6>Current work with</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
