"use client";
import React from "react";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsGearFill, BsFillTelephoneFill } from "react-icons/bs";

const Index = () => {
  const scrollToTop = () => {
    console.log("THIS", scroll);
    scroll.scrollToTop();
  };
  return (
    <div className="fixed z-50 w-full md:w-14 bottom-2 right-0 md:bottom-0 md:top-1/3 md:right-4">
      <nav className="px-3.5 my-4 border-none border-white bg-black/20 backdrop-blur-xl rounded-3xl items-center z-40">
        <ul className="flex flex-row justify-evenly md:flex-col md:justify-center p-0 items-center list-none ">
          <li className="my-6 text-white/50">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-300}
              duration={100}
              activeClass="active"
              title="Home"
              className="cursor-pointer "
            >
              <AiFillHome fontSize={22} />
            </Link>
          </li>
          <li className="my-6 text-white/50">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={100}
              activeClass="active"
              title="About Me"
              className="cursor-pointer "
            >
              <FaUser fontSize={22} />
            </Link>
          </li>
          <li className="my-6 text-white/50">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-130}
              duration={100}
              activeClass="active"
              title="Skills"
              className="cursor-pointer"
            >
              <BsGearFill fontSize={22} />
            </Link>
          </li>
          <li className="my-6 text-white/50">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-10}
              duration={100}
              activeClass="active"
              title="Projects"
              className="cursor-pointer "
            >
              <MdWork fontSize={22} />
            </Link>
          </li>
          <li className="my-6 text-white/50">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
              activeClass="active"
              title="Contact"
              className="cursor-pointer "
            >
              <BsFillTelephoneFill fontSize={22} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
