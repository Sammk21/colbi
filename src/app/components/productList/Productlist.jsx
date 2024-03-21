"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useFetch, { fetchData } from "../../../custom hooks/useFetch";
import Image from "next/image";
import blur from "../../../utils/placieholder";

const products = [
  {
    link: "/product/1",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2F28%2Fdb28e4a4158b2362d3203d0f5988bf340c812faa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
  },
  {
    link: "/product/1",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2F26%2F0026cf1d0bda2651dfdc4e0096a4ec5562543329.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    link: "/product/1",
    img: `https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff9%2F8c%2Ff98cba92caa7e9006db08a35f2853d371a5503a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]`,
  },
  {
    link: "/product/1",
    img: `https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2F1d%2Ff81dfc9f7f3ad23fdde92d44205d345ff5b0e15f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]`,
  },
  {
    link: "/product/1",
    img: `https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9e%2Fcf%2F9ecf4732395ab6a1cde0987e6d7e10b910c024ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D`,
  },
];

export default function ProductList({ type }) {
  const [openQuickView, setOpenQuickView] = useState(true);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="bg-white h-[full] z-50">
      <div className="sm:pt-24">
        <div className="mt-6 grid grid-cols-2 px-2 lg:px-[0] lg:gap-x-[0.25rem] gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[0.25rem]  lg:p-[]">
          {products.map((data, i) => (
            <div key={i} className="group relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative aspect-square overflow-hidden rounded-md lg:rounded-none bg-gray-200 "
              >
                <Link href={data?.link}>
                  <Image
                    src={data.img}
                    className=" h-full w-full object-cover object-center "
                    fill
                    loading="lazy"
                  />
                </Link>
                {/* <motion.button
                  whileHover={{ scale: 1.1, opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  className="absolute z-10 border-[0.8px] border-white p-4 transition-all bg-opacity-50 text-white text-md rounded-full md:p-10 cursor-pointer"
                >
                  Quick view
                </motion.button> */}
              </motion.div>
              <div className="mt-4 flex justify-between mx-2">
                <div>
                  <h3 className="text-sm text-gray-700 capitalize">
                    <Link href={data.link}>
                      <p aria-hidden="true" className="absolute inset-0" />
                      test
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">white</p>
                </div>
                <p className="text-sm font-medium text-gray-900">679</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Product = ({ data }) => {
  return (
    <div className="group relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative aspect-square overflow-hidden rounded-md lg:rounded-none bg-gray-200 "
      >
        <Link href={`/product/1`}>
          <Image
            src={data.image}
            className=" h-full w-full object-cover object-center "
            fill
            loading="lazy"
          />
        </Link>
        <motion.button
          whileHover={{ scale: 1.1, opacity: 1, y: 0 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          className="absolute z-10 border-[0.8px] border-white p-4 transition-all bg-opacity-50 text-white text-md rounded-full md:p-10 cursor-pointer"
        >
          Quick view
        </motion.button>
      </motion.div>
      <div className="mt-4 flex justify-between mx-2">
        <div>
          <h3 className="text-sm text-gray-700 capitalize">
            <Link href="/product/1">
              <p aria-hidden="true" className="absolute inset-0" />
              {data.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">white</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{data.price}</p>
      </div>
    </div>
  );
};
