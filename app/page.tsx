"use client";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaAngleDown } from "react-icons/fa6";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <motion.section
        className="text-center mt-64 flex-center flex-col w-1/2 max-w-[700px] gap-4 relative scroll-mt-64"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        id="home"
      >
        <div className="absolute top-0 w-full h-full bg-sky-500 -z-[1] blur-2xl opacity-[0.05] rounded-full" />
        <h1 className="text-[3rem] text-zinc-200 font-sora">
          Hi, I'm <br />
          <span className="font-extrabold text-[3.5rem] sm:text-[5rem] blue_gradient">
            Ethan Sutherland
          </span>
        </h1>
        <p className="text-md w-[350px] text-zinc-200 font-semibold">
          I am an enrty-level{" "}
          <span className="font-extrabold text-sky-500">Software</span> and{" "}
          <span className="font-extrabold text-sky-500">Web</span> Developer
          looking for professional development experience.
        </p>
        <div className="flex-center gap-4">
          <Link
            href="https://github.com/ESSutherland"
            target="_blank"
            className="link-btn h-11 w-11"
          >
            <FaGithub className="h-full w-full" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ethan-sutherland-59061b58/"
            target="_blank"
            className="link-btn h-11 w-11"
          >
            <FaLinkedin className="h-full w-full" />
          </Link>
          <Link href="#contact" className="link-btn">
            <p className="font-semibold text-zinc-200 hover:text-zinc-300">
              Contact
            </p>
          </Link>
        </div>
      </motion.section>
      <motion.div
        className="my-32"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Link href="#about" className=" text-zinc-200 text-[3rem]">
          <FaAngleDown />
        </Link>
      </motion.div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
