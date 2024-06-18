"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

 function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-white"
      >
        <motion.div
          className="h-screen w-screen fixed bg-slate-800/30 rounded-lg shadow-md backdrop-blur border border-slate-800/30 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {capitalizeFirstLetter(pathName.substring(1))}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-slate-800/30 rounded-lg shadow-md backdrop-blur border border-slate-800/30 rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
          <Navbar />
        <div className="h-full">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
