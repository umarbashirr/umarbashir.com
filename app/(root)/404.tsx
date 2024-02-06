import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <div className=" bg-black h-screen flex flex-col items-center justify-center text-center text-white">
        <p className="text-3xl">Oops! Something went wrong</p>
        <h1 className="hero_gradient_title text-[15vw] font-semibold text-white uppercase py-48 leading-3">
          404
        </h1>
        <Link
          href="/"
          className="bg-white py-4 px-12 rounded-md shadow-md text-lg text-dark-color border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white duration-300 "
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
