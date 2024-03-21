"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp, opacity } from "./anim";
const PreLoader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  const almostFamousArray = [
    "Almost Famous", // English
    "Casi Famoso", // Spanish
    "Presque Célèbre", // French
    "Fast Berühmt", // German
    "Quasi Famoso", // Italian
    "Quase Famoso", // Portuguese
    "差不多有名", // Chinese (Mandarin)
    "ほとんど有名", // Japanese
    "Почти Знаменитый", // Russian
    "تقريبًا مشهور", // Arabic
  ];

  useEffect(() => {
    if (index == almostFamousArray.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className=" text-black h-[100vh] w-[100vw] flex items-center justify-center fixed z-50 bg-black"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex text-white text-3xl lgtext-5xl items-center absolute z-10"
          >
            <span className="w-[10px] h-[10px] bg-white rounded-full mr-3"></span>
            {almostFamousArray[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
};

export default PreLoader;
