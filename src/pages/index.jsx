import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Benarba Tewfik</title>
        <meta name="description" content="Benarba Mohammed Tewfik Portofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-[#ecf0f3] dark:bg-bodyDarkColor text-textLight dark:text-whtie overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
