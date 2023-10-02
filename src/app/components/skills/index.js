"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";
import { skills } from "../../../../skills_imgs";
import { others } from "../../../../skills_imgs";

console.log(skills[0]);
const index = () => {
  return (
    <div className="container my-40">
      <h3>Skills</h3>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-16">
          {skills.map((skill) => (
            <div className="items-center">
              <span>{skill.src}</span>
            </div>
          ))}
        </div>
        {/* <div className="w-1/2 flex flex-wrap items-center">
          {others.map((other) => (
            <div className="w-4/12 items-center">
              <span>{other.src}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default index;
