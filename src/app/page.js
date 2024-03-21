"use client";
import ProductList from "./components/productList/Productlist";
import CategoryPreview from "./components/categoryPreview/CategoryPreview";
import Promo from "./components/Promo/Promo";
import Banner from "./components/banner/banner";
import CustomVideoPlayer from "./components/videoplayer/videoplayer";

import RecentlyViewed from "./components/recentlyViewed/RecentlyViewed";
import PreLoader from "./components/PreLoader/PreLoader";
import { AnimatePresence } from "framer-motion";
import { Context } from "../stateManagers/context/Context";
import { useContext, useEffect } from "react";
import ProductQuickview from "./components/productQuickview/productQuickview";
import CartModal from "./components/cartModal/CartModal";
import { usePathname } from "next/navigation";

export default function Home() {
  const { isLoading, setIsLoading } = useContext(Context);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      // setTimeout(() => {
      //   if (isLoading) {
      //     setIsLoading(false);
      //     window.scrollTo(0, 0);
      //     document.body.style.cursor = "default";
      //   }
      // }, 2000);
    })();
  }, []);
  // [isLoading, setIsLoading]; up dependencies

  return (
    <>
      {/* <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence> */}
      <CustomVideoPlayer
        videoSrc={
          "https://www.dior.com/couture/var/dior/storage/original/video/bc9b367b5e1fd496d468dd5f063e00c7.mp4"
        }
        isLoading={isLoading}
      />
      <Promo />
      <RecentlyViewed />
      <Banner />
      <CategoryPreview />
      <ProductList />
      <ProductQuickview />
    </>
  );
}
