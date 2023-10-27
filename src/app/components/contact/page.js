"use client";
import React, { useState } from "react";
import { fadeIn } from "@/app/animations";
import { motion } from "framer-motion";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setInputValue("");
    }
  };

  return (
    <div id="contact" className="container mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-20 my-24 md:my-44 md:flex-nowrap">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <h3 className="uppercase text-center md:text-left">Get In Touch</h3>
          <span className="text-6xl w-full md:max-w-xs block font-medium text-center md:text-left">
            Let's work together!
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <form className="z-10 flex  px-4 flex-col outline-0 pb-8 pt-4  bg-transparent border border-cyan-100 rounded-lg md:mt-0">
            <div className="relative my-6">
              <input
                id="name_id"
                name="user_name"
                type="text"
                className={`z-10 border-b py-1 focus:outline-none`}
                autoComplete="off"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <label
                htmlFor="name_id"
                className={`absolute left-0 top-1 text-gray-600 transition-transform ${
                  inputValue ? "-translate-y-6 text-sm" : ""
                }`}
              >
                Your Name
              </label>
            </div>
            <div className="my-6">
              <div className="relative">
                <input
                  id="email_id"
                  type="email"
                  name="user_email"
                  className="z-10"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <textarea
                  id="msg_id"
                  name="user_message"
                  placeholder="Your Message"
                />
                <label htmlFor="msg_id"></label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-1/3 pointer btn btn-lg my-8"
            >
              Pošalji poruku
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
{
  /* <div class="relative">
  <input
  type="text"
  id="username"
  class="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
  autocomplete="off"
  />
  <label
  for="username"
  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all"
  >
    Username
  </label>
// </div>; */
}
