import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Gallary = ({ bg, vigg, mousePosition, id }) => {
  const { x, y } = mousePosition;

  return (
    <div key={id} className="h-[100vh] gallary-clip-path relative">
      <div className="w-full h-full relative">
        <img
          src={bg}
          alt="promo"
          className="w-full h-[100%] object-cover object-center"
        />
      </div>

      <motion.div
        className="rounded-lg lg:h-[30vw] lg:w-[25vw] w-[45vw] h-[55vw] sm:top-0 top-0 fixed overflow-hidden"
        style={{ x, y }}
      >
        <img className="w-full h-full object-cover" src={vigg} alt="image" />

        <Link
          href="/product/1"
          className="flex items-center justify-center rounded-full lg:h-[30vw] lg:w-[25vw] w-[45vw] h-[55vw] top-0 absolute overflow-hidden"
        >
          <p className="sm:w-[13vw] sm:h-[13vw] h-[18vw] w-[18vw] shadow-xl backdrop-blur-[2px] drop-shadow-sm capitalize font-semibold  flex justify-center items-center pulse rounded-full  text-[.40rem] sm:text-sm border border-white text-white">
            Shop this look
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Gallary;
