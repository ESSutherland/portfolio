"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "../lib/data";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <motion.nav
      className="h-16 flex justify-between items-center w-full fixed bg-gradient-to-b from-black/60 to-transparent z-50"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ bounce: 0 }}
    >
      <Link
        href="/"
        className="bg-zinc-200 rounded-full cursor-pointer flex-center h-12 w-12 ml-4 hover:rotate-180 transition-all duration-500"
      >
        <Image src="logo.svg" alt="Ethan Sutherland" width={42} height={42} />
      </Link>

      <button
        type="button"
        className="text-zinc-200 text-3xl mr-4 sm:hidden"
        onClick={() => setHidden((c) => !c)}
      >
        {hidden ? <FaBars /> : <FaTimes />}
      </button>

      <ul
        className={`flex sm:justify-end items-center flex-col sm:flex-row text-zinc-200 text-lg font-bold gap-5 
      sm:mr-10 max-sm:bg-black/70 max-sm:absolute top-14 right-0 p-4 rounded-xl transition-all origin-top ${
        hidden ? "scale-y-0 sm:scale-y-100" : "scale-y-100"
      }`}
      >
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:scale-110 transition-all hover:text-sky-500"
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
