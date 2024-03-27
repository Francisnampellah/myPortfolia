"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Graphics",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    content: "graphiics content",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Mobile App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    content: "Mobile content",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Wesites ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    content: "graphiics content",
  },
];

const tabs_data = {
  tab1: ["/DIT.png", "/DIT.jpg", "/DIT.png", "/DIT.jpg"],
  tab2: ["/works/tab11.jpg", "/works/tab12.jpg", "/works/tab13.jpg"],
  tab3: ["/works/tab21.jpg", "/works/tab22.jpg", "/works/tab23.jpg"],
};

const PortfolioPage = () => {

  return (
    <motion.div
      className="h-full no-scrollbar"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center no-scrollbar">
   
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
