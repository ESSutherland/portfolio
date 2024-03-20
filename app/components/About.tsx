"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="text-center text-slate-200 leading-relaxed px-5 w-full flex-center flex-col gap-6 mb-60 bg-zinc-900 py-28 shadow-2xl scroll-mt-56"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ amount: 0.3 }}
    >
      <h1 className="text-[2.5rem] font-bold blue_gradient">About Me</h1>
      <p className="text-lg max-w-[800px]">
        My name is <span className="font-bold">Ethan Sutherland</span>, I am a
        developer based in West Des Moines, Iowa. I graduated from{" "}
        <span className="font-bold">Des Moines Area Community College</span>{" "}
        with an AAS Degree in Business Information Systems with a focus on
        Object-Oriented Programming. In my free time I enjoy playing and making
        video games, as well as learning new technologies. I currently have no
        professional experience, but I ready and willing to learn. I am also
        open to freelance work.
      </p>
    </motion.section>
  );
};

export default About;
