"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Anime from "../../public/therocket.json";

const Homepage = () => {
  return (
    <motion.div
      className="h-full pt-16 "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center">
        <div className="flex-1 lg:h-full lg:w-1/2">
          <Lottie
            animationData={Anime}
            fill
            className="flex justify-center items-center object-contain"
            loop={true}
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex-1 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center bg-gray-400/30 rounded-lg shadow-md backdrop-blur border border-gray-400/30 p-4 flex-end">
          {/* TITLE * */}
          <h1 className="md:text-3xl font-bold">Crafting the Future</h1>
          {/* DESC */}
          <p className="md:text-xl text-justify">
            Experience the future with seamless integration of code wizardry and
            design mastery, creating innovative solutions that redefine industry
            standards.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="/portfolio">
              <button className="p-4 text-white bg-slate-400/100 rounded-lg shadow-md border border-slate-400/100">
                View My Work
              </button>
            </a>
            <a href="/aboutMe">
              <button className="p-4 text-white bg-gray-400/30 rounded-lg shadow-md border border-gray-400/30">
                About Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
