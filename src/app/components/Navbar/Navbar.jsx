"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Six_Caps } from "next/font/google";
import Link from "next/link";
import { Context } from "../../../stateManagers/context/Context";
import { usePathname } from "next/navigation";
import { FaBagShopping } from "react-icons/fa6";
import localFont from "next/font/local";
import Magnetic from "../MagneticButtons/MagneticButtons";

const logo = { subsets: ["latin"], weight: "400" };
const myFont = localFont({
  src: "../../fonts/Thunder/Thunder-BlackLC.otf",
});

const Navbar = () => {
  const { headerColor, setHeaderColor, staticNavbar, setStaticNavbar } =
    useContext(Context);

  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const route = usePathname();

  const router = usePathname();
  const letters = "almostfamous".split("");

  const { scrollY } = useScroll();

  useEffect(() => {
    if (router !== "/") {
      setStaticNavbar(true);
    } else {
      setStaticNavbar(false);
    }
  }, [router]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest <= 200 ? setHeaderColor("white") : setHeaderColor("black");
    if (latest > 200) {
      if (latest > lastScrollY) {
        setShow("-translate-y-[6rem] sm:-translate-y-[8rem]");
      } else {
        setShow("");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(latest);
  });

  return (
    <>
      <AnimatePresence>
        <motion.nav
          className={`fixed w-[100vw] flex justify-center items-center sm:h-[6rem] h-[4rem] mb-3  z-[10] top-0 ${show} transition-all duration-300`}
        >
          <motion.header
            className={`flex items-center justify-center uppercase align-middle w-[95vw] absolute top-3 h-full rounded-xl transition-all duration-300 ${
              staticNavbar
                ? "bg-white text-black shadow-lg sm:shadow-sm "
                : `text-${headerColor}`
            }`}
          >
            <div
              className={`logo container flex justify-center transition ease-in-out mx-2 items-center relative
     
          `}
            >
              <div className="cart absolute left-1 ">
                <Magnetic>
                  <div>
                    {route === "/cart" || route === "/checkout" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`sm:w-2 sm:h-2 w-[6px] h-[6px] ${
                          staticNavbar ? "bg-black" : `bg-${headerColor}`
                        } rounded-full absolute sm:-left-3 -left-2 top-3 sm:top-2 transition `}
                      ></motion.div>
                    ) : null}
                    <Link href="/cart">
                      <motion.span whiletap={{ scale: 0.97 }}>
                        <FaBagShopping size={22} />
                      </motion.span>
                    </Link>
                  </div>
                </Magnetic>
              </div>
              <Magnetic>
                <div className="middle subpixel-antialiased tracking-widest sm:text-6xl text-4xl py-10">
                  <Link
                    href="/"
                    className={`${myFont.className} overflow-hidden text-center flex justify-center`}
                  >
                    <h2>Colbi</h2>
                  </Link>
                </div>
              </Magnetic>
            </div>
          </motion.header>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
