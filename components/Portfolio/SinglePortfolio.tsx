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
    <article>
      <div
        className={`relative w-full ${
          imageBig ? "h-[450px]" : "h-[300px]"
        } min-w-[300px] rounded-3xl overflow-hidden drop-shadow-xl`}
      >
        <Image
          src={portfolio?.image}
          alt={portfolio?.title}
          fill
          className="object-cover h-full"
        />
      </div>
      <div className="px-2 pt-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-dark-color">
          {portfolio?.title}
        </h3>
        <Link
          href={portfolio?.url}
          className="flex items-center gap-1 text-indigo-600"
          target="_blank"
        >
          Visit Now <FiExternalLink />
        </Link>
      </div>
    </article>
  );
};

export default SinglePortfolio;
