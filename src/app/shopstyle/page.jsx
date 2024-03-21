import Image from "next/image";
import React from "react";
// import AsyncImage from "../components/AsyncImage/AsyncImage";
const page = () => {
  return (
    <div className="w-[100vw] mt-[8rem] h-[90vh]">
      <div className="flex w-full h-full justify-between ">
        <div className="w-[49%] h-full">
          <Image
            className=" h-full w-full object-cover object-center "
            fill
            loading="lazy"
            src="https://fereclaurus.com/uploads/jeans_2_background_083b368849.jpeg"
          />
        </div>
        <div className="w-[49%]">
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square">
              <Image
                className=" h-full w-full object-cover object-center "
                fill
                loading="lazy"
                src="https://fereclaurus.com/uploads/jeans_2_background_083b368849.jpeg"
              />
            </div>
            <Image
              className=" h-full w-full object-cover object-center "
              fill
              loading="lazy"
              src="https://fereclaurus.com/uploads/jeans_2_background_083b368849.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
