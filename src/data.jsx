import {
  FaHome,
  FaUser,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaBriefcase,
} from "react-icons/fa";
import work1 from "../../../Portfolios/personal-portfolio/src/assets/wed.png";
import work2 from "../../../Portfolios/personal-portfolio/src/assets/food.png";
import work3 from "../../../Portfolios/personal-portfolio/src/assets/shop.png";
import work4 from "../../../Portfolios/personal-portfolio/src/assets/academy.png";
import work5 from "../../../Portfolios/personal-portfolio/src/assets/donate.png";
import work6 from "../../../Portfolios/personal-portfolio/src/assets/course.png";
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
    percentage: "92",
  },
  {
    id: 4,
    title: "Bootstrap",
    percentage: "87",
  },
  {
    id: 5,
    title: "JavaScript",
    percentage: "90",
  },
  {
    id: 6,
    title: "React.js",
    percentage: "92",
  },
  {
    id: 7,
    title: "Next.js",
    percentage: "55",
  },
  ,
  {
    id: 8,
    title: "Express.js",
    percentage: "83",
  },
  {
    id: 9,
    title: "Node.js",
    percentage: "76",
  },
  {
    id: 10,
    title: "MongoDB",
    percentage: "85",
  },
  {
    id: 11,
    title: "Redux",
    percentage: "45",
  },
  {
    id: 12,
    title: "Firebase",
    percentage: "88",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase></FaBriefcase>,
    year: "0 - Present",
    title: "no position <span>empty company </span>",
    desc: "I have no experience in job/intern related.",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase></FaBriefcase>,
    year: "0 - Present",
    title: "no position <span>empty company </span>",
    desc: "I have no experience in job/intern related.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2018 - Present",
    title: "SSC (Science) <span> Jahurulhat Haji Elahi High School </span>",
    desc: " Completed high school with a focus on mathematics and computer science. Participated in extracurricular activities such as coding clubs and robotics competitions.",
  },
  {
    id: 4,
    category: "education",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2019 - 2023",
    title:
      "Diploma in Engineering (CSE)<span>Dinajpur Polytechnic Institute</span>",
    desc: "Earned a Diploma in Computer Science and Engineering with specialization in web development. Completed coursework covering various programming languages and software development methodologies. Developed a project on web application development using HTML, CSS, JavaScript, Node.js, Express.js, Firebase and React.",
  },
];

export const portfolio = [
  {
    id: 1,
    img: work1,
    title: "WedlockBD",
    front: "https://github.com/MdShamimIslam/wedlockBD-client",
    back: "https://github.com/MdShamimIslam/wedlockBD-server",
    live: "https://wedlockbd-fbc3e.web.app",
    features: [
      {
        id: 1,
        f1: "1. This project is matrimony related.",
      },
      {
        id: 2,
        f2: "2. Here a user can create, edit, view and see who he has sent request to see biodata of his favorite people and post his marriage succession.Profiles can be premium through stripe card payment.",
      },
      {
        id: 3,
        f3: "3. Admin can make users admin, can delete users, can request premiums of users and can approve who has sent the request to whom, and can see the success story of the user.",
      },
    ],
  },
  {
    id: 2,
    img: work2,
    title: "FoodBuzz",
    front: "https://github.com/MdShamimIslam/community-food-client",
    back: "https://github.com/MdShamimIslam/community-food-server",
    live: "https://community-food-ae807.web.app",
    features: [
      {
        id: 1,
        f1: "1. It's a community food sharing related website.",
      },
      {
        id: 2,
        f2: "2. A user can add his extra leftover food here. He can see who has sent a request to his food and can update and delete the food if he wants.",
      },
      {
        id: 3,
        f3: "3. On the other hand, if another user needs food, he can send a request for that food.He can see in table form what food he has requested for.If he wants he can cancel the meal for which he has sent the request.",
      },
    ],
  },
  {
    id: 3,
    img: work3,
    title: "MyShop",
    front: "https://github.com/MdShamimIslam/technology-electric-client",
    back: "https://github.com/MdShamimIslam/technology-electric-server",
    live: "https://technology-electronic.web.app",
    features: [
      {
        id: 1,
        f1: "1. It is an e-commerce related website.",
      },
      {
        id: 2,
        f2: "2. A user can add and update products of different brands according to his brand.",
      },
      {
        id: 3,
        f3: "3. On the other hand, another user can add the product of that brand and later can see and delete the product added by him in table form.",
      },
    ],
  },
  {
    id: 4,
    img: work4,
    title: "s.Academy",
    front: "https://github.com/MdShamimIslam/educational-training-platform",
    live: "https://shamim-academy.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. This project is an educational training best programming project.",
      },
      {
        id: 2,
        f2: "2. It's includes a banner and service featuring top tutors and upcoming courses along with footer.",
      },
      {
        id: 3,
        f3: "3. It's includes a banner and service featuring top tutors and upcoming courses along with footer.",
      },
    ],
  },
  {
    id: 5,
    img: work5,
    title: "Donation",
    front: "https://github.com/MdShamimIslam/donate-campaign",
    live: "https://poor-donation.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. This project is an educational training best programming project.",
      },
      {
        id: 2,
        f2: "2. It's includes a banner and service featuring top tutors and upcoming courses along with footer.",
      },
      {
        id: 3,
        f3: "3. It's includes a banner and service featuring top tutors and upcoming courses along with footer.",
      },
    ],
  },
  {
    id: 6,
    img: work6,
    title: "Course Registration",
    front: "https://github.com/MdShamimIslam/course-register",
    live: "https://creative-custard-b91aff.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. This project is an educational training best programming project.",
      },
      {
        id: 2,
        f2: "2. It's includes a banner and service featuring top tutors and upcoming courses along with footer.",
      },
      {
        id: 3,
        f3: "3. It's includes a banner and service featuring top tutors and upcoming courses along with footer.",
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
