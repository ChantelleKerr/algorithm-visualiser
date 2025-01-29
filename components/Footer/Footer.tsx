import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-blue flex justify-between items-center text-xl py-2 px-6">
      <p>♥ Developed by Chantelle ♥</p>
      <Link
        href="https://github.com/ChantelleKerr/algorithm-visualiser"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github-mark.png"
          alt="GitHub Repository"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </Link>
    </footer>
  );
};

export default Footer;
