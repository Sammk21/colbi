"use client";
import React, { useContext, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Nav from "./nav/Nav";
import Magnetic from "./../MagneticButtons/MagneticButtons";
import { Context } from "../../../stateManagers/context/Context";
import useMediaQuery from "../../../custom hooks/UseMediaQuery";

const FloatingMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const { headerColor, staticNavbar } = useContext(Context);

  const isSmallDevice = useMediaQuery(350);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  const rotateValue = isActive ? 45 : 0;
  const rotateValueNeg = isActive ? -45 : 0;
  const margin = isActive ? 0 : 2;

  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { mass: 0.5, restDelta: 0.0001 });
  const rotate = useTransform(spring, (progress) => progress * 400 + "deg");

  return (
    <>
      <Magnetic>
        <motion.div
          initial={{ top: "150px" }}
          animate={{ top: isSmallDevice ? "40px" : "20px" }}
          transition={{
            duration: 0.3,
            ease: [0, 0.55, 0.45, 1],
          }}
          className="fixed z-[21] h-20 w-20 right-0 sm:right-8 sm:top-6 top-0 flex flex-col items-center justify-center cursor-pointer"
          onClick={toggleBurger}
        >
          <motion.div
            style={{ rotate }}
            className="flex justify-center  floatingButton  "
          >
            <motion.svg
              className=" transition  h-[55px] w-[55spx] sm:h-[70px] sm:w-[70px] lg:w-[85px] lg:h-[85px]"
              viewBox="0 0 268 268"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                className={
                  isActive
                    ? ` fill-black transition duration-700`
                    : ` ${
                        staticNavbar ? "fill-black " : `fill-${headerColor}`
                      } transition duration-700`
                }
                fillRule="evenodd"
                clipRule="evenodd"
                d="M116.445 0L101.267 23.21L75.8992 12.0542L68.6253 38.8025L41.0439 36.0154L42.3829 63.679L15.2792 69.5608L25.1247 95.4433L1.14294 109.396L18.5083 130.955L0 151.627L23.2051 166.761L11.9828 192.11L38.7355 199.327L35.9057 226.891L63.6011 225.499L69.432 252.562L95.3528 242.672L109.279 266.616L130.891 249.226L151.542 267.662L166.727 244.459L192.077 255.617L199.356 228.867L226.953 231.649L225.603 203.981L252.708 198.108L242.871 172.214L266.852 158.275L249.481 136.708L267.987 116.042L244.79 100.911L256.007 75.5528L229.248 68.3458L232.082 40.7798L204.391 42.1736L198.562 15.1035L172.633 24.9894L158.719 1.05195L137.099 18.4403L116.445 0Z"
              ></motion.path>
            </motion.svg>
          </motion.div>

          <div className="absolute top-[47%] z-10 ">
            <motion.div
              className={
                isActive
                  ? `bg-white w-[30px] h-[2px]  mb-1`
                  : `bg-${
                      staticNavbar
                        ? "white"
                        : headerColor == "black"
                        ? "white"
                        : "black"
                    } w-[30px] h-[2px]  mb-1 burger-sticks`
              }
              initial={{ rotate: rotateValue, marginBottom: margin }}
              animate={{
                rotate: rotateValue,
                marginBottom: margin,
              }}
            ></motion.div>
            <motion.div
              className={
                isActive
                  ? `bg-white w-[30px] h-[2px]  mb-1`
                  : `bg-${
                      staticNavbar
                        ? "white"
                        : headerColor == "black"
                        ? "white"
                        : "black"
                    } w-[30px] h-[2px]  mb-1  burger-sticks`
              }
              initial={{ rotate: rotateValue, marginTop: margin }}
              animate={{
                rotate: rotateValueNeg,
                marginTop: margin,
              }}
            ></motion.div>
          </div>
        </motion.div>
      </Magnetic>

      {/* </div> */}

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default FloatingMenu;
