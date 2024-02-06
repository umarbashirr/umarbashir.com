import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const menu = [
    {
      path: `https://cooltechdesign.com`,
    },
    {
      path: `https://cooltechdesign.com/about-us`,
    },
    {
      path: `https://cooltechdesign.com/our-services`,
    },
    {
      path: `https://cooltechdesign.com/our-portfolio`,
    },
    {
      path: `https://cooltechdesign.com/blogs`,
    },
    {
      path: `https://cooltechdesign.com/contact-us`,
    },
    {
      path: `https://cooltechdesign.com/privacy-policy`,
    },
    {
      path: `https://cooltechdesign.com/terms-and-conditions`,
    },
  ];

  return menu.map((el) => ({
    url: el.path,
    lastModified: new Date(),
  }));
}
