import Link from "next/link";
import {FacebookIcon, GithubIcon, Instagram, Linkedin} from "lucide-react";
import React from "react";

export const SocialLinks = () => {
    return <div className="mt-8 flex items-center gap-4">
        <Link
            className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
            href="https://github.com/umarbashirr" target='_blank'
        >
            <GithubIcon className="w-6 h-6 text-gray-300 group-hover:text-gray-800 "/>
        </Link>
        <Link
            className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
            href="https://www.facebook.com/umar12393" target='_blank'
        >
            <FacebookIcon className="w-6 h-6 text-gray-300 group-hover:text-gray-800"/>
        </Link>
        <Link
            className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
            href="https://www.instagram.com/umarbashirrr" target='_blank'
        >
            <Instagram className="w-6 h-6 text-gray-300 group-hover:text-gray-800"/>
        </Link>
        <Link
            className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
            href="https://www.linkedin.com/in/umarbashirr" target='_blank'
        >
            <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-gray-800"/>
        </Link>
    </div>
}