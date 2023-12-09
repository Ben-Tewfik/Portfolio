import Image from "next/image";
import {
  css,
  daisyui,
  firebase,
  framer,
  git,
  github,
  html,
  javascript,
  jest,
  mui,
  nextjs,
  react,
  tailwind,
} from "../../../public/assets";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-contentContainer mx-auto px-5 py-10 lgl:py-32 flex flex-col gap-4 md:gap-8 lg:gap-14"
    >
      <h1 className="font-titleFont text-3xl text-center text-white font-semibold">
        Skills
      </h1>
      <ul className="w-full  md:max-w-[60%] mx-auto flex flex-wrap justify-center gap-16">
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 }}
          className="w-16 h-auto"
        >
          <Image src={html} alt="html" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 2 }}
          className="w-16 h-auto"
        >
          <Image src={css} alt="css" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 3 }}
          className="w-16 h-auto"
        >
          <Image src={javascript} alt="javascript" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 4 }}
          className="w-16 h-auto"
        >
          <Image src={react} alt="react" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 5 }}
          className="w-16 h-auto"
        >
          <Image src={nextjs} alt="nextjs" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 6 }}
          className="w-16 h-auto"
        >
          <Image src={tailwind} alt="tailwind" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 7 }}
          className="w-16 h-auto"
        >
          <Image src={firebase} alt="firebase" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 8 }}
          className="w-16 h-auto"
        >
          <Image src={git} alt="git" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 9 }}
          className="w-16 h-auto"
        >
          <FaGithub className="text-6xl" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 10 }}
          className="w-16 h-auto"
        >
          <Image src={daisyui} alt="daisyui" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 11 }}
          className="w-16 h-auto"
        >
          <Image src={mui} alt="material ui" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 12 }}
          className="w-16 h-auto"
        >
          <Image src={framer} alt="framer motion" />
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.05 * 13 }}
          className="w-16 h-auto"
        >
          <Image src={jest} alt="jest" />
        </motion.li>
      </ul>
    </section>
  );
}
