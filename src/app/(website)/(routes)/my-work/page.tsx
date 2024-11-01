import Link from "next/link";
import {clientWork} from "@/utils/home-content";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'My Work - Umar Bashir',
    description: 'A collection of projects by Umar Bashir, showcasing web development and other work.',
    authors: [{ name: 'Umar Bashir' }],
    keywords: [
        'Portfolio',
        'Web Development',
        'Projects by Umar Bashir',
        'JavaScript',
        'React',
        'Node.js',
        'Jammu and Kashmir'
    ],
    openGraph: {
        title: 'My Work - Umar Bashir',
        description: 'Projects by Umar Bashir, including various development work.',
        type: 'website',
        locale: 'en_US',
        url: 'https://www.umarbashir.com/my-work',
        siteName: 'Umar Bashir Portfolio',
        images: [
            {
                url: 'https://www.umarbashir.com/og-image.jpeg',
                width: 1200,
                height: 630,
                alt: 'My Work - Umar Bashir'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My Work - Umar Bashir',
        description: 'Projects by Umar Bashir, including various development work.',
        images: ['https://www.umarbashir.com/og-image.jpeg']
    },
    alternates: {
        canonical: 'https://www.umarbashir.com/my-work'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
}



const MyWorkPage = () => {
    return (
        <div className="py-12 md:py-28">
            <div className="mb-10">
                <h1 className="text-5xl text-center font-bold text-gray-300">
                    My Work
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clientWork.map((work, index) => {
                    return (
                        <div
                            key={index}
                            className="border border-gray-800 p-2 rounded-md"
                        >
                            <div className="relative w-full h-[250px] md:h-[300px] rounded-md overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title + "landing page image"}
                                    fill
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between gap-4 w-full  mt-4 mb-2">
                                    <Link
                                        href={work.url}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        <h3 className="font-medium text-gray-100 text-xl flex-1 hover:underline transition duration-300 ease-in-out">
                                            {work.title}{" "}
                                            <ExternalLink className="w-4 h-4 ml-2 inline-flex mb-1"/>
                                        </h3>
                                    </Link>
                                    <div
                                        className="text-xs font-medium bg-gray-300 text-gray-900 rounded-full py-px px-2 capitalize shrink-0">
                                        {work.type}
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm font-thin leading-relaxed">
                                    {work.short_desc}
                                </p>
                                <div className="flex items-center justify-start gap-2 flex-wrap  mt-4 mb-2">
                                    {work.stack.map((stackName, index) => {
                                        return (
                                            <div
                                                className="border border-gray-400 rounded text-gray-300 capitalize py-px px-1 text-sm"
                                                key={index}
                                            >
                                                {stackName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default MyWorkPage;