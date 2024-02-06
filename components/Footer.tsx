import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FooterMenu } from "../utils/siteData";

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-20 pb-10 bg-black">
      <div className="container mx-auto px-5 text-white">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8 md:space-y-0 md:space-x-4">
          <div className="mr-10">
            <div className="flex justify-start items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/Logo.svg"
                  alt="Cool Tech Design Logo"
                  fill
                />{" "}
              </div>
              <p className="text-lg font-bold">Cool Tech Design</p>
            </div>
            <p className="mt-4">
              Cool Tech Design helps businesses to create and execute a
              comprehensive digital strategy to increase visibility and drive
              growth. We work closely with clients to understand their goals and
              tailor their services to meet their specific needs.
            </p>
          </div>
          {/* Second Column */}
          <div>
            <h2 className="capitalize text-2xl">Reach To Us</h2>
            <div className="flex flex-col gap-y-4 mt-4 md:mt-6">
              <Link
                href="mailto:info.cooltechdesign@gmail.com"
                className="flex items-center justify-start space-x-2 hover:text-secondary-color"
              >
                <FaEnvelope /> <span>info.cooltechdesign@gmail.com</span>
              </Link>
              <Link
                href="tel:00917889737464"
                className="flex items-center justify-start space-x-2 hover:text-secondary-color"
              >
                <FaPhone /> <span>+91 7889737464</span>
              </Link>
            </div>
          </div>
          {/* Third Column */}
          <div>
            <h2 className="capitalize text-2xl">Important Links</h2>
            <div className="flex flex-col gap-y-4 mt-4 md:mt-6">
              {FooterMenu.map((link, index: number) => {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex items-center capitalize justify-start space-x-2 hover:text-secondary-color"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Fourth Column */}
          <div>
            <h2 className="capitalize text-2xl">Our Social Media</h2>
            <div className="flex flex-col gap-y-4 mt-4 md:mt-6">
              <Link
                href="https://facebook.com/cooltechdesign"
                target="_blank"
                className="flex items-center justify-start space-x-2"
              >
                <div className="relative h-9 w-9">
                  <Image src="/images/facebook.svg" alt="facebook logo" fill />
                </div>{" "}
                <span>Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/cooltechdesign"
                target="_blank"
                className="flex items-center justify-start space-x-2"
              >
                <div className="relative h-9 w-9">
                  <Image
                    src="/images/instagram.svg"
                    alt="instagram logo"
                    fill
                  />
                </div>{" "}
                <span>Instagram</span>
              </Link>
              <Link
                href="https://twitter.com/cooltechdesign_"
                target="_blank"
                className="flex items-center justify-start space-x-2"
              >
                <div className="relative h-9 w-9">
                  <Image src="/images/twitter.svg" alt="facebook logo" fill />
                </div>{" "}
                <span>Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <p>Copyrighted &copy; 2023 by Cool Tech Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
