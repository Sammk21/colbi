import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const ImageViewer = () => {
  return (
    <div className="h-full w-full group">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
        showArrows={true}
        renderArrowPrev={(clickHandler) => (
          <FaArrowLeft clickHandler={clickHandler} />
        )}
        renderArrowNext={(clickHandler) => (
          <FaArrowRight clickHandler={clickHandler} />
        )}
      >
        {product?.images?.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt={img.alt}
            fill
            className="object-center object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageViewer;
