import React from "react";
import { projects } from "../lib/data";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="sm:scroll-mt-56 text-center mb-64 w-full bg-zinc-900 py-20 shadow-xl"
    >
      <h1 className="text-[2.5rem] font-bold blue_gradient mb-16">Projects</h1>
      <ul className="flex-center flex-wrap gap-10">
        {projects.map((project, index) => (
          <li className="text-center bg-black/50 p-5 rounded-xl flex-center flex-col w-full mx-3 max-w-[600px] shadow-lg group h-[350px] relative overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="group-hover:scale-110 transition-all object-cover"
            />
            <div className="flex flex-col justify-between w-full h-full absolute z-10 p-5 bg-black/70 backdrop-blur-sm origin-top opacity-0 group-hover:opacity-100 transition-all">
              <h2 className="text-2xl text-zinc-200 font-extrabold">
                {project.title}
              </h2>
              <p className="text-zinc-300 font-semibold">
                {project.description}
              </p>
              <ul className="flex-center w-full flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <li className="text-sky-500 bg-black/60 p-2 rounded-xl font-semibold text-xs">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex-center gap-6 font-semibold">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex-center gap-2 text-zinc-200 hover:text-sky-500 hover:scale-110 active:scale-100 transition-all"
                >
                  GitHub
                  <IoOpenOutline />
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex-center gap-2 text-zinc-200 hover:text-sky-500 hover:scale-110 active:scale-100 transition-all"
                  >
                    Page
                    <IoOpenOutline />
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
