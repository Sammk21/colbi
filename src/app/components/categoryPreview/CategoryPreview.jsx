"use client";
import React, { useState } from "react";
import HackerText from "../hackerText/hackerText";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "SHIRT",
    imageSrc:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/8/7/1697649363_313C509AA767_C900_E01_ZHC.jpg?imwidth=1920",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    id: 2,
    name: "Jacket",
    imageSrc:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/A/8/1696438456_033C410A4462_C579_E01_ZHC.jpg?imwidth=1920",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    id: 3,
    name: "Bags",

    imageSrc:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/e/B/1694537771_M0997ONGE_M030_E01_ZHC.jpg?imwidth=1920",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    id: 4,
    name: "JEANS",

    imageSrc:
      "https://fereclaurus.com/uploads/large_CBC_008_E4_D71_F_4117_8_AEC_D2_D0_C7201_A90_dce05790eb.webp",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const CategoryPreview = () => {
  const [selected, setSelected] = useState(categories[1]?.imageSrc);
  return (
    <div className="relative">
      <div className="flex justify-center lg:text-[5vw] text-[6vw] font-semibold mt-3 sm:mt-0 lg:font-normal capitalize">
        <h1 className="text-black">Shop</h1>
      </div>
      <div className="text-black text-[5vw] font-thin uppercase w-full ">
        <div className=" mx-10 flex justify-between">
          <div
            data-scroll
            data-scroll-speed="0.1"
            className="w-[36%] absolute top-[25%] lg:relative shadow-sm"
          >
            <div className="aspect-[9/12] ">
              <Image
                src={selected}
                alt="cateforyImage"
                className=" h-full w-full object-cover object-center  rounded-lg"
                layout="fill"
                loading="lazy"
              />
            </div>
          </div>

          <ul className=" w-full lg:w-[55%] text-right ">
            {categories.map((data, index) => (
              <div key={data.id}>
                <li
                  onMouseOver={() => {
                    setSelected(data.imageSrc);
                  }}
                  className=" p-5 cursor-pointer font-thin"
                >
                  <HackerText text={data.name} />
                </li>

                <div className="w-full border-b"></div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
