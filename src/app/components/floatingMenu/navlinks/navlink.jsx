import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../navAnimations/NavAnim";
const Navlink = ({ data, isActive, setSelectedIndicator }) => {
  const { href, title, index } = data;

  return (
    <>
      <motion.div
        className="relative flex items-center"
        onMouseEnter={() => setSelectedIndicator(href)}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className="w-2 h-2 bg-black rounded-full absolute left-[-30px]"
        ></motion.div>
        <Link
          className="hover:scale-105 transition duration-300"
          href="/categories"
        >
          {title}
        </Link>
      </motion.div>
    </>
  );
};

export default Navlink;
