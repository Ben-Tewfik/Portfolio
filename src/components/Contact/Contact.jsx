import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";
import copy from "clipboard-copy";
export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = async () => {
    await copy("benarbatewfik@gmail.com");
    setIsCopied(true);
  };
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-contentContainer mx-auto px-5 py-10 lgl:py-32 flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-titleFont text-xl text-center text-textBeige font-semibold">
        What&#39;s Next?
      </h1>
      <h3 className="font-titleFont text-2xl font-semibold text-center">
        Let&#39;s Build Something Great Together{" "}
      </h3>
      <p className="text-center max-w-[350px] text-textDark mx-auto">
        I am actively seeking new challenges and opportunities. If you&#39;re
        looking for a dedicated team member, let&#39;s connect.
      </p>
      <button
        onClick={handleCopyClick}
        className="w-72 h-14 border border-textBeige mt-6 font-titleFont rounded-md hover:bg-hoverColor transition-all duration-300 flex items-center justify-center gap-8"
      >
        <p>benarbatewfik@gmail.com</p>
        {!isCopied ? (
          <MdContentCopy className="text-xl text-textBeige" />
        ) : (
          <FaCheck className="text-xl text-textBeige" />
        )}
      </button>
    </motion.section>
  );
}
