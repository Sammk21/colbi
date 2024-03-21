"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  ArrowNext,
  ArrowPrevious,
} from "../productOverviewSlider/ProductOverviewSlider";

const Banner = () => {
  return (
    <div className=" text-white text-[20px] max-w-[100vw] overflow-hidden group  ">
      <Carousel
        className="w-[100vw]"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler) => (
          <ArrowPrevious clickHandler={clickHandler} />
        )}
        renderArrowNext={(clickHandler) => (
          <ArrowNext clickHandler={clickHandler} />
        )}
      >
        <div>
          <img
            src="https://www.dior.com/couture/ecommerce/media/catalog/product/4/h/1700223085_413C209A6069_C188_E01_ZHC.jpg?imwidth=1920"
            className="aspect-[16/10]  object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="	https://www.dior.com/couture/ecommerce/media/catalog/product/4/h/1700223085_413C209A6069_C188_E01_ZHC.jpg?imwidth=1920"
            className="aspect-[16/10] object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="https://www.dior.com/couture/ecommerce/media/catalog/product/4/h/1700223085_413C209A6069_C188_E01_ZHC.jpg?imwidth=1920"
            className="aspect-[16/10]  object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
