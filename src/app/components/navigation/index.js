"use client";
import React from "react";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";

const Index = () => {
  return (
    <div className="fixed w-full md:w-14 bottom-2 right-0 md:bottom-0 md:top-1/3 	 md:right-4">
      <nav className="px-3.5 my-4 border-none border-white bg-[#ffffff1f] rounded-3xl items-center z-40">
        <ul className="flex flex-row md:flex-col justify-center p-0 items-center list-none ">
          <li className="mx-6 md:mx-0 my-6 text-white/50">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="cursor-pointer "
            >
              <AiFillHome fontSize={22} />
            </Link>
          </li>
          <li className="mx-6 md:mx-0 my-6 text-white/50">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={100}
              activeClass="active"
              className="cursor-pointer "
            >
              <FaUser fontSize={22} />
            </Link>
          </li>
          <li className="mx-6 md:mx-0 my-6 text-white/50">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-10}
              duration={100}
              activeClass="active"
              className="cursor-pointer "
            >
              <MdWork fontSize={22} />
            </Link>
          </li>
          <li className="mx-6 md:mx-0 my-6 text-white/50">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
              activeClass="active"
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
