import React from "react";
import { Portfolio } from "../../interfaces/portfolio";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface IProps {
  portfolio: Portfolio;
  imageBig?: boolean;
}

const SinglePortfolio = ({ portfolio, imageBig = false }: IProps) => {
  return (
    <article className="relative group cursor-pointer w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-[250px] group-hover:bg-gradient-to-t group-hover:from-gray-800 group-hover:to-transparent z-10 duration-500 ease-in-out transition-all rounded-xl overflow-hidden"></div>
      <div
        className={`relative w-full ${
          imageBig ? "h-[450px]" : "h-[350px]"
        } min-w-[300px] rounded-xl overflow-hidden`}
      >
        <Image
          src={portfolio?.image}
          alt={portfolio?.title}
          fill
          className="object-cover h-full group-hover:scale-110 group-hover:rotate-6 duration-500 ease-in-out transition-all"
        />
      </div>
      <div className="absolute -bottom-[150px] group-hover:bottom-0 max-h-0 group-hover:max-h-fit left-0 duration-500 ease-in-out transition-all w-full p-6 z-10">
        <div className="px-2 pt-4 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2">
            {portfolio?.title}
          </h3>
          <Link
            href={portfolio?.url}
            className="flex items-center gap-1 text-sm underline underline-offset-4 text-white"
            target="_blank"
          >
            Visit Now <FiExternalLink />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SinglePortfolio;
