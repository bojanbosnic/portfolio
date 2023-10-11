"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";
import { skills } from "../../../../skills_imgs";
import { others } from "../../../../skills_imgs";

console.log(skills[0]);
const index = () => {
  return (
    <div className="container my-24 md:my-44">
      <div className="flex flex-wrap gap-10 justify-center md:flex-nowrap md:justify-between">
        <div>
          <h3>Skills</h3>
          <h4>Every Day is a New Challenge</h4>
          <p>
            Enim minim excepteur eiusmod voluptate dolor sunt duis mollit ut ad
            eiusmod. Enim minim excepteur eiusmod voluptate dolor sunt duis
            mollit ut ad eiusmod.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap justify-center items-center gap-16">
            {skills.map((skill) => (
              <div className="items-center">
                <span>{skill.src}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
