import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-[#081521] py-10 flex flex-col gap-6 justify-center items-center">
      <div className="flex gap-4">
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
        <Link href="mailto:benarbatewfik@gmail.com">
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
      <p>
        © 2023 Handcrafted by{" "}
        <span className="text-textBeige">Benarba Tewfik</span>
      </p>
    </footer>
  );
}
