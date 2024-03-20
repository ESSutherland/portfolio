"use client";
import React from "react";
import { skills } from "../lib/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="text-center mb-64 scroll-mt-56">
      <h1 className="text-[2.5rem] font-bold blue_gradient mb-12">Skills</h1>
      <ul className="flex flex-wrap justify-center max-w-[700px] gap-5">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            className="text-xl text-zinc-200 bg-zinc-900/90 p-3 rounded-2xl font-semibold"
            whileInView={{
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
