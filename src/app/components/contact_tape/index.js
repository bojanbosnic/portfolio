"use client";
import React from "react";
import Link from "next/link";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";

const index = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-10 mb-24">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="font-primary"
      >
        <span className="tracking-widest text-gradient">Portfolio.</span>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex items-center"
      >
        <a
          href="mailto:bojan.bosnicc99@gmail.com"
          className="mr-4 hover:text-accent transition-all ease-in-out"
        >
          <HiOutlineMail fontSize={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/bojan-bosnic1204/"
          target="_blank"
          rel="noreferrer"
          className="mr-4 hover:text-accent transition-all ease-in-out"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/bojan-bosnic1204/"
          target="_blank"
          rel="noreferrer"
          className="mr-4 hover:text-accent transition-all ease-in-out"
        >
          <FaLinkedinIn fontSize={20} />
        </a>
        <a
          href="tel:+38765165388"
          className="mr-4 hover:text-accent transition-all ease-in-out"
        >
          <BsFillTelephoneFill />
        </a>
      </motion.div>
    </div>
  );
};

export default index;
