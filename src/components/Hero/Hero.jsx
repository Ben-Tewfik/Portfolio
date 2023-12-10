import { motion } from "framer-motion";

import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 scroll-mt-28 flex flex-col gap-4 lgl:gap-8 px-5 mdl:px-10 xl:px-4"
      id="home"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-textLight tracking-wide"
      >
        Code with Passion, Design with Purpose: Welcome to My Portfolio.
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-DarkColor text-4xl lgl:text-6xl font-titleFont font-semibold tracking-wide "
      >
        Hi, I&#39;m{" "}
        <span className="text-[#deb992] font-bold">Benarba Tewfik</span>
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-DarkColor text-4xl lgl:text-6xl font-titleFont font-semibold tracking-wide mt-1 "
      >
        A Front-End Web Developer
      </motion.h2>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-base md:max-w-[730px]  text-textLight "
      >
        I have a passion for front-end development creating visually appealing
        and user-friendly web interfaces. Let&#39;s collaborate to bring your
        digital projects to life.
      </motion.p>
      <div className="flex flex-col sml:flex-row gap-4">
        <Link href="#contact">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-52 h-14 font-titleFont border border-textBeige rounded-md text-textBeige tracking-wide hover:bg-hoverColor duration-300"
          >
            Hire Me
          </motion.button>
        </Link>
        <Link href="#projects">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-52 h-14 font-titleFont border border-textBeige rounded-md text-textBeige tracking-wide hover:bg-hoverColor duration-300"
          >
            Explore Projects
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
