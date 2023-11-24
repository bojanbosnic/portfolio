"use client";
import React, { useState } from "react";
import { fadeIn } from "@/app/animations";

const Index = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
  });

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
    <div id="contact" className="container mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-20 my-24 md:my-44 md:flex-nowrap">
        <div
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
        </div>
        <div
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
                className="z-10 border-b py-1 focus:outline-none"
                autoComplete="off"
                value={inputValue.firstName || ""}
                onChange={(e) => handleInputChange(e.target.value, "firstName")}
                onBlur={handleInputBlur}
              />
              <label
                htmlFor="name_id"
                className={`absolute left-0 top-1  transition-transform ${
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
                  className="z-10 border-b py-1 focus:outline-none"
                  autoComplete="off"
                  value={inputValue.lastName}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "lastName")
                  }
                  onBlur={handleInputBlur}
                />
                <label
                  htmlFor="email_id"
                  className={`absolute left-0 top-1  transition-transform ${
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
                  placeholder="Your Message"
                />
                <label htmlFor="msg_id"></label>
              </div>
            </div>
            <button type="submit" className="w-full btn px-12 lg:w-1/2 my-8">
              Send Message
            </button>
          </form>
        </div>
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
