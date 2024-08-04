import React from "react";
import { CgVercel } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="text-center text-zinc-400 text-xs hidden sm:flex mt-16 mb-4 items-center justify-center gap-1">
      © 2024 Ethan Sutherland | All Rights Reserved | Made with Next.js,
      TailwindCSS, and Framer Motion |{" "}
      <span className=" flex items-center justify-center">
        Powered By Vercel <CgVercel className="w-5 h-5" />
      </span>
    </footer>
  );
};

export default Footer;
