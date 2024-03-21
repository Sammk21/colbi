"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePause } from "react-icons/ai";
import { LiaPlaySolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Six_Caps } from "next/font/google";
import { textAnimation } from "../../Animation/Animations";

const sixCaps = Six_Caps({ subsets: ["latin"], weight: "400" });
const CustomVideoPlayer = ({ videoSrc, isLoading }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const playPauseIcon = isPlaying ? <AiOutlinePause /> : <LiaPlaySolid />;

  return (
    <div className="relative lg:aspect-video  lg:h-[100vh] lg:w-[100vw] group ">
      <motion.video
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0, 0.55, 0.45, 1],
        }}
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        loop={true}
        className="w-full h-[100vh] object-cover -z-100 "
      />

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute z-10 bottom-10 border-[1px] mt-24 border-white right-5 sm:p-4 p-2 transition-all bg-opacity-50 text-white text-3xl rounded-full md:p-10 cursor-pointer hover:bg-opacity-70"
      >
        {playPauseIcon}
      </button>
    </div>
  );
};

export default CustomVideoPlayer;
