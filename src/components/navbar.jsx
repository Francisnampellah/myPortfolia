"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { useWindowSize } from "./windowSize";

const links = [
  { url: "/", title: "Home" },
  { url: "/aboutMe", title: "AboutMe" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const size = useWindowSize();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-12 md:h-16 fixed w-full self-center z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-slate-800/30 rounded-lg shadow-md backdrop-blur border border-white/30">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm  rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <Image
            src={"/blue.png"}
            width={size.width < 768 ? 30 : 50}
            height={size.width < 768 ? 30 : 50}
          />
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/francisnampellah">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com/bnampellah1">
          <Image src="/Xtwitter.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/francis_nampellah">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/baraka.nampellah">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/baraka-nampellah-b1700b144/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-8 h-6 md:w-10 md:h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 md:w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 md:w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 md:w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 bg-slate-800/80 rounded-lg shadow-md backdrop-blur border border-slate-800/30 "
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                onClick={() => (setOpen(!open), console.log("clicked"))}
              >
                <Link
                  href={link.url}
                  style={{ fontFamily: "Poppins-Bold", fontWeight: "bolder" }}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={listItemVariants}
              key={"social"}
              className=" flex flex-row gap-4 w-1/2"
              onClick={() => (setOpen(!open), console.log("clicked"))}
            >
              <Link href="https://github.com/francisnampellah">
                <Image src="/github.png" alt="" width={40} height={40} />
              </Link>
              <Link href="https://twitter.com/bnampellah1">
                <Image src="/Xtwitter.png" alt="" width={40} height={40} />
              </Link>
              <Link href="https://www.instagram.com/francis_nampellah">
                <Image src="/instagram.png" alt="" width={40} height={40} />
              </Link>
              <Link href="https://www.facebook.com/baraka.nampellah">
                <Image src="/facebook.png" alt="" width={40} height={40} />
              </Link>
              <Link href="https://www.linkedin.com/in/baraka-nampellah-b1700b144/">
                <Image src="/linkedin.png" alt="" width={40} height={40} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
