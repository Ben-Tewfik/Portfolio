import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { whiteLogo } from "../../../public/assets";
import { useRef, useState } from "react";

export default function Navbar() {
  const ref = useRef("");
  const [showMenu, setShowMenu] = useState(false);
  function handleScroll(e) {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // upadte the class name of the clicked links
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }
  return (
    <div className="w-full dark:shadow-navbarShadow shadow-lg h-20 lg:h-[12vh] sticky top-0 z-50 bg-darkColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div>
          <Image src={whiteLogo} alt="logo" className={`w-14 h-auto`} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden mdl:inline-flex items-center gap-7"
        >
          <ul className="flex gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="text-white font-bold hover:text-[#deb992] cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="text-white hover:text-[#deb992] font-bold cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#skills"
              onClick={handleScroll}
              className="text-white hover:text-[#deb992] font-bold cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Skills
              </motion.li>
            </Link>
            <Link
              href="#projects"
              onClick={handleScroll}
              className=" text-white hover:text-[#deb992] font-bold cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className=" text-white hover:text-[#deb992] font-bold cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
        </motion.div>
        {/* icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center text-4xl text-white cursor-pointer overflow-hidden mdl:hidden group">
          <span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
}
