import Image from "next/image";
import React from "react";
import slika1 from "../../../../assets/img/portfolio-img1.png";
import slika2 from "../../../../assets/img/portfolio-img2.png";
import slika3 from "../../../../assets/img/portfolio-img3.png";

const index = () => {
  return (
    <div className="flex flex-col my-44 gap-16">
      <div className="flex gap-16">
        <div className="w-1/2">
          <h3>My latest work</h3>
          <p className="max-w-xs font-drugi">
            {" "}
            My job is to take care not to be penalized by the Google algorithm
            and by users too. I fix the broken UX/UI principles, semantic HTML,
            headings hierarchy, web responsiveness, web accessibility, code W3C
            validation, and optimization.
          </p>
        </div>
        {/* da */}
        <div class="group relative border-2 rounded-xl border-white/50 w-1/2 overflow-hidden bg-cover bg-no-repeat">
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
            <Image
              className="group-hover:scale-125 transition-all duration-500"
              src={slika1.src}
              layout="fill"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div>
              <span>Project Title</span>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-between gap-16">
        <div className="group relative border-2 rounded-xl border-white/50 w-1/2 overflow-hidden bg-cover bg-no-repeat">
          <div class="relative w-full border rounded-xl h-52 border-cyan-50 overflow-hidden bg-cover bg-no-repeat">
            <Image
              className="group-hover:scale-125 transition-all duration-500"
              src={slika2.src}
              layout="fill"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <a href="#!">
              <div class="group-hover:bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>{" "}
        </div>
        <div
          class="relative w-full border rounded-xl border-cyan-50 overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Image src={slika3.src} layout="fill" />
          <a href="#!">
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default index;
