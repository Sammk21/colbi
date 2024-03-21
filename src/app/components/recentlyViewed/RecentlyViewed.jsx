import Link from "next/link";
import React from "react";
import SmallCard from "../common card small/CommonCardSmall";

const RecentlyViewed = () => {
  return (
    <div>
      <div className="w-full mx-auto sm:w-[80vw] bg-white sm:py-14 py-8">
        <div className="text-black flex justify-center ">
          <h1 className="lg:text-[5vw] text-[6vw] font-semibold mt-3 sm:mt-0 lg:font-normal capitalize">
            Recently Viewed
          </h1>
        </div>
        <div className="grid grid-cols-2 px-2 lg:px-[0] lg:gap-x-16 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
