import Hero from "@/components/Hero/Hero";
import LeftSide from "@/components/LeftSide/LeftSide";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Benarba Tewfik</title>
        <meta name="description" content="Benarba Mohammed Tewfik Portofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-darkColor text-white overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] items-center flex gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full"
          >
            <LeftSide />
          </motion.div>
          <div>
            <Hero />
          </div>
        </div>
        <h1>hellow</h1>
      </main>
    </>
  );
}
