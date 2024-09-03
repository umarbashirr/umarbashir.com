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
  FaLifeRing,
  FaMobile,
  FaMobileAlt,
  FaPenNib,
  FaSearch,
  FaShoppingCart,
  FaTachometerAlt,
  FaTools,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa";
import { Portfolios } from "../interfaces/portfolio";
import { FaPaintbrush } from "react-icons/fa6";

export const SITE_DETAILS = {
  name: "Umar Bashir Rather",
  email: "mail.umarbashir@gmail.com",
  phone: "+917889737464",
  address: "Pahalgam, District Anantnag, Jammu and Kashmir - 192401",
};

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
      title: "Customized websites",
      desc: "Customized websites that reflect your brand identity ensure a unique and personalized online presence.",
      icon: (
        <FaPaintbrush className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
    },
    {
      title: "Responsive Design",
      desc: "Websites optimized for all devices enhance the user experience on desktop, tablet and smartphone.",
      icon: (
        <FaMobileAlt className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
    },
    {
      title: "SEO Optimization",
      desc: "On-page SEO techniques to improve your search engine visibility and drive organic traffic.",
      icon: (
        <FaSearch className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
    },
    {
      title: "E-commerce Solutions",
      desc: "Secure and efficient online store setup, providing a seamless shopping experience to your customers.",
      icon: (
        <FaShoppingCart className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
    },
    {
      title: "Performance & Speed",
      desc: "Fast loading websites designed to keep users engaged and reduce bounce rates.",
      icon: (
        <FaTachometerAlt className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
    },
    {
      title: "Ongoing Support",
      desc: "Reliable maintenance and support services after launch to ensure your website remains up to date.",
      icon: (
        <FaLifeRing className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
    },
  ],
};

// Let rewrite the below data as my portfolio services

export const OurServices = {
  title: "My Services",
  subtitle: "Services I Offer",
  cardsArr: [
    {
      icon: (
        <FaPenNib className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Logo and Branding",
      desc: "I create distinctive logos and branding materials that establish a strong visual identity for your business.",
    },
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
        <FaMobileAlt className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Mobile App Development",
      desc: "I develop mobile applications that provide a seamless experience across various devices and platforms.",
    },
    {
      icon: (
        <FaSearch className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "SEO",
      desc: "I offer SEO services to improve your website's visibility and ranking on search engines, driving more organic traffic.",
    },
    {
      icon: (
        <FaTools className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "Website Maintenance",
      desc: "I provide ongoing website maintenance services to ensure your site remains updated, secure, and functional.",
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
        <FaCog className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "CMS Development",
      desc: "I offer custom CMS development services that cater to your specific business needs, providing easy content management.",
    },
    {
      icon: (
        <FaWordpress className="h-14 w-14 text-secondary-color group-hover:text-white" />
      ),
      title: "WordPress Development",
      desc: "I specialize in WordPress development services that are tailored to your specific business needs.",
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
        path: "mailto:mail.umarbashir@gmail.com",
        label: "mail.umarbashir@gmail.com",
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
      title: "Hotel Three Queens",
      short_desc:
        "Developed a fully responsive website for Hotel Three Queens in Pahalgam, Kashmir, featuring a user-friendly interface, detailed room descriptions, and a visually appealing gallery, designed to enhance the booking experience and showcase the hotel's luxury offerings.",
      url: "https://hotelthreequeens.com",
      image: "/images/portfolio/hotel_three_queens.jpeg",
      category: "Hotel",
    },
    {
      title: "Wanbhar Hotel",
      short_desc:
        "Wanbhar Hotel is located in the heart of Pahalgam, Kashmir. The hotel offers a range of amenities and services to make your stay comfortable and memorable.",
      url: "https://www.wanbharhotel.com",
      image: "/images/portfolio/wanbhar.jpeg",
      category: "Hotel",
    },
    {
      title: "Mamal Homestay",
      short_desc:
        "Mamal Homestay is a beautiful homestay located in the heart of Pahalgam, Kashmir. The homestay offers 03 rooms with shared kitchen and bathroom facilities.",
      url: "https://www.mamalhomestay.com",
      image: "/images/portfolio/mamalhomestay.jpeg",
      category: "Homestay",
    },
    {
      title: "Inn of Dreams",
      short_desc:
        "Inn of Dreams is located in the heart of Pahalgam, Kashmir. The hotel offers a beautiful view of the Lidder River and the surrounding mountains.",
      url: "https://www.innofdreams.com",
      image: "/images/portfolio/innofdreams.jpeg",
      category: "Hotel",
    },

    {
      title: "Travilio",
      url: "https://travilio.vercel.app",
      image: "/images/portfolio/travilio.jpg",
    },
    {
      title: "Snowpeak Hotel",
      url: "https://snowpeak-hotel.vercel.app",
      image: "/images/portfolio/snowpeak.jpg",
    },
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
