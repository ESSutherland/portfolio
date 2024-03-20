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
    title: "Pokedex App",
    description:
      "A Pokedex App that uses the PokeAPI and Pokenode-ts to display information about Pokemon.",
    github: "https://github.com/ESSutherland/Pokedex",
    demo: "https://ethansutherland.net/Pokedex/",
    image: "/pokedex.png",
    tags: ["React", "TypeScript", "TailwindCSS", "API"],
  },
  {
    title: "Discord Bot",
    description:
      "A Discord bot that uses the discord.py library to interact with the Discord API. It is used in servers totaling over 9,000 members.",
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
    demo: "https://ethansutherland.net/Kian/",
    image: "/kian.png",
    tags: ["Godot", "GDScript"],
  },
];