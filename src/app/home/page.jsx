"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Anime from '../../../public/Anime1.json'

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="flex-1 lg:h-full lg:w-1/2 relative">
          {/* <Image src="/hero.png" alt="" fill className="object-contain" /> */}

          <Lottie
            animationData={Anime}
            fill
            className="flex justify-center items-center object-contain"
            loop={true}
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex-1 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="md:text-3xl font-bold">
          Crafting the Future: Where Code Wizardry Meets Design Mastery
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
         Experience the future with seamless integration of code wizardry and design mastery, creating innovative solutions that redefine industry standards.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <a href='/about'>

            <button  className="p-4 rounded-lg ring-1 ring-black">
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
