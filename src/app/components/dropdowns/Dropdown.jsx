"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DropdownSlide } from "./dropdownAnimation./DropdownAnim";
import DropdownContent from "./dropdownContent/DrodownContent";

const Dropdown = ({ trigger }) => {
  const [items, setItems] = useState([]);

  const method = trigger;

  const sortList = [
    {
      title: "High to low",
    },

    {
      title: "Low to high",
    },

    {
      title: "Defaut",
    },

    {
      title: "Popular",
    },
  ];

  const filterList = [
    {
      title: "baggy",
    },

    {
      title: "skinny",
    },

    {
      title: "color",
      colors: [
        {
          id: 1,
          color: "black",
        },
        {
          id: 2,
          color: "white",
        },
      ],
    },

    {
      title: "Popular",
    },
  ];
  useEffect(() => {
    if (method === "sort") {
      setItems(sortList);
    } else if (method === "filter") {
      setItems(filterList);
    } else {
      setItems({});
    }
  }, [trigger]);

  return (
    <motion.div
      variants={DropdownSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full absolute bg-white  z-20 bottom-100 shadow-lg lg:shadow-sm flex justify-around items-center overflow-hidden "
    >
      <DropdownContent items={items} />
    </motion.div>
  );
};

export default Dropdown;
