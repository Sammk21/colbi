import React from "react";
import { BiChevronDown } from "react-icons/bi";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-atlantis-bb-monogram-reverse-canvas-handbags--M46816_PM2_Front%20view.png?wid=1440&hei=1440",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-atlantis-bb-monogram-reverse-canvas-handbags--M46816_PM1_Detail%20view.png?wid=1440&hei=1440",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-atlantis-bb-monogram-reverse-canvas-handbags--M46816_PM1_Interior2%20view.png?wid=1440&hei=1440",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-atlantis-bb-monogram-reverse-canvas-handbags--M46816_PM1_Side%20view.png?wid=1440&hei=1440",
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

const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {product.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <a
                href={breadcrumb.href}
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {breadcrumb.name}
              </a>
              <span className="-rotate-90">
                <BiChevronDown />
              </span>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <a
            href={product.href}
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600"
          >
            {product.name}
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
