"use client";
import { useMediaQuery } from "@react-hook/media-query";
import React, { useState } from "react";
import { BiChevronDown, BiParagraph } from "react-icons/bi";
import ProductList from "../components/productList/Productlist";
import { motion, AnimatePresence } from "framer-motion";
import InfoHeader from "../components/mainheader/Mainheader";
import Dropdown from "../components/dropdowns/Dropdown";
import { PageWrapper } from "../components/page-wrapper/PageWrapper";

const FilterModal = ({ handleTrigger }) => {
  return (
    <span
      onClick={() => handleTrigger("filter")}
      className="mx-3 flex group group-hover:semi-bold text-xs sm:text-sm"
    >
      <p className="group-hover:drop-shadow-md cursor-pointer">Filter</p>
      <span className="my-auto ml-1 group-hover:rotate-180 transition ">
        <BiChevronDown style={{ fontSize: "17px" }} />
      </span>
    </span>
  );
};

const CategoriesList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggeredBy, setTriggeredBy] = useState("");

  const handleTrigger = (trigger) => {
    if (trigger === "sort") {
      setIsOpen(!isOpen);
      setTriggeredBy(trigger);
    } else if (trigger === "filter") {
      setIsOpen(!isOpen);
      setTriggeredBy(trigger);
    }
  };

  const isBreakpoint = useMediaQuery(1023);

  return (
    <PageWrapper>
      <section className=" bg-white text-black w-[100vw] ">
        <div className="h-[100px]"></div>
        <div className=" flex justify-center flex-col">
          <InfoHeader />
          <div className="w-full relative h-auto  ">
            <div className="pb-4 pt-7 w-[93vw] mx-auto flex justify-between border-b  ">
              <FilterModal handleTrigger={handleTrigger} />

              <div>
                <div className="text-xs sm:text-sm capitalize flex ">
                  <p className="text-gray-500">30 articles</p>
                  <span className=" ml-3">|</span>
                  <span
                    onClick={() => handleTrigger("sort")}
                    className="mx-3 flex group h-full "
                  >
                    <p className="group-hover:drop-shadow-md shadow-black cursor-pointer ">
                      Sort by: price higest to low
                    </p>
                    <span
                      className={`my-auto ml-1 ${
                        isOpen ? `rotate-180` : ""
                      } transition`}
                    >
                      <BiChevronDown style={{ fontSize: "17px" }} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {isOpen && <Dropdown trigger={triggeredBy} />}
            </AnimatePresence>
          </div>
        </div>
        <div className="h-[auto]">
          <ProductList />
        </div>
      </section>
    </PageWrapper>
  );
};

export default CategoriesList;
