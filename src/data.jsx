import { FaHome,FaUser,FaEnvelopeOpen,FaFolderOpen, FaBriefcase } from 'react-icons/fa';
import { FiCode, FiFileText, FiUser} from 'react-icons/fi';
import work1 from '../../../Portfolios/personal-portfolio/src/assets/myShop.png';
import work2 from '../../../Portfolios/personal-portfolio/src/assets/donation.png';
import work3 from '../../../Portfolios/personal-portfolio/src/assets/training.png';
import { orangeColor } from './components/Extra';
import { greenColor } from './components/Extra';
import { purpleColor } from './components/Extra';
import {blueColor } from './components/Extra';
import { redColor } from './components/Extra';
import { roseColor } from './components/Extra';



export const links = [
    {
        id:1,
        name:'Home',
        icon:<FaHome className='nav__icon'></FaHome>,
        path:'/'
    },
    {
        id:2,
        name:'About',
        icon:<FaUser className='nav__icon'></FaUser>,
        path:'/about'
    },
    {
        id:3,
        name:'Portfolio',
        icon:<FaFolderOpen className='nav__icon'></FaFolderOpen>,
        path:'/portfolio'
    },
    {
        id:4,
        name:'Contact',
        icon:<FaEnvelopeOpen className='nav__icon'></FaEnvelopeOpen>,
        path:'/contact'
    }
   
]

export const personalInfo = [
    {
        id : 1,
        title : 'Name : ',
        description : 'Shamim Islam'
    },
    {
        id : 2,
        title : 'Years : ',
        description : '23 years'
    },
    {
        id : 3,
        title : 'Religion : ',
        description : 'Islam'
    },
    {
        id : 4,
        title : 'Nationality : ',
        description : 'Bangladeshi'
    },
    {
        id : 5,
        title : 'Address : ',
        description : 'Sundarganj,Gaibandha'
    },
    {
        id : 6,
        title : 'Phone : ',
        description : '01738740639'
    },
    {
        id : 7,
        title : 'Email : ',
        description : 'shamim401897@gmail.com'
    },
    {
        id : 8,
        title : 'Language : ',
        description : 'Bangla, English'
    },

]

export const stats = [
    {
        id : 1,
        no : "3+",
        title : 'Years of <br/> Experience'
    },
    {
        id : 2,
        no : "25+",
        title : 'Complete <br/> Projects'
    },
    {
        id : 3,
        no : "19+",
        title : 'Happy <br/> Customers'
    },
    {
        id : 4,
        no : "16+",
        title : 'Awards <br/> Won'
    }
]

export const skills = [
    {
        id : 1,
        title : 'Html',
        percentage : '95'
    },
    {
        id : 2,
        title : 'Css',
        percentage : '88'
    },
    {
        id : 3,
        title : 'JavaScript',
        percentage : '87'
    },
    {
        id : 4,
        title : 'React',
        percentage : '90'
    },
    {
        id : 5,
        title : 'Next.js',
        percentage : '75'
    },
    {
        id : 6,
        title : 'Redux',
        percentage : '81'
    },
    {
        id : 7,
        title : 'TypeScript',
        percentage : '64'
    },
    {
        id : 8,
        title : 'Mongoose',
        percentage : '57'
    },
    
]

export const resume = [
    {
        id : 1,
        category : 'experience',
        icon : <FaBriefcase></FaBriefcase>,
        year : '2018 - Present',
        title : 'Web Developer <span> Envato </span>',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem'
    },
    {
        id : 2,
        category : 'experience',
        icon : <FaBriefcase></FaBriefcase>,
        year : '2018 - Present',
        title : 'Web Developer <span> Envato </span>',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem'
    },
    {
        id : 3,
        category : 'experience',
        icon : <FaBriefcase></FaBriefcase>,
        year : '2018 - Present',
        title : 'Web Developer <span> Envato </span>',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem'
    },
    {
        id : 4,
        category : 'education',
        icon : <FaBriefcase></FaBriefcase>,
        year : '2018 - Present',
        title : 'Web Developer <span> Envato </span>',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem'
    },
    {
        id : 5,
        category : 'education',
        icon : <FaBriefcase></FaBriefcase>,
        year : '2018 - Present',
        title : 'Web Developer <span> Envato </span>',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem'
    },
    {
        id : 6,
        category : 'education',
        icon : <FaBriefcase></FaBriefcase>,
        year : '2018 - Present',
        title : 'Web Developer <span> Envato </span>',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta deleniti exercitationem'
    }
]

export const portfolio = [
    {
        id : 1,
        img : work1,
        title : 'MyShop',
        details : [
            {
                icon : <FiFileText></FiFileText>,
                title : 'Project',
                desc : 'Photo'
            },
            {
                icon : <FiUser></FiUser>,
                title : 'Client',
                desc : 'Dribble'
            },
            {
                icon : <FiCode></FiCode>,
                title : 'Languaget',
                desc : 'Adobe'
            },
            {
                icon : <FiFileText></FiFileText>,
                title : 'Language',
                desc : 'photo'
            }
        ]
    },
    {
        id : 2,
        img : work2,
        title : 'Donation',
        details : [
            {
                icon : <FiFileText></FiFileText>,
                title : 'Project',
                desc : 'Photo'
            },
            {
                icon : <FiUser></FiUser>,
                title : 'Client',
                desc : 'Dribble'
            },
            {
                icon : <FiCode></FiCode>,
                title : 'Languaget',
                desc : 'Adobe'
            },
            {
                icon : <FiFileText></FiFileText>,
                title : 'Language',
                desc : 'photo'
            }
        ]
    },
    {
        id : 3,
        img : work3,
        title : 'Training Program',
        details : [
            {
                icon : <FiFileText></FiFileText>,
                title : 'Project',
                desc : 'Photo'
            },
            {
                icon : <FiUser></FiUser>,
                title : 'Client',
                desc : 'Dribble'
            },
            {
                icon : <FiCode></FiCode>,
                title : 'Languaget',
                desc : 'Adobe'
            },
            {
                icon : <FiFileText></FiFileText>,
                title : 'Language',
                desc : 'photo'
            }
        ]
    },
    {
        id : 4,
        img : work1,
        title : 'MyShop',
        details : [
            {
                icon : <FiFileText></FiFileText>,
                title : 'Project',
                desc : 'Photo'
            },
            {
                icon : <FiUser></FiUser>,
                title : 'Client',
                desc : 'Dribble'
            },
            {
                icon : <FiCode></FiCode>,
                title : 'Languaget',
                desc : 'Adobe'
            },
            {
                icon : <FiFileText></FiFileText>,
                title : 'Language',
                desc : 'photo'
            }
        ]
    }
]

export const themes = [
    {
        id : 1,
        img : orangeColor,
        color : 'orange'
    },
    {
        id : 2,
        img : greenColor,
        color : 'green'
    },
    {
        id : 3,
        img : roseColor,
        color : 'violet'
    },
    {
        id : 4,
        img : purpleColor,
        color : 'purple'
    },
    {
        id : 5,
        img : redColor,
        color : 'red'
    },
    {
        id : 6,
        img : blueColor,
        color : 'blue'
    }
    
]