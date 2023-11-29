import LeftSide from "@/components/LeftSide/LeftSide";
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
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div>
            <LeftSide />
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
