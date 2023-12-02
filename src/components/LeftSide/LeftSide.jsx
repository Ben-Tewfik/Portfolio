import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <Link href="https://github.com/Ben-Tewfik" target="_blank">
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#deb992] cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohammed-tewfik-benarba/"
          target="_blank"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#deb992] cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinIn />
          </span>
        </Link>
        <Link href="#contact">
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#deb992] cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <MdOutlineMail />
          </span>
        </Link>
        <Link href="/assets/tewfik_cv.pdf" target="_blank">
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#deb992] cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <RiContactsFill />
          </span>
        </Link>
      </div>
    </div>
  );
}
