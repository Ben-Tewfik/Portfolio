import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div>
          <Image
            src="/images/logo-white.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex text-[13px] gap-7">
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                Home
              </motion.li>
            </Link>
            <Link href="#home">
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                About
              </li>
            </Link>
            <Link href="#home">
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                Skills
              </li>
            </Link>
            <Link href="#home">
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                Projects
              </li>
            </Link>
            <Link href="#home">
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                Contact
              </li>
            </Link>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
