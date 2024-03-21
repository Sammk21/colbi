import React from "react";

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
          <ArrowPrevious clickHandler={clickHandler} />
        )}
        renderArrowNext={(clickHandler) => (
          <ArrowNext clickHandler={clickHandler} />
        )}
      >
        {product?.images?.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageViewer;
