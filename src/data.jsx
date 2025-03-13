import { FaPaintBrush } from "react-icons/fa";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  profile3,
  profile4,
  profile5,
  profile6,
  Node,
  MongoDB,
  Express,
  MySQL,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
  Gemini,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];
export const projects = [
  {
    title: "AI Code Reviewer",
    image: project1,
    category: "MERN Stack",
    description: `An AI-powered code review system leveraging the Gemini API to analyze, optimize, and enhance code quality with real-time suggestions.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "MongoDB", logo: MongoDB },
      { name: "Express.js", logo: Express },
      { name: "React.js", logo: react },
      { name: "Node.js", logo: Node },
      { name: "Gemini API", logo: Gemini },
    ],
  },
  {
    title: "EduVed - Study & Book Exchange",
    image: project2,
    category: "EdTech",
    description: `A study platform for RGPV BTech students, providing structured notes, PYQs, quizzes, and a seamless book exchange system.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React.js", logo: react },
      { name: "Express.js", logo: Express },
      { name: "Node.js", logo: Node },
      { name: "MongoDB", logo: MongoDB },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    title: "HomiSphere - Real Estate Marketplace",
    image: project3,
    category: "Web App",
    description: `A modern real estate platform where users can buy, sell, and rent properties. Features an interactive map, location-based search, and in-app chat.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React.js", logo: react },
      { name: "Node.js", logo: Node },
      { name: "Express.js", logo: Express },
      { name: "MongoDB", logo: MongoDB },
      { name: "Tailwind CSS", logo: tailwind },
    ],
  },
  {
    title: "TastyBurger - Food Ordering UI",
    image: project4,
    category: "Frontend UI",
    description: `A visually appealing and interactive UI for an online food ordering system. Features include a dynamic menu, engaging visuals, and a responsive design`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React.js", logo: react },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    title: "LiveCrick - Cricket Score Tracker",
    image: project5,
    category: "Web App",
    description: `A real-time cricket score tracking app providing detailed match scorecards, live updates, and an engaging UI for cricket enthusiasts.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React.js", logo: react },
      { name: "Node.js", logo: Node },
      { name: "Express.js", logo: Express },
      { name: "MongoDB", logo: MongoDB },
      { name: "Tailwind CSS", logo: tailwind },
    ],
  },
];


export const skills = [
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node",
        level: "Experienced",
        logo: Node,
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        logo: MongoDB,
      },
      {
        skill: "Express",
        level: "Intermediate",
        logo: Express,
      },
      {
        skill: "MySQL",
        level: "Intermediate",
        logo: MySQL,
      }
      
    ],
  },
  {
    title: "Frontend Development",
    data: [
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
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Intermediate",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "Framer motion",
        level: "Intermediate",
        logo: reactnative,
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
    name: "Messenger",
    value: "Emmanuel Eze",
    link: "",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+919752826161",
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

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
