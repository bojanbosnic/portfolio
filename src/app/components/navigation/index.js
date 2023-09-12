"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Index = () => {
  const [proba, setProba] = useState(false);
  const navHoverFun = () => {
    setProba(true);
  };
  return (
    <div className="absolute right-0">
      <nav className="bg-transparent my-4 items-center z-40">
        <ul className="flex flex-col p-0 items-center list-none ">
          <li className="mr-4 text-primary">
            <AiFillHome fontSize={22} onMouseEnter={navHoverFun} />
            {proba && (
              <Link href="/" className="">
                Home
              </Link>
            )}
          </li>
          <li className="mr-4 text-primary">
            <FaUser fontSize={22} />
            {/* <Link href="/products">About</Link> */}
          </li>
          <li className="mr-4 text-primary">
            <MdWork fontSize={22} />
            {/* <Link href="/about">Service</Link> */}
          </li>
          <li className="mr-4 text-primary">
            <BsTelephone fontSize={22} />
            {/* <Link href="/contact">Contact</Link> */}
          </li>
        </ul>
        <button className="border-3 border-white m-3 bg-transparent cursor-pointer h-9 md:relative  z-30 block  md:hidden"></button>
      </nav>
    </div>
  );
};

export default Index;
