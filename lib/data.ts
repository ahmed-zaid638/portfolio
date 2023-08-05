import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import ecommerce from "@/public/ecommerce.png";
import dashboard from "@/public/dashboard.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Egypt , Cairo",
    description:
      "I studied web development  for about year and half while practicing projects",
    icon: React.createElement(LuGraduationCap),
    date: "October 2021   - Jun 2023 ",
  },
  {
    title: "Front-End Developer - Intership",
    location: "Cairo, Nasr city",
    description:
      "I got an Intenship at company called weiboo and I have got much experience working with the company team in real projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Ferbruary 2023 - May 2023",
  },
  {
    title: "Front End Developer - Freelance project",
    location: "Cairo, Nasr City",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "May 2023 - Jun 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce website",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerce,
    link : "https://amazon-nextjs-theta.vercel.app/" , 
    github : "https://github.com/ahmed-zaid638/Amazon-nextjs"
  },
  {
    title: "Dashboard",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: dashboard,
    link : "https://dashboard-react-taupe.vercel.app/" , 
    github : "https://github.com/ahmed-zaid638/Dashboard-React"
  },
  {
    title: "Social media app",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link : "https://amazon-nextjs-theta.vercel.app/" , 
    github : "https://github.com/ahmed-zaid638/Amazon-nextjs"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Typscript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Gitub" ,
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Bootstrap",
  "Express",

  "Framer Motion",
] as const;
