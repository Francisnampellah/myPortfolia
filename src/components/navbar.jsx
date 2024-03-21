"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

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
        staggerChildren: 0.3,
      }
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
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex-row ">
      {/* //Link// */}
      <div className="hidden md:flex gap-4 w-1/3 text-xl ">
        {links.map((link) => (
          <NavLink link={link} href={link.url} key={link.title}>
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* //Logo// */}
      <div className="md:hidden lg:flex w-1/3 justify-center">łøgo</div>

      {/* //Socials// */}
      <div className="hidden md:flex gap-4 flex-row w-1/3 ">
        <Link href="www.github.com">
          <Image src={"/github.png"} width={24} height={24} />
        </Link>
        <Link href="www.github.com">
          <Image src={"/github.png"} width={24} height={24} />
        </Link>
        <Link href="www.github.com">
          <Image src={"/github.png"} width={24} height={24} />
        </Link>
        <Link href="www.github.com">
          <Image src={"/github.png"} width={24} height={24} />
        </Link>
      </div>

      {/* menu */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} onClick={()=>setOpen(!open)}>
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
