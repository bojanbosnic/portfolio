import Image from "next/image";
import "./about_style.css";
import React from "react";
import me from "../../../../assets/img/bojan.png";

const index = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h3>About Me</h3>
        <div className="flex items-center justify-center mt-14">
          <div className="relative overflow-hidden border-2 rounded-full border-accent w-48 h-48 ">
            <Image
              class="w-full absolute h-full object-cover overflow-hidden"
              layout="fill"
              src={me.src}
              alt="Bojan's image"
            />
          </div>
          <div className="w-52 h-52 absolute border-2 border-x-transparent border-accent rotate-45 rounded-full circle-animation"></div>
        </div>
        <h4 className="text-3xl font-semibold mt-6">Frontend Developer!</h4>
        <p className="max-w-2xl text-center">
          My job is to take care not to be penalized by the Google algorithm and
          by users too. I fix the broken UX/UI principles, semantic HTML,
          headings hierarchy, web responsiveness, web accessibility, code W3C
          validation, and optimization.
        </p>
      </div>
    </>
  );
};

export default index;
