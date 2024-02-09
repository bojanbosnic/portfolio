"use client";
import Image from "next/image";
import "./about_style.css";
import React from "react";
import me from "../../../../assets/img/aboutme-img.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";
import Link from "next/link";

const index = () => {
  return (
    <div id="about" className="container mx-auto">
      <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap items-center gap-0 md:gap-28">
        <div className="w-1/2">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex items-center justify-center  my-7 md:my-14"
          >
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
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-center md:text-left"
        >
          <h3>About Me</h3>
          <h4 className="text-3xl text-white">
            I'm Freelance Front-end Developer
          </h4>
          <p className="max-w-2xl mt-0">
            I love to work with JavaScript technologies. Right now my mind is
            focused on learning everything that is related to Web Development.
            I'm also passionate about exploring new technologies which I can
            leverage to solve real-life problems.
          </p>
          <a
            className="btn w-full lg:w-4/12"
            href="mailto:bojan.bosnicc99@gmail.com"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
