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
import eduease from '../assets/eduease.png';
import panoraProperties from '../assets/images/Panora properties.png';
import panoraVirtualTours from '../assets/images/PANORA Virtual Tours.png';

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#Services",
    dropdown: [
      {
        id: "0-0",
        title: "Staff Augmentation",
        url: "/staff-augmentation",
        description: "Qualified IT professionals on demand who integrate seamlessly into your team"
      },
      {
        id: "0-1",
        title: "Custom Software Solutions",
        url: "/custom-software-solutions",
        description: "Tailor-made applications for web, mobile, enterprise, and SaaS solutions"
      },
      {
        id: "0-2",
        title: "General AI Solutions & Automations",
        url: "#Services",
        description: "AI-powered chatbots, process automation, and computer vision solutions"
      },
      {
        id: "0-3",
        title: "E-commerce Solutions",
        url: "/e-commerce-solutions",
        description: "Complete e-commerce ecosystem with Shopify optimization and custom development"
      },
      {
        id: "0-4",
        title: "Microsoft Dynamics ERP",
        url: "#Services",
        description: "Seamless integration, smarter workflows, and data-driven decision-making"
      },
      {
        id: "0-5",
        title: "Digital Marketing",
        url: "/digital-marketing",
        description: "SEO, LLMEO strategies, social media management, and performance analytics"
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
    title: "Reviews",
    url: "#Reviews",
  },
  {
    id: "3",
    title: "Why Choose Us",
    url: "#whychooseus",
  },
  {
    id: "4",
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
    date: "March 2025",
    status: "In Progress",
    imageUrl: lawin,
    colorful: true,
    techStack: [
      { name: "React", icon: react },
      { name: "Node.js", icon: node },
      { name: "MongoDB", icon: mongodb },
      { name: "Python", icon: python }
    ]
  },
  {
    id: "1",
    title: "Axle Fleets",
    text: "A logistics and dispatching web app where all bookings are scheduled seamlessly.",
    date: "June 2024",
    status: "Completed",
    imageUrl: axlefleets,
    techStack: [
      { name: "React", icon: react },
      { name: "Node.js", icon: node },
      { name: "MongoDB", icon: mongodb }
    ]
  },
  {
    id: "2",
    title: "Panora Properties",
    text: "AI-powered price and property advisor and buy-sell platform with virtual tours.",
    date: "March 2024",
    status: "In Progress",
    imageUrl: panoraProperties,
    techStack: [
      { name: "React", icon: react },
      { name: "Node.js", icon: node },
      { name: "Python", icon: python },
      { name: "MongoDB", icon: mongodb }
    ]
  },
  {
    id: "3",
    title: "Panora Virtual Tours",
    text: "Premium and pioneer of interactive Virtual Tours in Pakistan.",
    date: "January 2025",
    status: "Completed",
    imageUrl: panoraVirtualTours,
    colorful: true,
    techStack: [
      { name: "React", icon: react },
      { name: "Node.js", icon: node },
      { name: "MongoDB", icon: mongodb }
    ]
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
    text: "Short-term project? Skill gap? We provide qualified IT professionals on demand—developers, engineers, and more—who integrate seamlessly into your team, so you only pay for what you need, when you need it.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Custom Software Solutions",
    text: "We build tailor-made applications that fit your unique needs—whether it's web, mobile, enterprise, legacy system modernization, SaaS, or ongoing maintenance. Every feature is designed around your business goals.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "General AI Solutions & Automations",
    text: "Revolutionize operations with AI-powered chatbots, process automation, and advanced computer vision for proactive hazard detection and enhanced security.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "E-commerce Solutions",
    text: "Complete e-commerce ecosystem including Shopify store setup & optimization, custom development, payment processing, inventory management, and comprehensive supply chain solutions to maximize your online sales potential.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Microsoft Dynamics ERP",
    text: "Unlock your business potential with MS Dynamics ERP solutions, delivering seamless integration, smarter workflows, and data-driven decision-making.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "Comprehensive digital presence enhancement including advanced SEO, innovative LLMEO strategies, social media management, targeted advertising, content marketing, and performance analytics to dominate your market.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
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
