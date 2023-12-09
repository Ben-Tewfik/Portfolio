import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { whiteLogo } from "../../../public/assets";
import { useRef, useState } from "react";
import { MdOutlineClose, MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function Navbar() {
  const ref = useRef("");
  const [showMenu, setShowMenu] = useState(false);
  function handleScroll(e) {
    e.preventDefault();
    setShowMenu(false);
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
  function handleClick(e) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
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
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center text-4xl text-white cursor-pointer overflow-hidden mdl:hidden group"
        >
          <span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 group-hover:bg-textBeige transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-0 group-hover:bg-textBeige transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-1 group-hover:translate-x-3 group-hover:bg-textBeige transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={node => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbar-none bg-[#001f33e6] relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textLight cursor-pointer hover:text-textBeige absolute top-8 right-4 transition-all duration-300"
              />
              <div className="flex flex-col items-center gap-7 mt-28">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="text-white font-bold hover:text-[#deb992] cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
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
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
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
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
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
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
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
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                {/* social buttons */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                  className="flex gap-4"
                >
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
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
