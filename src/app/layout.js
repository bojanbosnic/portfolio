"use client";
import "./globals.css";
import React, { useEffect } from "react";
import Navigation from "../app/components/navigation/index";
import Contact from "../app/components/contact_tape/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { orbitron, rajdhani, aldrich } from "../../assets/fonts/fonts";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 500,
    });
  }, []);
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${aldrich.variable}`}
    >
      <body className="bg-gradient-to-b from-[#43085a] to-[#1f0e42] mix-blend-normal dark:opacity-[0.15] blur-[60px]">
        <Contact />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
