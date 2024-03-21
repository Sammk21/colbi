"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { menuSlide } from "../navAnimations/NavAnim";
import { motion } from "framer-motion";
import Navlink from "../navlinks/navlink";

const Nav = () => {
  const navItems = [
    {
      title: "Men's Bottom",

      href: "/",
    },

    {
      title: "Men's Top",

      href: "/categories",
    },

    {
      title: "Jackets",

      href: "/categories/1",
    },

    {
      title: "Oversized tees",

      href: "/categories/2",
    },
  ];

  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <div>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-[100vh] fixed top-0 right-0 bg-white text-black z-[20] shadow-sm"
      >
        <div className=" box-border h-full sm:p-[100px] p-[60px] w-[100vw] sm:w-auto  flex flex-col justify-between">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="flex flex-col text-3xl sm:text-5xl gap-[12px] mt-[80px]"
          >
            <div className="text-sm flex justify-center pb-2 mb-7 border-b-[1px] border-gray-200">
              <p>Navigation</p>
            </div>

            {navItems.map((data, index) => {
              return (
                <Navlink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></Navlink>
              );
            })}
          </div>

          <div className=" flex w-full justify-between text-xs gap-5">
            <a>Contact</a>
            <a>Instagram</a>
            <a>Pinterest</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
