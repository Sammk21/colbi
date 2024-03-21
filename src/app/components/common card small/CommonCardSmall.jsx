import Link from "next/link";
import React from "react";

const SmallCard = () => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-md lg:rounded-none bg-gray-200 lg:aspect-square">
      <Link
        href="/"
        className="border-none cursor-pointer decoration-black aspect-square"
      >
        <img
          className=" object-cover w-full h-full  rounded-none"
          src="https://www.dior.com/couture/ecommerce/media/catalog/product/2/I/1700223034_413J650A0862_C080_E01_ZHC.jpg?imwidth=1920"
          alt=""
        />
      </Link>
    </div>
  );
};

export default SmallCard;
