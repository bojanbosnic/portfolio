"use client";
import React, { useState, useRef } from "react";
import { fadeIn } from "@/app/animations";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Index = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    msg: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cn97iam", "template_lqo3esf", form.current, {
        publicKey: "k2a1SOpU9u-aFnEHj",
      })
      .then(
        () => {
          setInputValue({
            firstName: "",
            lastName: "",
            msg: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = (value, vr) => {
    setInputValue((prevState) => ({
      ...prevState,
      [vr]: value,
    }));
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setInputValue("");
    }
  };
  console.log(!!inputValue);
  return (
    <div id="contact" className="container mx-auto overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-20 md:flex-nowrap">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
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
          viewport={{ once: true, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="z-10 flex  px-4 flex-col outline-0 pb-8 pt-4  bg-transparent border border-cyan-100 rounded-lg md:mt-0"
          >
            <div className="relative my-6">
              <input
                id="name_id"
                name="user_name"
                type="text"
                className="relative z-10 border-b py-1 focus:outline-none"
                autoComplete="off"
                value={inputValue.firstName || ""}
                onChange={(e) => handleInputChange(e.target.value, "firstName")}
                onBlur={handleInputBlur}
              />
              <label
                htmlFor="name_id"
                className={`absolute left-0 top-1 z--10  transition-transform ${
                  inputValue.firstName ? "-translate-y-6 text-sm" : ""
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
                  className="relative z-10 border-b py-1 focus:outline-none"
                  autoComplete="off"
                  value={inputValue.lastName}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "lastName")
                  }
                  onBlur={handleInputBlur}
                />
                <label
                  htmlFor="email_id"
                  className={`absolute left-0 top-1 z--10  transition-transform ${
                    inputValue.lastName ? "-translate-y-6 text-sm" : ""
                  }`}
                >
                  Your Email{" "}
                </label>
              </div>
            </div>
            <div>
              <div className="relative">
                <textarea
                  id="msg_id"
                  name="user_message"
                  className="relative z-10"
                  value={inputValue.msg}
                  onChange={(e) => handleInputChange(e.target.value, "msg")}
                  onBlur={handleInputBlur}
                />
                <label
                  className={`absolute left-0 top-5 z--10  transition-transform ${
                    inputValue.msg ? "-translate-y-6 text-sm" : ""
                  }`}
                  htmlFor="msg_id"
                >
                  Your Message
                </label>
              </div>
            </div>
            <button type="submit" className="w-full btn px-12 lg:w-1/2 my-8">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
