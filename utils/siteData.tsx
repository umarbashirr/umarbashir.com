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
    path: "/about-us",
  },
  {
    label: "services",
    path: "/our-services",
  },
  {
    label: "portfolio",
    path: "/our-portfolio",
  },

  {
    label: "blog",
    path: "/blogs",
  },
  {
    label: "contact",
    path: "/contact-us",
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
  title: "Why Cool Tech Design?",
  cardsArr: [
    {
      icon: (
        <CgToolbox className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Expertise",
      desc: "We have a team of highly skilled and experienced developers who are proficient in using the latest technologies.",
    },
    {
      icon: (
        <BiCustomize className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Customization",
      desc: "We offer personalized service and tailor our solutions to meet the unique needs of each client. ",
    },
    {
      icon: (
        <MdOutlineHeadsetMic className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Customer Support",
      desc: "We provide ongoing support and maintenance to ensure that your website runs smoothly and stays up-to-date. ",
    },
  ],
};

export const OurServices = {
  title: "Our Services",
  cardsArr: [
    {
      icon: (
        <FaDesktop className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "UI/UX Design",
      desc: "We specialize in creating exceptional UI/UX designs that elevate user engagement and provide flawless digital experiences.",
    },
    {
      icon: (
        <FaLaptopCode className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Website Development",
      desc: "We provide professional website development services that focus on creating custom designs, e-commerce solutions, and responsive web design.",
    },
    {
      icon: (
        <FaWordpress className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "WordPress Development",
      desc: "We offer comprehensive WordPress development services that cater to your needs for a robust online presence. ",
    },
    {
      icon: (
        <FaShoppingCart className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "E-Commerce Development",
      desc: "Simplify your online brand expansion with our professional E-commerce development services.",
    },
    {
      icon: (
        <FaMobile className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "App Development",
      desc: "Transform your ideas into impactful mobile apps with our professional app development services. We create innovative solutions for iOS and Android platforms.",
    },
    {
      icon: (
        <FaCog className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Custom CMS Development",
      desc: "Enhance your content management efficiency with our personalized CMS solutions designed specifically for your business requirements. Simplify, structure, and succeed.",
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
        path: "tel:00917889737464",
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
        path: "mailto:info.cooltechdesign@gmail.com",
        label: "info.cooltechdesign@gmail.com",
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
  title: "Our Portfolio",
  porfolios: [
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
