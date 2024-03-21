"use client";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaExpand } from "react-icons/fa";

export const ArrowNext = ({ clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className=" rotate-180 absolute right-3 bottom-[50%]  rounded-full group-hover:translate-x-1  h-[40px] w-[40px] tp-black flex justify-center items-center cursor-pointer hover:opacity-75 transition"
    >
      <BiArrowBack className="text-sm md:text-lg text-black" />
    </div>
  );
};

export const ArrowPrevious = ({ clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="absolute left-3 bottom-[50%] group-hover:-translate-x-1 z-[2] h-[40px] w-[40px] flex justify-center rounded-full items-center cursor-pointer hover:opacity-75 transition"
    >
      <BiArrowBack className="text-sm md:text-lg text-black" />
    </div>
  );
};

const ProductOverviewSlider = () => {
  const [open, setOpen] = useState(false);
  const product = {
    images: [
      {
        id: 1,
        src: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-spring-24-men/folder-wave-1/413j696a0817c085/42013620-1-eng-GB/413j696a0817c085_1440_1200.jpg?imwidth=1080",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        id: 2,
        src: "https://media.dior.com/couture/ecommerce/media/catalog/product/O/x/1697649442_413J696A0817_C985_E01_GH.jpg?imwidth=3840",
        alt: "Model wearing plain black basic tee.",
      },
      {
        id: 3,
        src: "https://media.dior.com/couture/ecommerce/media/catalog/product/3/x/1698245264_H_24_1_LOOK_013_E07_GH.jpg?imwidth=3840",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        id: 4,
        src: "https://fereclaurus.com/uploads/Jeans_518bdc669f.jpeg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
  };

  return (
    <>
      <div className="text-white text-[20px] w-full mx-auto max-w-lg py-6 group  relative">
        <Carousel
          key={product?.images?.id}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
          showArrows={true}
          renderArrowPrev={(clickHandler) => (
            <ArrowPrevious clickHandler={clickHandler} />
          )}
          renderArrowNext={(clickHandler) => (
            <ArrowNext clickHandler={clickHandler} />
          )}
        >
          {product?.images?.map((img) => (
            <div key={img.id}>
              <img src={img.src} alt={img.alt} className="relative" />
            </div>
          ))}
        </Carousel>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: product.images[0].src },
          { src: product.images[1].src },
          { src: product.images[2].src },
          { src: product.images[3].src },
        ]}
      />
    </>
  );
};

export default ProductOverviewSlider;
