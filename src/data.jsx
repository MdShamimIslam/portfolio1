import {
  FaHome,
  FaUser,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaBriefcase,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import work1 from "../../../Portfolios/personal-portfolio/src/assets/wed.png";
import work2 from "../../../Portfolios/personal-portfolio/src/assets/food.png";
import work3 from "../../../Portfolios/personal-portfolio/src/assets/shop.png";
import work4 from "../../../Portfolios/personal-portfolio/src/assets/course.png";
import work5 from "../../../Portfolios/personal-portfolio/src/assets/donate.png";
import work6 from "../../../Portfolios/personal-portfolio/src/assets/reg.png";
import work7 from "../../../Portfolios/personal-portfolio/src/assets/bistro.png";
import work8 from "../../../Portfolios/personal-portfolio/src/assets/f.png";
import work9 from "../../../Portfolios/personal-portfolio/src/assets/summer.png";
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
    no: "2+",
    title: "Months of <br/> Experience",
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
    no: "11+",
    title: "Awards <br/> Won",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "97",
  },
  {
    id: 2,
    title: "Css",
    percentage: "95",
  },
  {
    id: 3,
    title: "Tailwind",
    percentage: "93",
  },
  {
    id: 4,
    title: "Bootstrap",
    percentage: "87",
  },
  {
    id: 5,
    title: "Sass",
    percentage: "85",
  },
  {
    id: 11,
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
    percentage: "65",
  },
  ,
  {
    id: 8,
    title: "Express.js",
    percentage: "73",
  },
  {
    id: 9,
    title: "Node.js",
    percentage: "76",
  },
  {
    id: 10,
    title: "MongoDB",
    percentage: "81",
  },
  {
    id: 12,
    title: "Firebase",
    percentage: "84",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase></FaBriefcase>,
    year: "2024 - Present",
    title: "Self Team Project",
    desc: "For more than two months we have been working on a group wise project with five to six people. As a web developer, I contributed to frontend and backend development,tackled challenges through collaborative problem-solving. This experience enhanced my technical skills and teamwork abilities, showcasing my commitment to delivering high-quality web solutions.",
  },

  {
    id: 2,
    category: "education",
    icon: <GiSkills />,
    year: "2019 - 2023",
    title: "Diploma in Eng. (CSE)<span>Dinajpur Polytechnic Institute</span>",
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
    technology:"Html, Css, JavaScript, React, MongoDB, JWT, Stripe, Tanstack-query, Axios, Express.Js, React-hook-form, React-router-dom, Node.js, Firebase etc."
  },
  {
    id: 2,
    img: work7,
    title: "BistroFood",
    front: "https://github.com/MdShamimIslam/bistroFood-client",
    back: "https://github.com/MdShamimIslam/bistroFood-server",
    live: "https://bistroo-food.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. This is a different food related website.",
      },
      {
        id: 2,
        f2: "2. A user can add the food of his choice to his card for which he needs to get it.Admin can delete and update each food item.",
      },
      {
        id: 3,
        f3: "3. Admin can see all users and admin can convert any user to admin if he wants.",
      },
    ],
    technology:"Html, Css, Tailwind, JavaScript, React, MongoDB, JWT, Stripe, Tanstack-query, Axios, Express.Js, React-hook-form, React-router-dom, Node.js, Firebase, Netlify etc."
  },
  {
    id: 3,
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
    technology:"Html, Css, Tailwind, JavaScript, React, MongoDB, Express.Js, React-hook-form, React-router-dom, Node.js, Firebase etc."
  },
  {
    id: 4,
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
    technology:"Html, Css, Tailwind, JavaScript, React, MongoDB, Express.Js, React-hook-form, React-router-dom, Node.js, Firebase etc."
  },
  {
    id: 5,
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
    technology:"Html, Css, Tailwind, JavaScript, React, React-hook-form, React-router-dom, Firebase etc."
  },
  {
    id: 6,
    img: work6,
    title: "Course Register",
    front: "https://github.com/MdShamimIslam/course-register",
    live: "https://creative-custard-b91aff.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. This is a course purchase related website.",
      },
      {
        id: 2,
        f2: "2. A user cannot take a course duration above 20 hours and can take a course maximum once.",
      },
      {
        id: 3,
        f3: "3. Each course has to be paid separately .",
      },
    ],
    technology:"Html, Css, Tailwind, JavaScript, ES6, React, React-hot-toast etc."
  },
  {
    id: 7,
    img: work5,
    title: "Donation",
    front: "https://github.com/MdShamimIslam/donate-campaign",
    live: "https://poor-donation.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. This is a donation related website.",
      },
      {
        id: 2,
        f2: "2. A user can make a donation for the food, clothing and education system.",
      },
      {
        id: 3,
        f3: "3. He can also see the percentage donation he has made in the pie chart.",
      },
    ],
    technology:"Html, Css, JavaScript, ES6, React, Netlify."
  },
  {
    id: 8,
    img: work9,
    title: "Summer-sale",
    front: "https://github.com/MdShamimIslam/summer-sale",
    live: "https://summer-sale9.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. A user can purchase the product of his choice.",
      },
      {
        id: 2,
        f2: "2. The user can see the list of products that he has purchased.",
      },
      {
        id: 3,
        f3: "3. If the user purchases more than 200 rupees, he will have to do a coupon to get the discount.",
      },
    ],
    technology:"Html, Css, JavaScript, ES6, Netlify."
  },
  {
    id: 9,
    img: work8,
    title: "Fruit-Burst",
    front: "https://github.com/MdShamimIslam/fruits-burst",
    live: "https://jovial-granita-52febf.netlify.app",
    features: [
      {
        id: 1,
        f1: "1. It is a design oriented website.",
      },
      {
        id: 2,
        f2: "2. The website contains header, banner, body and footer.",
      },
      {
        id: 3,
        f3: "3. The website provides social links to team member's.",
      },
    ],
    technology:"Html, Css, Netlify."
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
