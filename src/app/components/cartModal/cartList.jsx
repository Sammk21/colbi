import React from "react";
import { RxCross2 } from "react-icons/rx";

const CartList = () => {
  return (
    <div className="flex py-4 border-b relative">
      <div className="image h-24 w-24 lg:h-40 lg:w-40 aspect-square ">
        <img
          className="object-cover w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="details flex flex-col capitalize text-sm lg:text-lg gap-y-2 font-semibold px-2 py-2">
        <div className="absolute right-0 top-4">
          <RxCross2 />
        </div>
        <h3>jeans blue</h3>
        <h3 className="leading-6">$99.99</h3>
        <div className="flex text-gray-500 text-xs font-normal gap-2 ">
          <div>
            <label htmlFor="quanitiy">Quantity:</label>
            <select
              className="text-black font-semibold lowercase"
              name="quanitiy"
              id="quanitiy"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <span className="border-r border-gray-200"></span>
          <div>
            <label htmlFor="size">Size:</label>
            <select
              className="text-black font-semibold lowercase"
              name="size"
              id="size"
            >
              <option value="xl">Xl</option>
              <option value="m">M</option>
              <option value="s">S</option>
              <option value="xs">xs</option>
            </select>
          </div>
          <span className="border-r border-gray-200"></span>
          <div>
            <label htmlFor="color">Color:</label>
            <select className="text-black font-semibold" name="cars" id="color">
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="slate">Slate</option>
              <option value="beige">Beige</option>
            </select>
            {/* Color : <span className="text-black font-semibold">Black</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
