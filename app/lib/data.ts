import { title } from "process";

export const navData = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Skills",
    path: "#skills",
  },
  {
    label: "Projects",
    path: "#projects",
  },
  {
    label: "Contact",
    path: "#contact",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "TailwindCSS",
  "Python",
  "SQLite",
  "Godot",
  "GDScript",
  "Next.js",
  "Git",
  "Java",
];

export const projects = [
  {
    title: "Squad Timer",
    description:
      "An application I made with some friends that allows users to create timers for their Twitch streams. I developed the frontend of this application using Next.js and TailwindCSS.",
    demo: "https://squadtimer.tv/",
    image: "/squadtimer.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "API", "Websockets"],
  },
  {
    title: "Pengwin's Landing Page",
    description: "A landing page for my brother who is a Twitch streamer.",
    github: "https://github.com/ESSutherland/Pengwin",
    demo: "https://pengwin-xi.vercel.app/",
    image: "/pengwin.png",
    tags: ["React", "TypeScript", "TailwindCSS", "Next.js"],
  },
  {
    title: "Discord Bot",
    description:
      "A Discord bot that uses the discord.js library to interact with the Discord API. It is used in servers totaling over 9,000 members.",
    github: "https://github.com/ESSutherland/DiscordBotv3",
    demo: "",
    image: "/new_bot.png",
    tags: ["Typescript", "Node.js", "API", "MongoDB"],
  },
  {
    title: "Pokedex App",
    description:
      "A Pokedex App that uses the PokeAPI and Pokenode-ts to display information about Pokemon.",
    github: "https://github.com/ESSutherland/Pokedex",
    demo: "https://essutherland.github.io/Pokedex/",
    image: "/pokedex.png",
    tags: ["React", "TypeScript", "TailwindCSS", "API"],
  },
  {
    title: "Old Discord Bot",
    description:
      "A Discord bot that uses the discord.py library to interact with the Discord API. The older version of my current bot.",
    github: "https://github.com/ESSutherland/DiscordBotv2",
    demo: "",
    image: "/bot.png",
    tags: ["Python", "SQLite", "API"],
  },
  {
    title: "Kian's Game",
    description:
      "A game I made using Godot for a friend. It is a simple infinite runner game.",
    github: "https://github.com/ESSutherland/Kian",
    demo: "https://essutherland.github.io/Kian/",
    image: "/kian.png",
    tags: ["Godot", "GDScript"],
  },
];
