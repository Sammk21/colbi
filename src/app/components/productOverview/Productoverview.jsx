"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import ProductOverviewSlider from "../productOverviewSlider/ProductOverviewSlider";
import { motion } from "framer-motion";
import useMediaQuery from "../../../custom hooks/UseMediaQuery";
import { usePathname } from "next/navigation";
import Image from "next/image";

const product = {
  name: "LARGE DIOR BOOK TOTE",
  price: "Rs.1922.00",
  desc: "Gold-Tone and White Butterfly Around The World Embroidery (42 x 35 x 18.5 cm)",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://www.dior.com/couture/ecommerce/media/catalog/product/1/7/1697649390_1EIPO302YKY_H03E_E01_ZHC.jpg?imwidth=1920",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://www.dior.com/couture/ecommerce/media/catalog/product/V/m/1697649504_H_24_2_LOOK_141_E19_GH.jpg?imwidth=1200",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://www.dior.com/couture/ecommerce/media/catalog/product/i/V/1697649504_H_24_2_LOOK_141_E20_GH.jpg?imwidth=1200",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://www.dior.com/couture/ecommerce/media/catalog/product/1/7/1697649390_1EIPO302YKY_H03E_E08_GH.jpg?imwidth=1200",
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: "https://www.dior.com/couture/ecommerce/media/catalog/product/1/7/1697649390_1EIPO302YKY_H03E_E07_GH.jpg?imwidth=1200",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOverview() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const isBreakpoint = useMediaQuery(1023);

  return (
    <div className="bg-white  ">
      <div className="sm:pt-[7rem] pt-[5rem]  ">
        {/* Image gallery */}
        <div className="lg:flex-row flex flex-col ">
          {isBreakpoint ? (
            <ProductOverviewSlider />
          ) : (
            <div className="lg:w-[60%] w-full">
              <div className="mx-auto sm:px-6 lg:grid lg:gap-y-2  lg:grid-cols-2 lg:gap-x-2 lg:px-8 ">
                <div className="aspect-square col-span-2 row-span-1 overflow-hidden relative  lg:block">
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className=" h-full w-full object-cover object-center  "
                    layout=""
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="aspect-square overflow-hidden relative ">
                  <Image
                    src={product.images[3].src}
                    alt={product.images[3].alt}
                    className=" h-full w-full object-cover object-center  "
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="aspect-square  overflow-hidden relative ">
                  <Image
                    src={product.images[1].src}
                    alt={product.images[1].alt}
                    className="h-full w-full object-cover object-center  "
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="aspect-square  overflow-hidden relative ">
                  <Image
                    src={product.images[2].src}
                    alt={product.images[2].alt}
                    className="h-full w-full object-cover object-center"
                    fill
                  />
                </div>

                <div className="aspect-square   overflow-hidden relative ">
                  <Image
                    src={product.images[4].src}
                    alt={product.images[4].alt}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    fill
                  />
                </div>
              </div>
            </div>
          )}
          <div className="lg:w-[34%]  w-full lg:ml-[3%] lg:mr-[3%] px-7 lg:p-0  ">
            <div className="h-auto w-full lg:sticky top-[50px]">
              <div className="lg:col-span-2 mt-[0.3rem] tracking-wider  lg:border-gray-200 lg:pr-8">
                <h1 className="text-xs font-extralight  text-gray-900 ">NEW</h1>
              </div>
              <div className="lg:col-span-2 mt-[0.3rem] tracking-wider  lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-light uppercase  text-gray-900 ">
                  {product.name}
                </h1>
              </div>

              <div className="lg:col-span-2 mt-[0.3rem] tracking-wider  lg:border-gray-200 lg:pr-8">
                <h1 className="text-xs capitalize font-extralight  text-gray-900 ">
                  {product.desc}
                </h1>
              </div>

              <p className="text-xl mt-[0.3rem] tracking-tight text-gray-900">
                {product.price}
              </p>

              <div className="lg:col-span-2 my-[1rem] tracking-wider lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-xs font-thin  text-gray-600 ">
                  Tag: #232328
                </h1>
              </div>

              <form className="mt-3">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-black hover:text-black"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-1 ring-black" : "",
                              "group relative flex items-center justify-center rounded-sm border py-3 px-4 text-sm font-normal uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-black-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="text-sm border-black border font-light uppercase hover:bg-gray-50 text-black p-4 rounded-full w-full mt-5"
                >
                  Add to bag
                </button>
              </form>

              <div className="mt-10">
                <div className="flex justify-between cursor-pointer">
                  <h3 className="text-sm font-medium uppercase tracking-tight text-gray-900">
                    Details
                  </h3>
                </div>

                <div
                  className={`mt-4 space-y-6
                 
                   `}
                >
                  <motion.div>
                    <p className="text-sm text-gray-600 overflow-hidden">
                      {product.details}
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium uppercase tracking-tight text-gray-900">
                    Highlights
                  </h3>
                </div>

                <div className="mt-4">
                  <motion.div>
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm overflow-hidden"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product info */}
    </div>
  );
}
