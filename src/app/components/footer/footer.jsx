"use client";
import FooterLinks from "./FooterLinks";
import HackerText from "../hackerText/hackerText";
import {
  FaAmazonPay,
  FaApplePay,
  FaCcVisa,
  FaCreditCard,
  FaGooglePay,
  FaPaypal,
} from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiCashLine } from "react-icons/ri";

const helpers = [
  {
    title: "Shop",

    href: "/categories",
  },

  {
    title: "info",

    href: "/info",
  },

  {
    title: "terms",

    href: "/terms",
  },

  {
    title: "returns",

    href: "/returns",
  },
];
const socials = [
  {
    title: "Instagram",

    href: "#",
  },

  {
    title: "facebook",

    href: "#",
  },

  {
    title: "pinterest",

    href: "#",
  },

  {
    title: "x",

    href: "#",
  },
];

export default function index() {
  return (
    <>
      <div className=" h-full bg-[#f2f2f4] w-[100vw] rounded-3xl ">
        <div className="footer p-5 d grid sm:grid-cols-2 grid-cols-1 text-black justify-start items-center  mt-20 ">
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="left lg:text-[10rem] lg:text-9xl sm:text-[5.8rem] text-5xl justify-center py-5  tracking-tighter flex sm:flex-col "
          >
            <span className="lg:leading-[10rem] leading-[6rem]">
              <HackerText text="Almost" />
            </span>
            <span className="leading-[6rem] sm:pl-12">
              <HackerText text="Famous" />
            </span>
          </div>
          <div className=" flex items-center justify-around h-full uppercase  font-medium">
            <div className="flex flex-col gap-y-2 text-sm sm:text-base">
              {helpers.map((data, index) => {
                return <FooterLinks key={index} data={{ ...data, index }} />;
              })}
            </div>
            <div className="flex flex-col gap-y-2  text-sm sm:text-base">
              {socials.map((data, index) => {
                return <FooterLinks key={index} data={{ ...data, index }} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex sm:justify-between flex-col justify-center p-5 text-black text-xs sm:text-sm">
          <span className="border-t"></span>
          <div className="text-gray-500 flex justify-center p-5">
            <span>© AlmostFamous 2023. All rights reserved. </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 flex justify-center">
              Secure payments
            </span>
            <span className="flex gap-x-2 py-3 justify-center p-5">
              <FaGooglePay size={25} />
              <FaCcVisa size={25} />
              <FaCreditCard size={25} />
              <SiPaytm size={25} />
              <FaPaypal size={25} />
              <FaApplePay size={25} />
              <FaAmazonPay size={25} />
              <RiCashLine size={25} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
