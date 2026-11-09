import hospime from "../images/hospime.png";
import aiafrica from "../images/aiafrica.png";
import ominifoods from "../images/ominifoods.png";

export const projects = [
  {
    title: "AI Africa Blog",
    description:
      "Full-stack AI content platform with a Next.js frontend and Node.js/Express REST API. Includes modular blog-post management and Clerk authentication.",
    tech: ["Next.js", "Node.js", "Express.js", "Clerk", "pnpm"],
    github: "https://github.com/Ubifranklin/aiafrica",
    live: "#",
    image: aiafrica
  },
  {
    title: "HospiMe",
    description:
      "Responsive healthcare web application built with React to present healthcare information and improve user access to relevant services.",
    tech: ["React.js", "HTML", "CSS"],
    github: "https://github.com/Ubifranklin/HospiMe",
    live: "https://ubifranklin.github.io/HospiMe/",
    image: hospime
  },
  {
    title: "OminiFoods",
    description:
      "Restaurant website showcasing menu items and business information through a clean, mobile-first React interface.",
    tech: ["React.js", "HTML", "CSS"],
    github: "https://github.com/Ubifranklin/ominifoods",
    live: "#",
    image: ominifoods
  }
];

