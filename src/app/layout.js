import "./globals.css";
import Navigation from "../app/components/navigation/index";
import Contact from "../app/components/contact_tape/index";
import Footer from "../app/components/footer/index";

import { orbitron, rajdhani, aldrich } from "../../assets/fonts/fonts";
export const metadata = {
  title: "Personal Portoflio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${aldrich.variable}`}
    >
      <body className={`bg-image`}>
        <Contact />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
