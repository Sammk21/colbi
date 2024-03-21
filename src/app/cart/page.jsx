"use client";
import { AiFillQuestionCircle } from "react-icons/ai";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import { PageWrapper } from "../components/page-wrapper/PageWrapper";
import CartList from "../components/cartModal/cartList";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://fereclaurus.com/uploads/small_jpeg_optimizer_MG_5170_1_e7a7437872.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://fereclaurus.com/uploads/small_IMG_9702_e8688e78b7.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://fereclaurus.com/uploads/small_IMG_5222_9c96d81026.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://fereclaurus.com/uploads/IMG_9782_cd6817b6ca.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://fereclaurus.com/uploads/small_590172_BE_180_E_4156_B180_9_E376_FC_98860_1_d85566fd41.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Cart() {
  const router = useRouter();

  return (
    <>
      <PageWrapper>
        <div className="mt-36 text-black w-[100vw] px-6  ">
          <div className="flex justify-between mb-10 ">
            <h1 className="font-semibold text-3xl">My Bag(2)</h1>
          </div>
          <div className="lg:flex-row my-6 flex flex-col h-full lg:h-[100vh] lg:overflow-y-auto py-7 border-t border-b">
            <div className="w-[100vw] lg:w-2/3 bg-white p-2 sm:p-10 ">
              <motion.ul
                className=" text-black "
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
                // style={{ pointerEvents: isCartOpen ? "auto" : "none" }}
              >
                <motion.li variants={itemVariants}>
                  <CartList />
                </motion.li>
                <motion.li variants={itemVariants}>
                  {" "}
                  <CartList />
                </motion.li>
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
                <motion.li variants={itemVariants}>
                  {" "}
                  <CartList />{" "}
                </motion.li>
                <motion.li variants={itemVariants}>
                  {" "}
                  <CartList />{" "}
                </motion.li>
                <motion.div className=" flex h-12 justify-center items-center mt-6"></motion.div>
              </motion.ul>
            </div>
            <div className="lg:p-8 lg:w-1/3 w-[95vw] mx-auto lg:sticky lg:top-[30px] lg:border-l ">
              <div className="w-full h-full">
                <h1 className="text-3xl font-medium py-4">Summary</h1>
                <div className="lg:p-0">
                  <h1 className="text-sm font-medium ">
                    Do you have a promo code?
                  </h1>
                  <input
                    type="text"
                    id="default-input"
                    className=" border border-gray-300 text-black uppercase text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                  />
                  <div className="py-5 capitalize border-b">
                    <div className="grid grid-cols-3 text-sm my-1">
                      <div className="col-span-2 flex items-center ">
                        Subtotal{" "}
                        <span>
                          <AiFillQuestionCircle className="cursor-pointer" />
                        </span>
                      </div>
                      <div className="flex justify-end">$112.00</div>
                    </div>
                    <div className="grid grid-cols-3 text-sm my-1">
                      <div className="col-span-2 flex items-center ">
                        Estimated shipping and & handling{" "}
                      </div>
                      <div className="flex justify-end items-center">
                        $112.00
                      </div>
                    </div>
                    <div className="grid grid-cols-3 text-sm my-1">
                      <div className="col-span-2 flex items-center ">
                        Estimated tax{" "}
                        <span className="cursor-pointer">
                          <AiFillQuestionCircle />
                        </span>
                      </div>
                      <div className="flex justify-end">$112.00</div>
                    </div>
                    <div className="grid grid-cols-3 text-sm my-1 font-medium ">
                      <div className="col-span-2 flex items-center ">
                        Promo code
                      </div>
                      <div className="flex justify-end text-red-600">
                        -$112.00
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 my-1 font-medium uppercase py-2 border-b">
                      <div className="col-span-2 flex items-center ">
                        total{" "}
                      </div>
                      <div className="flex justify-end">$112.00</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full my-7 ">
                    <button
                      onClick={() => router.push("/checkout")}
                      className=" capitalize text-sm hover:bg-gray-700 bg-black text-white p-4 rounded-full flex items-center"
                    >
                      checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
