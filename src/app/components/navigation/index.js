"use client";
import React, { useState } from "react";
import Link from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
const Index = () => {
  const [proba, setProba] = useState(false);
  const navHoverFun = () => {
    setProba(true);
  };
  return (
    <div className="fixed right-4">
      <nav className="px-3 my-4 border-none border-white bg-[#ffffff1f] rounded-3xl items-center z-40">
        <ul className="flex flex-col justify-center p-0 items-center list-none ">
          <li className="my-4 text-primary">
            <AiFillHome fontSize={22} onMouseEnter={navHoverFun} />
          </li>
          <li className="my-4 text-primary">
            <FaUser fontSize={22} />
          </li>
          <li className="my-4 text-primary">
            <MdWork fontSize={22} />
            {/* <Link href="/about">Service</Link> */}
          </li>
          <li className="my-4 text-primary">
            <BsFillTelephoneFill fontSize={22} />
            {/* <Link href="/contact">Contact</Link> */}
          </li>
        </ul>
        <button className="border-3 border-white m-3 bg-transparent cursor-pointer h-9 md:relative  z-30 block  md:hidden"></button>
      </nav>
    </div>
  );
};

export default Index;
