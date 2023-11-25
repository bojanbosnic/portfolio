import React from "react";
import Image from "next/image";
// import { fadeIn } from "../../animations";
// import { motion } from "framer-motion";
import myself from "../../../../assets/img/bojan.png";

const Index = () => {
  return (
    <header id="home">
      <div className="container mx-auto my-24 md:my-44">
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-20 md:items-center">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <span className="block mb-2">Hello there!</span>
            <h1>
              I'm <span className="text-accent">Bojan</span> Bosnic
            </h1>
            <p className="max-w-xl	">
              I'm Bojan Bosnic, a Web Developer from Gradiska, Bosnia. I bring
              creativity and dedication to web development, aiming to make a
              global impact. Welcome to my digital space, where where code meets
              creativity!
            </p>
            <a href="@/assets/cv/bojan-cv.pdf" download target="_blank">
              <button type="button" class="w-full btn  lg:w-4/12">
                Download Cv{" "}
              </button>
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mt-16 md:mt-0 hidden md:block"
          >
            <Image
              className="myself_animation"
              src={myself.src}
              width={400}
              height={400}
              alt="Bojan Img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Index;
