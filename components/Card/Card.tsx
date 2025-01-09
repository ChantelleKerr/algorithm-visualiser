import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  link: string;
  style: string;
}
const Card = ({ title, image, link, style }: Props) => {
  return (
    <>
      <Link href={link}>
        <div className={`border-3 rounded-sm ${style}`}>
          <Image
            src={image}
            width={250}
            height={30}
            className="brightness-90 hover:brightness-100 p-2"
            alt="pathfinder"
          />

          <h1 className="text-4xl flex justify-center text-white font-bold">
            {title}
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Card;
