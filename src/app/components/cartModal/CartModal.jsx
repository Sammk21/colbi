"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CartList from "./cartList";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const CartModal = ({ isCartOpen }) => {
  return (
    <>
      <div className="flex justify-center">
        <motion.nav
          animate={isCartOpen ? "open" : "closed"}
          className="fixed -bottom-5 rounded-lg "
        >
          <motion.ul
            className="bg-white pt-6 pb-2 px-4 text-black shadow-lg w-[30vw]  h-[80vh] overflow-y-scroll"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(50% 50% 0% 50% round 0px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isCartOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>
              {" "}
              <CartList />{" "}
            </motion.li>
            <motion.li variants={itemVariants}>
              {" "}
              <CartList />{" "}
            </motion.li>
            <motion.li variants={itemVariants}>
              {" "}
              <CartList />{" "}
            </motion.li>
            <motion.div className=" flex h-12 justify-center items-center mt-6">
              <motion.button className="w-full h-full bg-black text-white rounded-2xl text-sm capitalize ">
                go to cart
              </motion.button>
            </motion.div>
          </motion.ul>
        </motion.nav>
      </div>
    </>
  );
};

export default CartModal;
