import {
  FaHome,
  FaUser,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaBriefcase,
} from "react-icons/fa";
import work1 from "../../../Portfolios/personal-portfolio/src/assets/2.png";
import { orangeColor } from "./components/Extra";
import { greenColor } from "./components/Extra";
import { purpleColor } from "./components/Extra";
import { blueColor } from "./components/Extra";
import { redColor } from "./components/Extra";
import { roseColor } from "./components/Extra";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon"></FaHome>,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon"></FaUser>,
    path: "/about",
  },
  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon"></FaFolderOpen>,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon"></FaEnvelopeOpen>,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Md. Shamim Islam",
  },
  {
    id: 2,
    title: "Years : ",
    description: "23 years",
  },
  {
    id: 3,
    title: "Religion : ",
    description: "Islam",
  },
  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },
  {
    id: 5,
    title: "Address : ",
    description: "Sundarganj,Gaibandha",
  },
  {
    id: 6,
    title: "Phone : ",
    description: "01571529918",
  },
  {
    id: 7,
    title: "Email : ",
    description: "shamim401897@gmail.com",
  },
  {
    id: 8,
    title: "Language : ",
    description: "Bangla, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br/> Experience",
  },
  {
    id: 2,
    no: "15+",
    title: "Complete <br/> Projects",
  },
  {
    id: 3,
    no: "12+",
    title: "Happy <br/> Customers",
  },
  {
    id: 4,
    no: "3+",
    title: "Awards <br/> Won",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },
  {
    id: 2,
    title: "Css",
    percentage: "88",
  },
  {
    id: 3,
    title: "Tailwind",
    percentage: "98",
  },
  {
    id: 4,
    title: "JavaScript",
    percentage: "87",
  },
  {
    id: 5,
    title: "React",
    percentage: "90",
  },
  {
    id: 6,
    title: "Next.js",
    percentage: "88",
  },
  {
    id: 7,
    title: "Redux",
    percentage: "81",
  },
  {
    id: 8,
    title: "TypeScript",
    percentage: "64",
  },
  {
    id: 9,
    title: "Mongoose",
    percentage: "57",
  },
  {
    id: 10,
    title: "Express.js",
    percentage: "85",
  },
  {
    id: 11,
    title: "Node.js",
    percentage: "80",
  },
  {
    id: 12,
    title: "MongoDB",
    percentage: "73",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2018 - Present",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2018 - Present",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem",
  },
  {
    id: 3,
    category: "education",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2018 - Present",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem",
  },
  {
    id: 4,
    category: "education",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2018 - Present",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem",
  },
];

export const portfolio = [
  {
    id: 1,
    img: work1,
    title: "wedlockBD",
    front: "https://github.com/MdShamimIslam/wedlockBD-client",
    back: "https://github.com/MdShamimIslam/wedlockBD-server",
    live: "https://wedlockbd-fbc3e.web.app",
    features: [
      {
        id:1,
        f1: "1.Our project is an educational training best programming project.",
      },
      {
        id:2,
        f2: "2. Our project includes a banner and service featuring top tutors and upcoming courses along with footer."
      },
      {
        id:3,
        f3: "3. Our project includes a banner and service featuring top tutors and upcoming courses along with footer."
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: orangeColor,
    color: "orange",
  },
  {
    id: 2,
    img: greenColor,
    color: "green",
  },
  {
    id: 3,
    img: roseColor,
    color: "violet",
  },
  {
    id: 4,
    img: purpleColor,
    color: "purple",
  },
  {
    id: 5,
    img: redColor,
    color: "red",
  },
  {
    id: 6,
    img: blueColor,
    color: "blue",
  },
];
