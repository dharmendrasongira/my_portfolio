import { FaMobileAlt } from "react-icons/fa";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {
  project2,
  mockNinjaCover,
  healthcareMobileCover,
  healthcareWebCover,
  aiHiringCover,
  Node,
  MongoDB,
  Express,
  MySQL,
  css,
  html,
  javascript,
  tailwind,
  react,
  reactnative,
  typescript,
  redux,
  git,
  n8n,
  java,
  emailicon,
  linkedinicon,
  whatsappicon,
  educationicon,
  Gemini,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Achievements" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    description: `Building cross-platform mobile applications with React Native and TypeScript. 
                  I create reusable, hook-based components and responsive layouts that deliver a 
                  consistent, user-friendly experience on both Android and iOS from a single codebase.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Developing responsive, dynamic and high-performance web applications using React.js, 
    Redux Toolkit, Node.js, Express.js and MongoDB. I focus on clean state management, optimized API 
    calls and fast load times so the product stays scalable and accessible.`,
  },
  {
    title: "AI & Workflow Automation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Designing AI-powered automation pipelines with n8n and LLM APIs. From resume parsing 
                  and candidate scoring to dynamic content generation, I connect your tools into 
                  workflows that remove repetitive manual work and speed up decisions.`,
  },
];
export const projects = [
  {
    title: "Mock Ninja - AI Interview Platform",
    image: mockNinjaCover,
    category: "MERN Stack",
    description: `A full-stack AI-powered mock interview platform with real-time interview simulation, answer analysis and candidate performance tracking through facial gesture and eye-contact analysis. Load times reduced by 20% through API and frontend optimization.`,
    demoLink: "https://mock-ninja-client.onrender.com/",
    repoLink: "",
    stacks: [
      { name: "MongoDB", logo: MongoDB },
      { name: "Express.js", logo: Express },
      { name: "React.js", logo: react },
      { name: "Node.js", logo: Node },
      { name: "Gemini API", logo: Gemini },
    ],
  },
  {
    title: "Eduved - Academic Resource Platform",
    image: project2,
    category: "EdTech",
    description: `A full-stack academic platform where students upload, browse and download notes, papers and study resources organized by subject and semester, with structured categorization and search for faster discoverability.`,
    demoLink: "https://eduved-frontend.onrender.com/",
    repoLink: "",
    stacks: [
      { name: "React.js", logo: react },
      { name: "Redux Toolkit", logo: redux },
      { name: "Express.js", logo: Express },
      { name: "Node.js", logo: Node },
      { name: "MongoDB", logo: MongoDB },
      { name: "Tailwind CSS", logo: tailwind },
    ],
  },
  {
    title: "Healthcare Mobile Application",
    image: healthcareMobileCover,
    category: "React Native App",
    description: `A cross-platform healthcare mobile app built at Virim Infotech using React Native and TypeScript, with reusable hook-based components that display health reports, records and related patient data through a responsive interface.`,
    demoLink: "",
    stacks: [
      { name: "React Native", logo: reactnative },
      { name: "TypeScript", logo: typescript },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    title: "Healthcare Web Platform",
    image: healthcareWebCover,
    category: "Web App",
    description: `A companion web-based healthcare platform built with React.js that mirrors the mobile app's functionality, giving patients and staff seamless access to health reports and records across devices.`,
    demoLink: "",
    stacks: [
      { name: "React.js", logo: react },
      { name: "TypeScript", logo: typescript },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    title: "AI Hiring Automation Pipeline",
    image: aiHiringCover,
    category: "AI Automation",
    description: `An n8n-based AI hiring automation pipeline that parses resumes, scores candidates against a job description using an LLM and generates ranked shortlists, cutting manual screening time by 70%.`,
    demoLink: "",
    stacks: [
      { name: "n8n", logo: n8n },
      { name: "LLM API", logo: Gemini },
      { name: "JavaScript", logo: javascript },
    ],
  },
];


export const skills = [
  {
    title: "Frontend & Mobile",
    data: [
      {
        skill: "React.js",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "TypeScript",
        level: "Intermediate",
        logo: typescript,
      },
      {
        skill: "Redux Toolkit",
        level: "Intermediate",
        logo: redux,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
    ],
  },
  {
    title: "Backend, Databases & Tools",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
        logo: Node,
      },
      {
        skill: "Express.js",
        level: "Intermediate",
        logo: Express,
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        logo: MongoDB,
      },
      {
        skill: "MySQL",
        level: "Intermediate",
        logo: MySQL,
      },
      {
        skill: "Java",
        level: "Intermediate",
        logo: java,
      },
      {
        skill: "Git & GitHub",
        level: "Experienced",
        logo: git,
      },
      {
        skill: "n8n",
        level: "Intermediate",
        logo: n8n,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "dharmendrasongira259@gmail.com",
    link: "mailto:dharmendrasongira259@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "LinkedIn",
    value: "Dharmendra Songira",
    link: "https://www.linkedin.com/in/dharmendra-songira-8ab218280/",
    icon: linkedinicon,
    btnIcon: <AiFillLinkedin />,
    color: "rgb(10,102,194)",
  },
  {
    name: "WhatsApp",
    value: "+91 9752826161",
    link: "https://api.whatsapp.com/send?phone=+919752826161",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [

  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/dharmendrasongira",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/dharmendra-songira-8ab218280/",
  },

];

export const achievements = [
  {
    avatar: MySQL,
    name: "NPTEL - Database Management System",
    review: `Certification covering relational database design, normalization, transactions and SQL
            query optimization, applied directly in projects built on MySQL and MongoDB.`,
  },
  {
    avatar: java,
    name: "NPTEL - Data Structures & Algorithms using Java",
    review: `Certification in data structures and algorithms using Java, scored 71%. Strengthened
            problem solving around arrays, trees, graphs, sorting and complexity analysis.`,
  },
  {
    avatar: react,
    name: "Advanced MERN Development - Infosys Springboard",
    review: `Full-stack MERN application development covering React.js, Node.js, Express.js and MongoDB,
            including REST API design, authentication and production-ready project structure.`,
  },
  {
    avatar: educationicon,
    name: "B.Tech - Information Technology",
    review: `Acropolis Institute of Technology and Research, Indore (2022 - 2026), CGPA 7.54.
            Coursework in OOPs, DBMS, Operating Systems and Computer Networks.`,
  },
];
