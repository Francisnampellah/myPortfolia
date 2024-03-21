"use client";

const { AnimatePresence } = require("framer-motion");
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div
        key={pathName}
        className="w-screen min-h-full bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

<motion.div
          className="fixed m-auto  top-0 bottom-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          animate={{ opacity:0 }}
          initial={{opacity:1}}
          exit={{ opacity:0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >{pathName}</motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 1 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
