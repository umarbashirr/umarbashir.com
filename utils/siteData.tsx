import {
  MdDashboard,
  MdOutlineHeadsetMic,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgFileDocument, CgToolbox } from "react-icons/cg";
import { BiCustomize, BiEnvelope } from "react-icons/bi";

import {
  FaCog,
  FaDesktop,
  FaLaptopCode,
  FaMobile,
  FaShoppingCart,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa";
import { Portfolios } from "../interfaces/portfolio";

export const NAV_MENU = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "services",
    path: "/services",
  },
  {
    label: "portfolio",
    path: "/portfolio",
  },

  {
    label: "blog",
    path: "/blogs",
  },
  {
    label: "contact",
    path: "/contact",
  },
];

export const FooterMenu = [
  {
    label: "privacy policy",
    path: "/privacy-policy",
  },
  {
    label: "terms and conditions",
    path: "/terms-and-conditions",
  },
];

export const SIDEBAR_ADMIN_MENU = [
  {
    icon: <MdDashboard />,
    label: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <CgFileDocument />,
    label: "All Categories",
    path: "/admin/categories",
  },
  {
    icon: <MdOutlinePostAdd />,
    label: "Add Category",
    path: "/admin/categories/new",
  },
  {
    icon: <CgFileDocument />,
    label: "All Posts",
    path: "/admin/posts",
  },
  {
    icon: <MdOutlinePostAdd />,
    label: "Add Post",
    path: "/admin/posts/new",
  },
];

export const WHY_CHOOSE_US = {
  title: "Why Me?",
  cardsArr: [
    {
      icon: (
        <CgToolbox className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Expertise",
      desc: "I have years of experience in web development and design, and I am committed to delivering high-quality work.",
    },
    {
      icon: (
        <BiCustomize className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Customization",
      desc: "I provide custom web development and design services tailored to your specific needs and requirements.",
    },
    {
      icon: (
        <MdOutlineHeadsetMic className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Customer Support",
      desc: "I am dedicated to providing excellent customer support and ensuring that you are satisfied with the final product.",
    },
  ],
};

// Let rewrite the below data as my portfolio services

export const OurServices = {
  title: "What I Do?",
  cardsArr: [
    {
      icon: (
        <FaDesktop className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "UI/UX Design",
      desc: "I provide professional UI/UX design services that focus on creating custom designs, e-commerce solutions, and responsive web design.",
    },
    {
      icon: (
        <FaLaptopCode className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Website Development",
      desc: "I offer professional website development services that cater to your needs for a robust online presence.",
    },
    {
      icon: (
        <FaWordpress className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "WordPress Development",
      desc: "I specialize in WordPress development services that are tailored to your specific business needs.",
    },
    {
      icon: (
        <FaShoppingCart className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "E-Commerce Development",
      desc: "I provide e-commerce development services that focus on creating custom e-commerce solutions for your business.",
    },
    {
      icon: (
        <FaMobile className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "PWA Development",
      desc: "I offer professional PWA development which is a web application that uses modern web capabilities to deliver an app-like experience to users.",
    },
    {
      icon: (
        <FaCog className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Custom CMS Development",
      desc: "I provide custom CMS development services that cater to your specific business needs.",
    },
  ],
};

export const CONTACT_CARD = [
  {
    icon: (
      <MdOutlineHeadsetMic className="h-10 w-10 text-secondary-color group-hover:text-white" />
    ),
    title: "Contact With Phone Number",
    options: [
      {
        path: "tel:+917889737464",
        label: "+91 7889737464",
      },
    ],
  },
  {
    icon: (
      <BiEnvelope className="h-10 w-10 text-secondary-color group-hover:text-white" />
    ),
    title: "Contact With Email",
    options: [
      {
        path: "mailto:contact@umarbashir.com",
        label: "contact@umarbashir.com",
      },
    ],
  },
  {
    icon: (
      <FaWhatsapp className="h-10 w-10 text-secondary-color group-hover:text-white" />
    ),
    title: "Contact With WhatsApp",
    options: [
      {
        path: "https://wa.link/nv91dx",
        label: "+91 7889737464",
      },
    ],
  },
];

export const OUR_PORTFOLIO: Portfolios = {
  title: "My Portfolio",
  porfolios: [
    {
      title: "Profit and Co.",
      url: "https://profit-and-co.vercel.app",
      image: "/images/portfolio/profit-and-co.png",
    },
    {
      title: "Private Fleet Services",
      url: "https://privatefleetservices.com",
      image: "/images/portfolio/pfs.png",
    },
    {
      title: "FinsolutionsLLC",
      url: "https://finsolutionsllc.com",
      image: "/images/portfolio/finsolutions.png",
    },
    {
      title: "KTANCO",
      url: "https://ktanco.com",
      image: "/images/portfolio/ktanco.png",
    },
    {
      title: "Private Fleet Services",
      url: "https://privatefleetservices.com",
      image: "/images/portfolio/pfs.png",
    },
    {
      title: "ZamSports",
      url: "https://zamsports.com",
      image: "/images/portfolio/zam_sports.png",
    },
    {
      title: "ZamAjeev Properties",
      url: "https://zamaajevproperties.com",
      image: "/images/portfolio/zam_ajeev.png",
    },
    {
      title: "Flexible Banglore Airport Taxi",
      url: "https://flexiblebangaloreairporttaxi.vercel.app",
      image: "/images/portfolio/fbat.png",
    },
  ],
};
