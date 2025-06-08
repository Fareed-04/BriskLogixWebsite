import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import mav from '../assets/mav.svg';
import artisan from '../assets/artisan.svg';
import coverx from '../assets/coverx.svg';
import fairtex from '../assets/fairtex.svg';
import next from '../assets/collaboration/next.png';
import node from '../assets/collaboration/node.png';
import react from '../assets/collaboration/react.png';
import python from '../assets/collaboration/python.png';
import mongodb from '../assets/collaboration/mongodb.png';
import flutter from '../assets/collaboration/flutter.png';
import swift from '../assets/collaboration/swift.png';
import lawin from '../assets/lawin.jpg';
import axlefleets from '../assets/axlefleets.png';
import maverick from '../assets/maverick.png';
import eduease from '../assets/eduease.png'

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#Services",
    dropdown: [
      {
        id: "0-0",
        title: "Staff Augmentation",
        url: "/staff-augmentation"
      },
      {
        id: "0-1",
        title: "Web & App Development",
        url: "#Services"
      },
      {
        id: "0-2",
        title: "AI Integration",
        url: "#Services"
      },
      {
        id: "0-3",
        title: "Microsoft ERP Implementation",
        url: "#Services"
      },
      {
        id: "0-4",
        title: "Project Management",
        url: "#Services"
      }
    ]
  },
  {
    id: "1",
    title: "About Us",
    url: "#Collaboration",
  },
  {
    id: "2",
    title: "Offerings",
    url: "#Product",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "#Portfolio",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, fairtex, mav,artisan, coverx];
console.log(companyLogos);

export const brainwaveServices = [
  "Data Insights and Recommendations",
  "ChatBots and virtual assistants",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const Portfolio = [
  {
    id: "0",
    title: "LawInn",
    text: "A freelance platform for lawyers with an AI Law assistant chatbot.",
    date: "Dec 2024",
    status: "In Progress",
    imageUrl: lawin,
    colorful: true,
  },
  {
    id: "1",
    title: "Axle Fleets",
    text: "A logistics and dispatching web app where all bookings are scheduled seamlessly.",
    date: "June 2024",
    status: "Completed",
    imageUrl: axlefleets ,
  },
  {
    id: "2",
    title: "Maverick Real Estate",
    text: "Allows customers to browse properties and find the best fit for themselves.",
    date: "March 2024",
    status: "Completed",
    imageUrl: maverick,
  },
  {
    id: "3",
    title: "Edu Ease",
    text: "Fully automated AI-powered education system.",
    date: "Nov 2024",
    status: "In Progress",
    imageUrl: eduease,
    colorful:true,
  },
];

export const collabText =
  "We utilize cutting-edge AI advancements to provide top-quality technology solutions, delivered promptly and within budget.";

export const collabContent = [
  {
    id: "0",
    title: "Software Outsourcing",
    text: "Rely on us to manage your entire software development lifecycle, delivering end-to-end solutions efficiently and effectively.",
  },
  {
    id: "1",
    title: "Modern Technologies",
  },
  {
    id: "2",
    title: "Top-notch Services",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "python",
    icon: python,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "next",
    icon: next,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "node",
    icon: node,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "flutter",
    icon: flutter,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "swift",
    icon: swift,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "react",
    icon: react,
    width: 38,
    height: 32,
  },
];

export const Product = [
  {
    id: "0",
    title: "Staff Augmentation",
    description: "Scale your team with elite talent on demand. Access specialized skills and expertise when you need them.",
    backgroundUrl: "/src/assets/background-1.jpg",
    features: [
      "Flexible engagement models",
      "Quick onboarding process",
      "Dedicated team members",
      "Cost-effective solution",
      "Seamless integration"
    ]
  },
  {
    id: "1",
    title: "Web & App Development",
    description: "Build powerful, scalable web and mobile applications that drive business growth.",
    backgroundUrl: "/src/assets/background-2.jpg",
    features: [
      "Custom web development",
      "Mobile app development",
      "Progressive web apps",
      "E-commerce solutions",
      "API development"
    ]
  },
  {
    id: "2",
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to automate processes and gain valuable insights.",
    backgroundUrl: "/src/assets/background-3.jpg",
    features: [
      "Machine learning solutions",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "AI-powered automation"
    ]
  }
];

export const benefits = [
  
  {
    id: "0",
    title: "Staff Augmentation",
    text: "Gain instant access to skilled professionals with our premier staff augmentation services, ensuring your team scales effortlessly to meet business demands.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Generative AI Solutions",
    text: "Revolutionize operations with AI-powered chatbots, process automation, and advanced computer vision for proactive hazard detection and enhanced security.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Microsoft Dynamics ERP Solutions",
    text: "Unlock your business potential with MS Dynamics ERP solutions, delivering seamless integration, smarter workflows, and data-driven decision-making.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Web Application Development",
    text: "Build cutting-edge web applications that drive engagement, streamline operations, and deliver exceptional user experiences tailored to your needs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Mobile Application Development",
    text: "Transform ideas into intuitive and robust mobile applications designed to elevate your brand and connect you with users globally.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },

  {
    id: "5",
    title: "Shopify and WordPress Development",
    text: "Launch and optimize your online store with seamless Shopify and e-commerce development services designed for conversion and scalability.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
