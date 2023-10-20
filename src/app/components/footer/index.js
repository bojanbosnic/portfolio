import React from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineDribbble, AiOutlineBehance } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const index = () => {
  return (
    <footer className="container mx-auto mt-32 border-t">
      <div className="flex justify-between flex-wrap mt-8">
        <div>
          <span>
            I usually work on several projects but I’ll be happy to discuss new
            opportunities.
          </span>
          <b className="block">Let’s get in touch!</b>
          <nav className="mt-16 hidden md:block">
            <ul className="flex uppercase text-sm  items-center justify-start flex-wrap">
              <li className="mr-10">
                <a href="#home" className="underline hover:no-underline">
                  Home
                </a>
              </li>
              <li className="mr-10">
                <a href="about-me" className="underline hover:no-underline">
                  About Me
                </a>
              </li>
              <li className="mr-10">
                <a href="#projects" className="underline hover:no-underline">
                  Service
                </a>
              </li>
              <li>
                <button className="mr-10 uppercase underline hover:no-underline">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <address>
            <div className="mb-6 md:mb-8 block">
              <a
                href="mailto:bojan.bosnicc99@gmail.com"
                className="flex items-center"
              >
                {" "}
                <span className="mr-2.5 md:mr-12">
                  <HiOutlineMail fontSize={25} />
                </span>
                <span>bojan.bosnicc99@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center justify-between md:justify-center md:block">
              <div className="my-4 md:my-8">
                <a href="tel:+38765165388" className="flex items-center">
                  <span className="mr-0 md:mr-12">
                    <BsTelephone fontSize={22} />
                  </span>{" "}
                  <span className="hidden md:inline">+38765165388</span>
                </a>
              </div>

              <div className="my-4 md:my-8">
                <a
                  href="https://www.linkedin.com/in/bojan-bosnic1204/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center underline hover:no-underline"
                >
                  <span className="mr-0 md:mr-12">
                    <FaLinkedinIn fontSize={22} />
                  </span>
                  <span className="hidden md:inline">
                    Linkedin.com/bojan-bosnic1204
                  </span>
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="text-center">
        <span>© All Right Reserved by Bojan Bosnic</span>
        <span></span>
      </div>
    </footer>
  );
};

export default index;
