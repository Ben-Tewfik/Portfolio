import Image from "next/image";
import { neocine, so9ify, studentStore } from "../../../public/assets";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto lgl:px-20 py-24"
    >
      <h2 className="font-titleFont text-3xl text-center text-white font-semibold">
        Projects
      </h2>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href="https://studentsstore.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={studentStore}
                  alt="Student Store Project image"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-end  xl:-ml-16 z-10">
              <h3 className="text-2xl font-bold text-textBeige">
                Student Store
              </h3>
              <p className="bg-[#112240]  p-2 md:p-6 rounded-md">
                Student Store is a marketplace for students to sell, buy, or
                borrow cheap and used products.
              </p>
              <ul className="font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>Daisyui</li>
                <li>Jest</li>
                <li>Figma</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href="https://github.com/202306-NEA-DZ-FEW/StudentStore"
                  target="_blank"
                  className="hover:text-textBeige duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href="https://studentsstore.vercel.app/"
                  target="_blank"
                  className="hover:text-textBeige duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <Link
              href="https://so9ify.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={so9ify}
                  alt="So9ify Store Project image"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-start xl:-mr-16 z-10">
              <h3 className="text-2xl font-bold text-textBeige">So9ify</h3>
              <p className="bg-[#112240]  p-2 md:p-6 rounded-md">
                So9ify is an e-commerce website project showcasing the
                development of a functional online shopping platform with a
                focus on building the frontend.
              </p>
              <ul className="font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>Figma</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-team-8"
                  target="_blank"
                  className="hover:text-textBeige duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href="https://so9ify.vercel.app/"
                  target="_blank"
                  className="hover:text-textBeige duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href="https://master--resonant-otter-299f75.netlify.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={neocine}
                  alt="Neocine Project image"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-end xl:-ml-16 z-10">
              <h3 className="text-2xl font-bold text-textBeige">Neocine</h3>
              <p className="bg-[#112240]  p-2 md:p-6 rounded-md">
                Neocine is a user-friendly website powered by The Movie Database
                (TMDb) API, providing real-time movie and actor information.
                Users can seamlessly explore the latest movies, popular actors,
                and more.
              </p>
              <ul className="font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>Material UI</li>
                <li>Figma</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href="https://github.com/202306-NEA-DZ-FEW/movie-project-neocine"
                  target="_blank"
                  className="hover:text-textBeige duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href="https://master--resonant-otter-299f75.netlify.app/"
                  target="_blank"
                  className="hover:text-textBeige duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
