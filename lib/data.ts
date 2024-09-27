import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import mdsaveImg from "@/public/MDsave.png";
import peerTreeImg from "@/public/peer-tree.png";
import crioImg from "@/public/crio.png";

export const links = [
  {
    name: "Main",
    hash: "#main",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-End Developer",
    location: "Yerevan, Armenia",
    description:
      "While on my third year of studying I found a job as a front-end developer. During this time have learned technologies like React, Ant Design, Styled components",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2022 - November 2022",
    company: "at TidePoolLabs",
  },
  {
    title: " Junior Full-stack Developer",
    location: "Yerevan, Armenia",
    description:
      "I have joined PeerTree and started working on both frontend and backend. Have gained experience as a full-stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - Jun 2023",
    company: "at TidePoolLabs",
  },
  {
    title: "Middle Front-End Developer",
    location: "Yerevan, Armenia",
    description:
      "At this time I joined MDsave Marketplace. Highly improved my frontend skills during this time. Have created different reusable components, improved different pages by working on SEO and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Aug 2024",
    company: "at TidePoolLabs",
  },
  {
    title: "Middle Full-stack Developer",
    location: "Yerevan, Armenia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Express, TypeScript, Tailwind, Prisma and PostgreSQL. I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - present",
    company: "as freelancer",
  },
] as const;

export const projectsData = [
  {
    title: "Peer Tree",
    description:
      "I have contributed as a full-stack developer on this platform. Have implemented different features like filtering, sorting and pagination.",
    tags: [
      "React",
      "TypeScript",
      "Express.js",
      "Redux Toolkit",
      "PostgreSql",
      "Sequilize",
    ],
    imageUrl: peerTreeImg,
  },

  {
    title: "MDsave Marketplace",
    description:
      "I worked as a frontend developer on this project for 1 year. Have mastered my frontend skills by learning new things.",
    tags: ["React", "Redux", "Ant Design", "Less", "REST Api", "Jest"],
    imageUrl: mdsaveImg,
  },
  {
    title: "Crio",
    description:
      "Startup Content marketplace. User friendly platform for sharing contents (images, videos, arts, etc.). Have worked on this project almost 6 months.",
    tags: ["React", "Graphql", "Apollo", "Styled Components", "Tailwind"],
    imageUrl: crioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Less",
  "ReactJS",
  "NodeJS",
  "Express.js",
  "Git",
  "Tailwind",
  "Ant Design",
  "Bootstrap",
  "TypeORM",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "REST Api",
  "GraphQL",
  "Jest",
  "React Testing Library",
] as const;
