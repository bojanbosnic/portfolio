"use client";
import React from "react";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";

const index = () => {
  return (
    <div className="flex justify-between items-center mt-10 mb-24">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="font-primary"
      >
        <span className="tracking-widest text-gradient">Portfolio.</span>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex items-center"
      >
        <HiOutlineMail fontSize={20} className="mr-4" />
        <FaFacebookF className="mr-4" />
        <BsFillTelephoneFill className="mr-4" />
        <BsTelephone className="mr-4" />
        <FaLinkedinIn fontSize={20} className="mr-4" />
      </motion.div>
    </div>
  );
};

export default index;
