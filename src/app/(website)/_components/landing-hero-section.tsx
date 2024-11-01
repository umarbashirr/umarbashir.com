import Image from "next/image";
import Link from "next/link";
import React from "react";
import {SocialLinks} from "@/app/(website)/_components/social-links";

const LandingHeroSection = () => {
    return (
        <div className="relative w-full h-full pt-20 lg:py-0 lg:h-[calc(100vh-100px)]">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl text-gray-200 font-bold">
                        Hi, I&#39;m Umar Bashir &ndash; Full Stack Developer
                    </h1>
                    <p className="text-gray-50 leading-normal mt-6 lg:text-lg">
                        Based in Jammu and Kashmir, India with 3 years of experience in
                        JavaScript, building practical solutions for web and software.
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                        <Link href='/my-work'
                              className="bg-indigo-600 text-white py-3 px-6 rounded shadow font-medium text-sm hover:bg-indigo-700 transition duration-300 ease-in-out">
                            My Work
                        </Link>
                        <Link href='/' download className="bg-gray-300 py-3 px-6 rounded shadow font-medium text-sm">
                            Download Resume
                        </Link>
                    </div>
                    <SocialLinks/>
                </div>
                <div className="flex items-center justify-end">
                    <div
                        className="relative w-full md:w-[400px] h-[450px] rounded-xl border overflow-hidden border-gray-800">
                        <Image
                            src="/profile_image.jpg"
                            alt="Umar Bashir Image"
                            fill
                            className="object-cover object-center ml-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHeroSection;
