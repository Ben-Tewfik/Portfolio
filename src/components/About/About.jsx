import Image from "next/image";
import { tewfik } from "../../../public/assets";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto px-5 py-10 lgl:py-32 flex flex-col gap-4 md:gap-8 lg:gap-14"
    >
      <h2 className="font-titleFont text-3xl text-center text-white font-semibold">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
        <div className="w-72 mx-auto lg:w-1/3 h-80 relative group">
          <div className="w-full h-80 absolute lg:-top-6 lg:-left-6">
            <Image
              src={tewfik}
              alt="Tewfik Photo"
              className="rounded-lg h-full object-cover"
            />
          </div>
          <div className="hidden lg:inline-flex w-full h-full border-2 border-textBeige rounded-lg"></div>
        </div>
        <div className="w-full lg:2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello, I&#39;m Benarba Mohammed Tewfik, a passionate Front-End
            Developer living in the vibrant city of Oran, Algeria. I started my
            professional journey as an engineer navigating the complex world of
            machines and systems. However, my boundless curiosity and
            fascination with the dynamics of technology led me to lean towards
            front end development.
          </p>
          <p>
            My transition from technology to web development has been an
            interesting journey, and I have found great joy in simple, visually
            appealing digital experiences. Using my business skills, I tackle
            coding challenges with a positive attitude, ensuring not only
            efficiency but functionality as well.
          </p>
          <p>
            I specialize in converting ideas into user-friendly and functional
            solutions. My tools include HTML, CSS, JavaScript, and modern
            frameworks. I continue to explore new technologies to stay at the
            forefront of the ever-evolving web landscape.
          </p>
          <p>
            Let&#39;s connect and explore the possibilities of creating
            something exceptional together.
          </p>
          <Link href="/assets/tewfik_cv.pdf" target="_blank">
            <button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-52 h-14 font-titleFont border border-textBeige rounded-md text-textBeige tracking-wide hover:bg-hoverColor duration-300"
            >
              Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
